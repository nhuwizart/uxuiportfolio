
<script src="https://test2.ctrwow.com/javvycoffee/assets/image/a39685b5-82e2-4d29-bc90-7a8b2d999722/684bc4fb46ec7a1924044303/9ffba04b-3eb1-456a-8d63-3b22993b5672/dd.min.js"></script>
<script>  
function updateFormName(section1Avaliable){
	if(section1Avaliable){
		const frmSection1 = document.querySelectorAll(".section-1 form");
		Array.prototype.slice.call(frmSection1).forEach(frm => {
			const fromName = frm.getAttribute("name");
			frm.setAttribute("name",`${fromName.replace(/-second/g,"")}`);
		})
		
		const frmSection2 = document.querySelectorAll(".section-2 form");
		Array.prototype.slice.call(frmSection2).forEach(frm => {
			const fromName = frm.getAttribute("name");
			frm.setAttribute("name",`${fromName}-second`);
		})
	}else{
		const frmSection2 = document.querySelectorAll(".section-2 form");
		Array.prototype.slice.call(frmSection2).forEach(frm => {
			const fromName = frm.getAttribute("name");
			frm.setAttribute("name",`${fromName.replace(/-second/g,"")}`);
		})
		
		const frmSection1 = document.querySelectorAll(".section-1 form");
		Array.prototype.slice.call(frmSection1).forEach(frm => {
			const fromName = frm.getAttribute("name");
			frm.setAttribute("name",`${fromName}-second`);
		})
	}
}

function bindAllPriceToPaypalForm(){
	let formatPrice = '';
	let totalPrice = 0;
	let mainShippingPrice = 0; 
	if(typeof window.multipleShippingIndex !== 'undefined'){
		mainShippingPrice = window.ctrwowCheckout.checkoutData.getProduct().shippings[window.multipleShippingIndex].price;
	} else {
		mainShippingPrice = window.ctrwowCheckout.checkoutData.getProduct().shippings[window.shippingIndex || 0].price;
	}
	let mainPrice = window.ctrwowCheckout.checkoutData.getProduct().productPrices.DiscountedPrice.Value;
	if(currentPrice.price){
		mainPrice = currentPrice.price;
	}
	totalPrice = mainShippingPrice + mainPrice;
	
	const mini = window.ctrwowCheckout.checkoutData.getMiniUpsell() || [];
	
	mini.forEach(item => {
		if(item.price) totalPrice += item.price;
	})
	
	formatPrice = window.ctrwowUtils.number.formaterNumberByFormattedValue(totalPrice, window.ctrwowCheckout.checkoutData.getProduct().productPrices.DiscountedPrice.FormattedValue);
	
	const totalChooses = document.querySelectorAll(".total-price-choose");
	Array.prototype.slice.call(totalChooses).forEach(item => {
		item.innerText = formatPrice;
	});
	//End bind All price to Paypal form
}

function detectPaypalButton(){
	
	//Remove tracking param
	window.ctrwowUtils.handleParam.clearParameter("paymentpp");
	window.ctrwowUtils.handleParam.clearParameter("payment1");
	
	const btnPP = document.querySelector(".go-to-section-2");
	const elmFormSS1 = document.querySelectorAll(".section-1 form");
	const ppLoading = document.querySelector(".ph__paypalButton__predefinedData .paymentProccessing");
	btnPP && btnPP.addEventListener("click", function(){
		//Add param to test 
		window.ctrwowUtils.handleParam.addParamIntoUrl("paymentpp","yes");
		
		//update form name
		updateFormName(false);
		
		//show paypal loading
		ppLoading && (ppLoading.style.display = "block");
		
		
		Array.prototype.slice.call(elmFormSS1).forEach(elm => {
			elm.classList.add("js-hidden");
		})
		
		document.querySelector("body").classList.add("paypal-purchase");
		// Re Update multi shipping Index 
		if(typeof window.multipleShippingIndex !== 'undefined') {
			window.multipleShippingIndex = 0;
		}
		
		bindAllPriceToPaypalForm();
		
		window.scrollTo(0,0);
		const ss2 = document.querySelector(".section-2");
		ss2 && ss2.classList.remove("js-hidden");
		
		//hide paypal loading
		setTimeout(() => {
			ppLoading && (ppLoading.style.display = "none");
			bindAllPriceToPaypalForm();
		},500);
	})
	
	const btnLoginPP = document.querySelector(".login-pp");
	btnLoginPP && btnLoginPP.addEventListener("click", function(){
		const btnRealPP = document.querySelector("button.checkoutWithPaypal");
		//Remove param when buy with paypal layout
		window.ctrwowUtils.handleParam.clearParameter("payment1");
		btnRealPP && btnRealPP.click();
	})
	
	const btnPayNow = document.querySelector(".pay-now");
	btnPayNow && btnPayNow.addEventListener("click", function(){
		const btnRealCC = document.querySelector("button.creditcard-submit-button");
		const elmLoading = btnRealCC.parentElement.querySelector(".paymentProccessing");
        elmLoading && elmLoading.classList.add("js-hidden");
        btnRealCC && btnRealCC.click();
	})
	
	const btnCancelPP = document.querySelector(".go-to-section-1");
	btnCancelPP && btnCancelPP.addEventListener("click", function(){
		updateFormName(true);
		//show paypal loading
		ppLoading && (ppLoading.style.display = "block");
		
		Array.prototype.slice.call(elmFormSS1).forEach(elm => {
			elm.classList.remove("js-hidden");
		})
		
		document.querySelector("body").classList.remove("paypal-purchase");
		const ss2 = document.querySelector(".section-2");
		ss2 && ss2.classList.add("js-hidden");
		
		//scroll to shipping form
		const elmProgressBar = document.querySelector(".progress-bar-gjs .state-2 a");
		elmProgressBar && elmProgressBar.click();
		
		//Remove param when buy with paypal layout
		window.ctrwowUtils.handleParam.clearParameter("payment1");
		
		//hide paypal loading
		setTimeout(() => {
			ppLoading && (ppLoading.style.display = "none");
		},500);
	});
	
	//detect 
	window.ctrwowUtils.events.on("ctr_form_checkoutWithCreditCardV1", (data) => {
		if(document.querySelector("body").classList.contains("paypal-purchase") && data.customer){
			ppLoading && (ppLoading.style.display = "block");
		}
        const btnRealCC = document.querySelector("button.creditcard-submit-button");
        const elmLoading = btnRealCC.parentElement.querySelector(".paymentProccessing");
        elmLoading && (elmLoading.style.zIndex = "9998");
        elmLoading && elmLoading.classList.remove("js-hidden");
	})
}

function detectCreditCardSubmit(){
	const btn = document.querySelector("button[name='checkoutWithCreditCardV1']");
  	btn && btn.addEventListener("click", function(){
    	//update form name with normal case
      	if(!document.querySelector("body").classList.contains("paypal-purchase")){
			updateFormName(true);
		} else {
			//Add param when buy with paypal layout
			window.ctrwowUtils.handleParam.addParamIntoUrl("payment1","ccpp");
		}
		
    })
}
detectCreditCardSubmit();

window.addEventListener("load", () => {
  detectPaypalButton();
})
  
  
// Function for new feature: change PID when change size
function validateData(){
	const elmError = document.querySelector(".show-size-warning");
	const elmProductItem = document.querySelector(".list-item.list-item--checked");
	const elmSizes = elmProductItem ? elmProductItem.querySelectorAll("select.size-dropdown") : [];
	const elmColors = elmProductItem ? elmProductItem.querySelectorAll("select.color-dropdown") : [];
	let isValidateSize = true;
	for(let i=0; i< elmSizes.length; i++){
		const itemSize = elmSizes[i];
		const itemColor = elmColors[i];
		if(!itemSize.value || !itemColor.value){
			isValidateSize = false;
			break;
		}
		
		const isExistIndex = arrSize.findIndex(obj => {
			return obj.size === itemSize.value && obj.color === itemColor.value;
		})
		
		if(isExistIndex === -1){
			const obj = {
				size: itemSize.value,
				color: itemColor.value,
				qty: 1
			}
			arrSize.push(obj);
		} else {
			arrSize[isExistIndex].qty += 1;
		}
	}

	if(!isValidateSize) {
		elmError && elmError.click();
		const elmItem = document.querySelector(".list-item.list-item--checked");
		elmItem && elmItem.scrollIntoView({behavior: 'smooth'});
	}
	
	return isValidateSize;
}

function validatePurchaseData(){
	const elmError = document.querySelector(".extra-item .error-size");
	const elmSizes = document.querySelectorAll(".extra-item .size-dropdown") || [];
	let isValidateSize = true;
	Array.prototype.slice.call(elmSizes).forEach(item => {
		if(!item.value) {
			isValidateSize = false;
			elmError && elmError.classList.remove("js-hidden");
			return;
		}
		
		const isExistIndex = arrSizePurchase.findIndex(obj => {
			return obj.size === item.value;
		})
		
		if(isExistIndex === -1){
			const obj = {
				size: item.value,
				qty: 1
			}
			arrSizePurchase.push(obj);
		} else {
			arrSizePurchase[isExistIndex].qty += 1;
		}
	})
	
	return isValidateSize;
}

let campaign2Info, campaign3Info, campaign4Info;
let miniUpsells2, miniUpsells3, miniUpsells4;
let isApplyCoupon = false;

function getAllCampaign(){
	const headers = {
		method: "GET",
		X_CID: "a39685b5-82e2-4d29-bc90-7a8b2d999722",
		"Content-Type": "application/json",
	}
	Promise.all([
				fetch("https://prices.tryemanagecrm.com/api/campaigns/12C883F2-F374-46FB-A235-BAFA1CD24036/products/prices", {headers: headers}).then(value => value.json()),
				fetch("https://prices.tryemanagecrm.com/api/campaigns/627061B3-483A-4C32-88E6-20F15E4A3B4B/products/prices", {headers: headers}).then(value => value.json()),
				fetch("https://prices.tryemanagecrm.com/api/campaigns/5E8FD617-94C4-428F-9995-DC4CC04CD2DC/products/prices", {headers: headers}).then(value => value.json())
				])
				.then((value) => {
				   if(value){
					   campaign2Info = value[0];
					   campaign3Info = value[1];
					   campaign4Info = value[2];
				   }
				})
				.catch((err) => {
					console.log("get all campaign error: " + err);
				});
}

function updateAllPrice(campaign, couponType, couponValue){
	if(!campaign) return;
	campaign.prices.forEach(pro => {
		if (couponType === 'percent'){
			const calculatePrice = (pro.productPrices.DiscountedPrice.Value * (1 - couponValue / 100)).toFixed(2);
			pro.productPrices.DiscountedPrice.Value = Number(calculatePrice);
			pro.productPrices.DiscountedPrice.FormattedValue = window.ctrwowUtils.number.formaterNumberByFormattedValue(
				pro.productPrices.DiscountedPrice.Value,
				pro.productPrices.DiscountedPrice.FormattedValue
			)
			
			if (pro.productPrices.UnitDiscountRate){
				const calculateUnitPrice = (pro.productPrices.UnitDiscountRate.Value * (1 - couponValue / 100)).toFixed(2)
				pro.productPrices.UnitDiscountRate.Value = Number(calculateUnitPrice)
				pro.productPrices.UnitDiscountRate.FormattedValue = window.ctrwowUtils.number.formaterNumberByFormattedValue(
				  pro.productPrices.UnitDiscountRate.Value,
				  pro.productPrices.UnitDiscountRate.FormattedValue
				)
			}
		} else {
			let newDiscountPrice = Number((elm.productPrices.DiscountedPrice.Value - couponValue).toFixed(2))
			let newUnitDiscountPrice = 0
			if (elm.productPrices.UnitDiscountRate) {
				newUnitDiscountPrice = Number((elm.productPrices.UnitDiscountRate.Value - couponValue / elm.quantity).toFixed(2))
			}
			if (isKasheeCoupon) {
				const itemDefault = priceDefaults.find((item) => item.productId === elm.productId)
				newDiscountPrice = Number((itemDefault.productPrices.DiscountedPrice.Value - couponValue).toFixed(2))
				if (elm.productPrices.UnitDiscountRate) {
				newUnitDiscountPrice = Number((itemDefault.productPrices.UnitDiscountRate.Value - couponValue / elm.quantity).toFixed(2))
				}
			}
			elm.productPrices.DiscountedPrice.Value = newDiscountPrice > 0 ? newDiscountPrice : 0
			elm.productPrices.DiscountedPrice.FormattedValue = window.ctrwowUtils.number.formaterNumberByFormattedValue(
				elm.productPrices.DiscountedPrice.Value,
				elm.productPrices.DiscountedPrice.FormattedValue
			)

			if (elm.productPrices.UnitDiscountRate) {
				elm.productPrices.UnitDiscountRate.Value = newUnitDiscountPrice > 0 ? newUnitDiscountPrice : 0
				elm.productPrices.UnitDiscountRate.FormattedValue = window.ctrwowUtils.number.formaterNumberByFormattedValue(
				elm.productPrices.UnitDiscountRate.Value,
				elm.productPrices.UnitDiscountRate.FormattedValue
				)
			}
		}
	})
}

function updateAllCampaignWithCoupon(){
	const elmExitPopup = document.querySelector("div[couponvalue]");
	if (!elmExitPopup || isApplyCoupon) return;
	
	const couponValue = elmExitPopup.getAttribute("couponvalue") ? parseInt(elmExitPopup.getAttribute("couponvalue")) : 0
	const couponType = elmExitPopup.getAttribute("coupontype") || 'percent';
	updateAllPrice(campaign2Info, couponType, couponValue);
	updateAllPrice(campaign3Info, couponType, couponValue);
	updateAllPrice(campaign4Info, couponType, couponValue);
	isApplyCoupon = true;
}

function getCurrentMiniProduct(qty){
	let mini = window.miniUpsells;
	/*switch (qty){
		case 1:
			mini = window.miniUpsells;
			break;
		case 2:
			mini = miniUpsells2;
			break;
		case 3:
			mini = miniUpsells3;
			break;
		case 4:
			mini = miniUpsells4;
			break;
		default:
			break;
	}*/
	
	return mini;
}

function getCurrentMainProduct(qty){
	let pro = null;
	switch (qty){
		case 1:
			pro = JSON.parse(window.localStorage.getItem('products'));
			break;
		case 2:
			pro = campaign2Info ? campaign2Info.prices : null;
			break;
		case 3:
			pro = campaign3Info ? campaign3Info.prices : null;
			break;
		case 4:
			pro = campaign4Info ? campaign4Info.prices : null;
			break;
		default:
			break;
	}
	
	return pro;
}

function getProduct(obj, isPurchase = false ){
	const allQty = window.ctrwowCheckout.checkoutData.getProduct().quantity;
	const products = isPurchase ? getCurrentMiniProduct(allQty) : getCurrentMainProduct(allQty);
	const pro = products.find(pro => {
		return 	pro.quantity === obj.qty && 
				pro.productName.toLocaleLowerCase().indexOf(` - ${obj.size.toLocaleLowerCase()}`) > -1 && 
				pro.productName.toLocaleLowerCase().indexOf(` - ${obj.color.toLocaleLowerCase()}`) > -1;
	})
	if(pro){
		obj.product = pro;
	}
}

function getShipping(qty, obj, isMain){
	switch(qty){
		case 2:
			if(obj.qty === 1){
				obj.product.shippings[0].shippingMethodId = "10024";
			} else if(obj.qty === 2){
				obj.product.shippings[0].shippingMethodId = "10000";
			}
			window.__ctrPageConfiguration.webKey = "12C883F2-F374-46FB-A235-BAFA1CD24036";
			break;
		case 3:
			if(obj.qty === 1){
				obj.product.shippings[0].shippingMethodId = "10024";
			} else if(obj.qty === 2){
				obj.product.shippings[0].shippingMethodId = "10000";
			} else if(obj.qty === 3){
				obj.product.shippings[0].shippingMethodId = "10001";
			}
			window.__ctrPageConfiguration.webKey = "627061B3-483A-4C32-88E6-20F15E4A3B4B";
			break;
		case 4:
			if(obj.qty === 1){
				obj.product.shippings[0].shippingMethodId = "10024";
			} else if(obj.qty === 2){
				obj.product.shippings[0].shippingMethodId = "10000";
			} else if(obj.qty === 3){
				obj.product.shippings[0].shippingMethodId = "10001";
			} else if(obj.qty === 4){
				obj.product.shippings[0].shippingMethodId = "10002";
			}
			window.__ctrPageConfiguration.webKey = "5E8FD617-94C4-428F-9995-DC4CC04CD2DC";
			break;
	}
	
	//set location to local storage with new webkey
	if(isMain){
		let campProducts = window.localStorage.getItem('campproducts');
		campProducts = campProducts ? JSON.parse(campProducts) : [];
		const isExistCamps = campProducts.camps.filter(camp => {
			return camp[window.__ctrPageConfiguration.webKey];
		});
		if(!isExistCamps || isExistCamps.length === 0){
			const obj = {};
			obj[window.__ctrPageConfiguration.webKey] = window.__productListData.data.productList;
			campProducts.camps.push(obj);
			window.localStorage.setItem('campproducts', JSON.stringify(campProducts));
		}
	}
	return obj.product.shippings;
}

function bindDataWithSize(){
	let qty = 0;
	arrSize.forEach(obj => {
		getProduct(obj);
		qty+=obj.qty;
	})
	arrSize.sort((obj1, obj2) => {
		return obj2.qty - obj1.qty;
	})
	
	const currentProduct = window.ctrwowCheckout.checkoutData.getProduct();
	const elmCurrentName = document.querySelector(".order-summary .js-product-name");
	currentProduct.productId = arrSize[0].product.productId;
	
	window.multiMainProducts = null;
	if(qty > 1){
		currentProduct.shippings = getShipping(qty, arrSize[0], true);
		const multiMainProducts = [];
		multiMainProducts.push({
			productId: currentProduct.productId,
			shippingMethodId: currentProduct.shippings && currentProduct.shippings.length > 0 ? currentProduct.shippings[0].shippingMethodId : null
		});
		
		localStorage.removeItem("extendedtext");
		
		for(let i = 1; i < arrSize.length; i++){
			const obj = arrSize[i].product;
			const shippings = getShipping(qty,arrSize[i], false);
			const pro = {
				productId: obj.productId,
				shippingMethodId: shippings && shippings.length > 0 ? shippings[0].shippingMethodId : null
			}
			multiMainProducts.push(pro);
		}
		
		window.multiMainProducts = multiMainProducts;
	}
}

function bindPurchaseDataWithSize(){
	let qty = 0;
	arrSizePurchase.forEach(obj => {
		getProduct(obj, true);
		qty+=obj.qty;
	})
	arrSizePurchase.sort((obj1, obj2) => {
		return obj2.qty - obj1.qty;
	})
	
	const currentProduct = window.miniUpsells[0];
	currentProduct.productId = arrSizePurchase[0].product.productId;
	
	window.multipleMiniUpsells = [];
	
	for(let i = 1; i < arrSizePurchase.length; i++){
		const obj = arrSizePurchase[i].product;
		const pro = {
			productId: obj.productId,
			shippingMethodId: shippings && shippings.length > 0 ? shippings[0].shippingMethodId : null,
			price: obj.productPrices.DiscountedPrice.Value,
			type: 'mini',
			addToSummary: false
		}
		window.multipleMiniUpsells.push(pro);
	}
}

let arrSize = [];
let arrSizePurchase = [];
function triggerPaymentButton(){
	const elmBtns = document.querySelectorAll(".paypal-placeholder, button[name='checkoutWithCreditCardV1']");
	Array.prototype.slice.call(elmBtns).forEach(btn => {
		btn.addEventListener("click", function(e){
			arrSize = [];
			if(!validateData()){
				e.preventDefault();
				e.stopImmediatePropagation();
				e.stopPropagation();
			} else {
				bindDataWithSize()
			}
		})
	})

	const elmRealPP = document.querySelectorAll("button.checkoutWithPaypal");
	Array.prototype.slice.call(elmRealPP).forEach(btn => {
		btn.addEventListener("click", function(e){
			let isValidateSize = true;
			if(arrSize.length === 0){
				isValidateSize = validateData();
			}
			
			if(!isValidateSize){
				e.preventDefault();
				e.stopImmediatePropagation();
				e.stopPropagation();
				return;
			}
			
			bindDataWithSize();
		})
	})
	
	const elmAddPurchase = document.querySelectorAll(".popup_widget_content .btn-add-purchase");
	Array.prototype.slice.call(elmAddPurchase).forEach(btn => {
		btn.addEventListener("click", function(e){
			
			if(!validatePurchaseData()){
				e.preventDefault();
				e.stopImmediatePropagation();
				e.stopPropagation();
				return;
			}
			
			bindPurchaseDataWithSize();
			const elmPurchase = document.querySelector(".popup_widget_content .btn-add");
			elmPurchase && elmPurchase.click();
		})
	})
}
triggerPaymentButton();

function resetSize(){
	const elmSizes = document.querySelectorAll(".size-dropdown");
	Array.prototype.slice.call(elmSizes).forEach(item => {
		item.value = "M";
		
	})
	
	const elmColors = document.querySelectorAll(".color-dropdown");
	Array.prototype.slice.call(elmColors).forEach(item => {
		item.value = "coffee";
		
	})
}

const currentPrice = {};
function updateProductPriceWithOption(){
	
	const elmLists = document.querySelectorAll(".js-list .list-item")
	Array.from(elmLists).forEach(item => {
		const elmSets = item.querySelectorAll(".set"); // get all select option
		const arrOption = [];
		let count = 0;
		Array.from(elmSets).forEach(set => {// split option with size, color and qty
			const elmSize = set.querySelector(".size-dropdown");
			const elmColor = set.querySelector(".color-dropdown");

			const size = elmSize.value || "M";
			const color = elmColor.value || "Coffee";
			
			const checkExists = arrOption.find((c) => {
				return c.size === size && c.color === color;
			})
			
			if(checkExists){
				checkExists.qty +=1;
			}else{
				arrOption.push({
					size: size,
					color: color,
					qty: 1
				})
			}
			count++;
		})
		
		
		const prods = getCurrentMainProduct(count);
		const minis = getCurrentMiniProduct(count);
		// get pro with option
		let price = 0, fullprice = 0;
		let proTemp = null;
		
		if(!prods) return;
		
		const firstProd = prods.find((p) => {
			return p.productName.toLocaleLowerCase().indexOf(` - ${arrOption[0].color.toLocaleLowerCase()}`) > -1 && 
					p.productName.toLocaleLowerCase().indexOf(` - ${arrOption[0].size.toLocaleLowerCase()}`) > -1 &&
					p.quantity === arrOption[0].qty
		})
		if(firstProd){
			price += firstProd.productPrices.DiscountedPrice.Value;
			fullprice += firstProd.productPrices.FullRetailPrice.Value;
			proTemp = firstProd;
		}
		
		for(let i=1; i<arrOption.length; i++){
			const op = arrOption[i];
			const otherProduct = prods.find((p) => {
				return p.productName.toLocaleLowerCase().indexOf(` - ${op.color.toLocaleLowerCase()}`) > -1 && 
						p.productName.toLocaleLowerCase().indexOf(` - ${op.size.toLocaleLowerCase()}`) > -1 &&
						p.quantity === op.qty
			})
			if(otherProduct){
				price += otherProduct.productPrices.DiscountedPrice.Value;
				fullprice += otherProduct.productPrices.FullRetailPrice.Value;
			}
		}
		
		if(proTemp){
			if(item.classList.contains("list-item--checked")){
				currentPrice.price = price;
				currentPrice.fullprice = fullprice;
				currentPrice.discount = fullprice - price;
				
				let htmlDesc = '';
				arrOption.forEach(item => {
					const sizeContent = item.size;
					const colorContent = item.color;
					if(htmlDesc !== '') htmlDesc += "<br/>";
					
					htmlDesc  += `${item.qty}x ${sizeContent}, ${colorContent}`;
				})
				const elmProDesc = document.querySelector(".pro-desc");
				if(elmProDesc){
					elmProDesc.innerHTML = htmlDesc;
					elmProDesc.classList.remove("js-hidden");
				}
			}
			
			price = window.ctrwowUtils.number.formaterNumberByFormattedValue(price, proTemp.productPrices.DiscountedPrice.FormattedValue);
			fullprice = window.ctrwowUtils.number.formaterNumberByFormattedValue(fullprice, proTemp.productPrices.DiscountedPrice.FormattedValue);
			
			const elmFullPrice = item.querySelector(".js-retail-price");
			elmFullPrice && (elmFullPrice.innerText = fullprice);
			
			const elmPrice = item.querySelector(".js-discount-price");
			elmPrice && (elmPrice.innerText = price);
		}
		
		//Update price for order summary
		const elmOrderSummaryPrice = document.querySelectorAll(".js-order-summary .js-product-price");
		const elmOrderSummaryOriginalPrice = document.querySelectorAll(".js-order-summary .js-fullretail-price");
		const elmOrderSummaryDiscountPrice = document.querySelectorAll(".js-order-summary .js-discount-price-total");
		const elmOrderSummaryTotalPrice = document.querySelectorAll(".js-order-summary .js-discount-warranty-price");
		if(currentPrice.price && proTemp){
			elmOrderSummaryPrice.forEach(elm => {
				elm.innerText = window.ctrwowUtils.number.formaterNumberByFormattedValue(currentPrice.price, proTemp.productPrices.DiscountedPrice.FormattedValue);
			})
			
			elmOrderSummaryOriginalPrice.forEach(elm => {
				elm.innerText = window.ctrwowUtils.number.formaterNumberByFormattedValue(currentPrice.fullprice, proTemp.productPrices.DiscountedPrice.FormattedValue);
			})
			
			elmOrderSummaryDiscountPrice.forEach(elm => {
				elm.innerText = `-${window.ctrwowUtils.number.formaterNumberByFormattedValue(currentPrice.discount, proTemp.productPrices.DiscountedPrice.FormattedValue)}`;
			})
			
			elmOrderSummaryTotalPrice.forEach(elm => {
				elm.innerText = window.ctrwowUtils.number.formaterNumberByFormattedValue(currentPrice.price, proTemp.productPrices.DiscountedPrice.FormattedValue);
			})
		}
	})
}

let isFirstChangeSize = true;
function updateSizeValue4First(value){
	if(!isFirstChangeSize) return;
	isFirstChangeSize = false;
	const elmSizes = document.querySelectorAll(".js-list-item .color-dropdown");
    elmSizes.forEach(item => {
        item.value = value;
    })
}
function triggerFirstChangeSize(){
	const elmSizes = document.querySelectorAll(".js-list-item .color-dropdown");
    elmSizes.forEach(item => {
		item.addEventListener("change", (e) => {
			updateSizeValue4First(e.currentTarget.value);
			updateProductPriceWithOption();
		})
	})
}
triggerFirstChangeSize();

let isFirstChangeColor = true;
function updateColorValue4First(elm){
	const color = elm.querySelector(".option-selected .ms-dd-label").innerText;
	if(!isFirstChangeColor || !color) return;
	
	/*const elmColors = document.querySelectorAll(".js-list-item .color-dropdown");
	if (elmColors[0].options[elmColors[0].selectedIndex].text === color) return;
    elmColors.forEach(item => {
		let mapColor;
		switch(color){
			case "Noir":
				mapColor = "Black";
				break;
			case "Sand":
				mapColor = "Beige";
				break;
			case "Cloud":
				mapColor = "White";
				break;
			case "Cocoa":
				mapColor = "Brown";
				break;
		}
        item.value = mapColor;
		item.dispatchEvent(new Event('change'));
		handleChangeProductColor(item);
    })*/
	isFirstChangeSize = false;
	isFirstChangeColor = false;
}
function triggerFirstChangeColor(){
	/*const elmColors = document.querySelectorAll(".js-list-item .color-dropdown");
    elmColors.forEach(item => {
		item.addEventListener("change", (e) => {
			updateColorValue4First(e.currentTarget.value);
			updateProductPriceWithOption();
		})
	})*/
	
	const elmColors = document.querySelectorAll(".js-list-item ul.ms-options");
	// Options for the observer (which mutations to observe)
	const config = { attributes: true, childList: true };
	const callback = function(dom) {
		if(!dom[0]) return;
		updateColorValue4First(dom[0].target);
		handleChangeProductColor(dom[0].target);
		updateProductPriceWithOption();
		
		// update product color for summary
		const listItem = dom[0].target.closest(".list-item");
		const listSelects = listItem.querySelectorAll("select.color-dropdown");
		changeProductColorSummary(listSelects, listItem);
	};
	// Create an observer instance linked to the callback function
	const observer = new MutationObserver(callback);
	elmColors.forEach(item => {
		// Start observing the target node for configured mutations
		observer.observe(item, config);
	})
	
}
triggerFirstChangeColor();

function triggerExitPopup(){
	const elmBtns = document.querySelectorAll(".close-expopup-and-active, .popup-activate__btn-yes");
	elmBtns.forEach(elm => {
		elm.addEventListener("click", () => {
			updateAllCampaignWithCoupon();
			updateProductPriceWithOption();
		})
	})
}

function handleChangeProductColor(e){
	const listItem = e.closest(".list-item");
	const imageBox = listItem.querySelectorAll(".thumb-options");
	const colorBox = listItem.querySelectorAll(".color-box select");
	
	const currentProductId = listItem.dataset.id;
	const currentProduct = window.__productListData.data.productList.prices.find(pro => {
		return pro.productId.toString() === currentProductId.toString();
	})

	colorBox.forEach((box, i) => {
		const selectedClass = `thumb-option-${box.value.toLocaleLowerCase()}`;
		const imagePro = imageBox[i];
		imagePro.classList.remove("thumb-option-coffee");
		imagePro.classList.remove("thumb-option-caramel");
		imagePro.classList.remove("thumb-option-vanilla");
		imagePro.classList.remove("thumb-option-mocha");
		imagePro.classList.add(selectedClass);
	});
}

function changeProductColorSummary(listSelects, item){
	const currentProductId = item.dataset.id;
	const currentProduct = window.__productListData.data.productList.prices.find(pro => {
		return pro.productId.toString() === currentProductId.toString();
	})
	const currentQty = currentProduct.quantity - 1;
	
	const elmSummaryImage = document.querySelectorAll(".img-smr");
	elmSummaryImage.forEach(smr => smr.classList.add("js-hidden"));
	
	const smrTarget = document.querySelector(`.img-summary-${currentQty}`);
	if (smrTarget) smrTarget.classList.remove("js-hidden");
	
	
	
	const imgSummary = smrTarget.querySelectorAll(".thumb-options");
	imgSummary.forEach((img, indexImage) => {
		const colorBox = listSelects[indexImage];
		const selectedClass = `thumb-option-${colorBox.value.toLocaleLowerCase()}`;
		img.classList.remove("thumb-option-coffee");
		img.classList.remove("thumb-option-caramel");
		img.classList.remove("thumb-option-vanilla");
		img.classList.remove("thumb-option-mocha");
		img.classList.add(selectedClass);
	})
}

function handleProductColoronSummary(){
	const elmListItem = document.querySelectorAll(".list-item");
	elmListItem.forEach((item, index) => {
		item.addEventListener("click", (e) => {
			const listItem = e.currentTarget;
			const listSelects = e.currentTarget.querySelectorAll("select.color-dropdown");
			
			// update product color for summary
			changeProductColorSummary(listSelects, listItem);
		});
	});
}

window.ctrwowUtils.getDependencies(['https://cdnjs.cloudflare.com/ajax/libs/pubsub-js/1.7.0/pubsub.min.js'], { delayUntilInteract: false }).then(() => {
	window.PubSub.subscribe('checkoutWithCreditCardV1', (msg, paymentInfo) => {
		if(paymentInfo.customer){
			bindDataWithSize();
			
			if(document.querySelector("body").classList.contains("paypal-purchase") && data.customer){
				ppLoading && (ppLoading.style.display = "block");
			}
		}
   })
})
window.ctrwowUtils.getDependencies([
    window.ctrwowUtils.getCtrLibLink('ctrwowCheckout')
], { delayUntilInteract: false }).then(() => window.ctrwowCheckout.ready().then(()=> {
	window.ctrwowCheckout.productListData.onProductListChange((products) => {
		resetSize();
		handleProductColoronSummary();
	})
    window.ctrwowCheckout.checkoutData.onProductChange(() => {
		setTimeout(() => {
			//updateAllCampaignWithCoupon();
			updateProductPriceWithOption();
		}, 100);
	})
}))

window.ctrwowUtils.events.on('onBeforeActivePopup', () => {
	updateAllCampaignWithCoupon();
	updateProductPriceWithOption();
})

window.addEventListener("load", function(){
	getAllCampaign();
	resetSize();
	triggerExitPopup();
})
// End function for new feature: change PID when change size  
</script>
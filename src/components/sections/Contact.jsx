import {RevealOnScroll} from "../RevealOnScroll";


export const Contact = () => {
    return (<section id="contact" className="min-h-screen flex width-full items-start justify-center px-20 pt-40">
        <RevealOnScroll>
            <div className="px-4 w-100%">
                <h2 className="text-6xl font-bold pb-2 mb-12 bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent text-center">Get In Touch</h2>
            <div className="px-4 flex justify-between pb-30 border-b border-b-pink-400 w-[1140px]">
                <div className="col">
                    <p className="text-white-500 text-xl font-medium mb-8">Let's chat! Your problem, my idea - together we can be unstoppable.</p>
                    <div className="address text-base font-medium mb-4"><i class="fa-solid fa-house text-pink-400 p-[10px] rounded-full border border-pink-400 border-2 mr-4"></i>Ho Chi Minh City, Viet Nam</div>
                    <div className="email text-base font-medium mb-4"><i class="fa-solid fa-envelope text-pink-400 p-[10px] rounded-full border border-pink-400 border-2 mr-4"></i>nhuwizart@gmail.com</div>
                    <div className="github text-base font-medium mb-4"><i class="fa-brands fa-github text-pink-400 p-[10px] rounded-full border border-pink-400 border-2 mr-4"></i>github.com/nhuwizart</div>
                </div>
                <div className="col max-w-105 flex flex-col justify-center items-center">
                    <p className="text-pink-400 text-5xl font-bold mb-4 uppercase">Thank you</p>
                    <p className="text-pink-400 text-5xl font-medium mb-4 uppercase">Thank you</p>
                    <p className="text-pink-400 text-5xl font-light mb-4 uppercase">Thank you</p>
                </div>
                
            </div>
                    <p className="text-white-500 text-xl font-medium py-8  text-center">© 2025 Nhu Hoang Portfolio. All rights reserved.</p>


                {/* <form action="" className="space-y-6">
                    <div className="relative">
                        <input type="text" id="name" name="name" placeholder="Name..." required className="w-full bg-white/5 border border-whte/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
                    </div>
                     <div className="relative">
                        <input type="email" id="email" name="email" placeholder="example@gmail.com" required className="w-full bg-white/5 border border-whte/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
                    </div>
                    <div className="relative">
                        <textarea id="message" name="email" placeholder="Your Message..." required rows={5} className="w-full bg-white/5 border border-whte/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        Send Message
                    </button>
                </form> */}
            </div>
        </RevealOnScroll>
    </section>
    );
}
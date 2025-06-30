import {RevealOnScroll} from "../RevealOnScroll";


export const About = () => {

    const frontendSkills = ["React", "Vue", "TypeScripe", "Tailwindcss", "Svelte",];
    const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL",];

    return (<section id="about" className="bg-[url(/bnr.png)] min-h-screen flex-row items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-4/5  bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-lg border border-white/10 rounded-4xl shadow-sm px-25 py-12 text-center z-10 mx-auto">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-2">
                    <h1 className="text-[64px] md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent leading-right pb-2">I'm Nhu Hoang</h1>
                    <h1 className="text-xl md:text-xl mb-3 text-white-500">I am a <span className="text-pink-500">self-taught UX/UI Designer</span> based in Vietnam with a year of <span className="text-pink-500">experience as an e-commerce website front-end developer.</span></h1>
                    <h1 className="text-xl md:text-xl mb-12 text-white-500">This background has provided me with valuable insights into the user experience. I'm highly passionate about UX/UI and keen to further develop my skills and career in this area.</h1>
                    <div className="flex justify-center space-x-4">
                        <a href="#resume" className=" text-white py-5 px-10 rounded-2xl border border-white text-xl font-semibold transition relative overflow-hidden hover:bg-pink-500 hover:border-white/0 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130,246,0.4)]">I WANT TO KNOW MORE <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="bg-[url(/avatar.png)] bg-no-repeat bg-right w-75 h-100 " >
                </div>
            </div>
            
        </div>
        {/* <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, voluptate dolorum dolorem eveniet nemo fugiat voluptates. Consequatur, deserunt accusamus. Praesentium.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech,key) => (
                                <span  key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech,key) => (
                                <span  key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">🏢 Education</h3>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>
                                            <strong>B.S. in Ecommerce</strong> - Russian Technological University - MIREA (2020-2024)
                                        </li>
                                        <li> <strong>Management Information System</strong> - University of Economics and Law (2018-2019)</li>

                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                                    <div className="space-y-4 text-gray-300">
                                        <div>
                                            <h4 className="font-semibold"> Front-end Developer at GPC Company (2024 - Present) </h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, atque?</p>
                                        </div>
                                        <div>
                                            <h4  className="font-semibold"> Intern at KOFR (2/2024 - 5/2024) </h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, atque?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
            
        </div> */}
        </RevealOnScroll>
        <section id="resume" className="bg-[url(/bnr.png)] min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-4/5  bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-lg border border-white/10 rounded-4xl shadow-sm px-25 py-12 text-left z-10 mx-auto">
            <div className="container grid grid-cols-2 gap-8">
                <div className="col-1">
                    {/* <h1 className="text-[64px] md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent leading-right pb-2">I'm Nhu Hoang</h1> */}
                    <div className="edu-exp mb-10">
                        <p className="text-4xl font-semibold mb-3 text-pink-500 drop-shadow-lg/25">Experience</p>
                        <div className="flex mb-5">
                            <p className="text-base text-white-500 font-semibold min-w-[150px]">2024-Present</p>
                            <div >
                                <p className="text-base text-white-500 uppercase font-semibold">e-commerce website front-end developer</p>
                                <p className="text-base text-white-500">DFO Global Performance Commerce, Ho Chi minh, Viet nam</p>
                            </div>
                        </div>
                        <div className="flex mb-5">
                            <p className="text-base text-white-500 font-semibold min-w-[150px]">3/2024-5/2024</p>
                            <div >
                                <p className="text-base text-white-500 uppercase font-semibold">Business analyst intern</p>
                                <p className="text-base text-white-500">KORF,  Moscow Russia</p>
                            </div>
                        </div>
                    </div>

                    <div className="edu-exp ">
                        <p className="text-4xl font-semibold mb-3 text-pink-500 drop-shadow-lg/25">Education</p>
                        <div className="flex mb-5">
                            <p className="text-base text-white-500 font-semibold min-w-[150px]">2020-2024</p>
                            <div >
                                <p className="text-base text-white-500 uppercase font-semibold">Russian Technological University</p>
                                <p className="text-base text-white-500">bachelor of business information technology</p>
                            </div>
                        </div>
                        <div className="flex mb-5">
                            <p className="text-base text-white-500 font-semibold min-w-[150px]">2018-2019</p>
                            <div >
                                <p className="text-base text-white-500 uppercase font-semibold">University of Economics and Law</p>
                                <p className="text-base text-white-500">Management Information System </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* <div className="flex justify-center space-x-4">
                        <a href="#resume" className=" text-white py-5 px-10 rounded-2xl border border-white text-xl font-semibold transition relative overflow-hidden hover:bg-pink-500 hover:border-white/0 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130,246,0.4)]">I WANT TO KNOW MORE <i class="fa-solid fa-arrow-right"></i></a>
                    </div> */}
                </div>
                <div className="col-2">
                     <div className="skills mb-10">
                        <p className="text-4xl font-semibold mb-3 text-pink-500 drop-shadow-lg/25">Technical Skills</p>
                        <div className="tech-skill">
                            <div className="flex justify-between">
                            <div className="mb-5">
                                <p className="text-xl text-white-500 font-semibold min-w-[150px]">Design Tools</p>
                                <div >
                                    <div className="bg-[url(/design-icons.png)] bg-no-repeat bg-right w-[140px] h-[40px] mt-5"></div>
                                </div>
                            </div>
                            <div className="mb-5">
                                <p className="text-xl text-white-500 font-semibold min-w-[150px] capitalize">website development</p>
                                <div >
                                    <div className="bg-[url(/dev-icons.png)] bg-no-repeat bg-right w-[140px] h-[40px] mt-5"></div>

                                </div>
                            </div>
                        </div>
                        
                        <div className="combo-skill">
                            <div className="flex flex-wrap justify-between gap-2 mb-4">
                            {["Research","Analyst","Website Design","App Design","UX/UI Design","Animation"].map((tech,key)=>(

                                    <span  key={key} className=" text-center w-[150px] bg-pink-500/10 text-white-500 py-1 px-3 border border-white rounded-full text-base hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition">
                                        {tech}
                                    </span>
                            ))}
                            </div>
                        </div>
                    </div>

                        
                </div>

                    <div className="edu-exp ">
                        <p className="text-4xl mb-3 text-pink-500 font-semibold drop-shadow-lg/25">Language</p>
                         <div className="tech-skill">
                            <div className="flex justify-between">
                            <div className="mb-5">
                                <p className="text-xl text-white-500 font-semibold min-w-[150px]">English</p>
                                <p className="text-base text-white-500">Pre-intermediate</p>

                            </div>
                            <div className="mb-5">
                                <p className="text-xl text-white-500 font-semibold min-w-[150px] capitalize">Russian</p>
                                <p className="text-base text-white-500">Intermediate</p>

                            </div>
                            <div className="mb-5">
                                <p className="text-xl text-white-500 font-semibold min-w-[150px] capitalize">Vietnamese</p>
                                <p className="text-base text-white-500">Native</p>

                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* <div className="bg-[url(/avatar.png)] bg-no-repeat bg-right w-75 h-100 " >
                </div> */}
            </div>
            
        </div>
         </RevealOnScroll>
    </section>
    </section>);
    
};

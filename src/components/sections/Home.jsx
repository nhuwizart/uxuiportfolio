import {RevealOnScroll} from "../RevealOnScroll" ;

export const Home = () => {
    return (
        
    <section id="home" className=" bg-[url(/bnr.png)] min-h-screen flex items-center justify-center relative">
       
        <RevealOnScroll>
        <div className="bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-lg border border-white/10 rounded-4xl shadow-sm px-32 py-12 text-center z-10 ">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent leading-right pb-2">Hi, I'm Nhu Hoang</h1>
            <h1 className="text-5xl md:text-6xl mb-6 text-white-500">I'm a <span className="text-pink-500">Website</span> Designer</h1>
            <p className="text-white-500 text-xl mb-8 max-w-2xl">"My goal is to create UIs that are not just user-friendly, but also developer-efficient and directly align with business objectives."</p>
            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-pink-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:bg-pink-600 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130,246,0.4)]">View Projects</a>
                <a href="#contact" className="border border-pink-500/50 text-pink-500 py-3 px-6 rounded font-medium transition-all duration-200  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130,246,0.2)] hover:bg-pink-500/10">Contact Me</a>

            </div>
        </div>
        </RevealOnScroll>
    </section>
    );
};
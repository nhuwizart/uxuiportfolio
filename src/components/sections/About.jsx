import {RevealOnScroll} from "../RevealOnScroll";


export const About = () => {

    const frontendSkills = ["React", "Vue", "TypeScripe", "Tailwindcss", "Svelte",];
    const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL",];

    return (<section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
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
            
        </div>
        </RevealOnScroll>
    </section>);
};
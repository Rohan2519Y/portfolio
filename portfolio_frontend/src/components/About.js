import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function About() {
    useEffect(() => {
        Aos.init({ once: false });
    }, []);
    return (<>
        <div className="w-full flex justify-center items-center h-screen bg-[linear-gradient(to_right,_#ffdde1,_#ee9ca7)] 
        dark:from-stone-900 dark:to-stone-800 dark:bg-[linear-gradient(to_right,_#2c2c2c,_#4a4a4a)]">
            <div className="w-[90%] h-[90%] flex">
                <div className="w-[70%] h-full">
                    <div data-aos="fade-right"
                        data-aos-duration="800"
                        className="w-full h-24 text-7xl font-bold text-stone-900 dark:text-stone-100">About</div>
                    <div data-aos="fade-right"
                        data-aos-duration="800"
                        className="w-full h-80 text-gray-700 dark:text-gray-300 text-5xl font-semibold tracking-wider leading-snug">I’m a passionate <span className="font-bold text-rose-600 dark:text-rose-400">Full-Stack Developer</span> who loves turning complex ideas into elegant, user-friendly web applications. With a focus on <span className="font-bold text-rose-600 dark:text-rose-400">React</span>, <span className="font-bold text-rose-600 dark:text-rose-400">Node.js</span>, and modern <span className="font-bold text-rose-600 dark:text-rose-400">JavaScript</span>, I enjoy building fast, scalable solutions and continuously exploring new technologies to stay ahead.</div>
                </div>
                <div className="w-[30%] h-full flex justify-center items-center overflow-hidden">
                    <img data-aos="fade-left"
                        data-aos-duration="800"
                        className="w-full" src="https://res.cloudinary.com/dio6iadsq/image/upload/v1757144496/Programmer-PNG-Free-File-Download_cdwton.png" />
                </div>
            </div>
        </div>
    </>)
}
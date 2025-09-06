export default function Hero() {

    return (
        <div className="bg-gradient-to-br from-blue-50 to-purple-100 w-full h-[800px] 
        dark:from-slate-900 dark:via-gray-800 dark:to-slate-700
        flex justify-center items-center">
            <div className="w-1/2 h-full flex justify-center items-center">
                <div className="w-[80%] h-[70%] flex items-center flex-col">
                    <div className="text-xl font-medium w-full h-10 text-indigo-700 dark:text-slate-200">Hey There,</div>
                    <div className="text-6xl font-bold w-full text-violet-700 dark:text-violet-300">I am a Full Stack Developer. Build fast, modern web apps with React, Node.js, and more.</div>
                    <button className="mt-24 px-6 py-3 bg-indigo-600 text-white rounded-full shadow-xl font-semibold 
                    hover:scale-105 hover:bg-indigo-800 hover:shadow-2xl  dark:bg-sky-500 dark:hover:bg-sky-400
                    transition-all duration-200 ease-linear dark:text-slate-900 ">View My Work</button>
                </div>
            </div>
            <div className="w-1/2 flex justify-center items-center">
                <div className="w-[90%] h-[90%] flex justify-center items-center relative">
                    <div className="w-96 h-96 bg-gradient-to-r from-indigo-800 via-pink-500 to-yellow-400 rounded-full p-2 animate-spin [animation-duration:3s]">
                        <div className="w-full h-full bg-blue-100 dark:bg-blue-900 rounded-full flex justify-center overflow-hidden animate-spin [animation-direction:reverse] [animation-duration:3s]">
                            <img className="w-72" src="https://res.cloudinary.com/dio6iadsq/image/upload/v1757067897/Anime-Character-PNG-Cutout_gia7js.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

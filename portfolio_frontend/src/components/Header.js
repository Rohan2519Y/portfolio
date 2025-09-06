import { useEffect } from "react";
export default function Header() {
    const toggleDark = () => {
        document.documentElement.classList.toggle("dark");
    };

    useEffect(() => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    return (
        <header className="sticky top-0 z-50 h-16 shadow-lg flex items-center justify-between px-6
                       bg-white dark:bg-gray-900">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                Rohan Kumar
            </div>
            <nav className="hidden md:flex items-center space-x-6">
                <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 dark:text-white">About</a>
                <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 dark:text-white">Skills</a>
                <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 dark:text-white">Projects</a>
                <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 dark:text-white">Contact</a>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
                <a
                    href="https://docs.google.com/document/d/1pNh5pbT4JBKhDNcw7AxV0p6-vnRS7faX/export?format=pdf"
                    className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700
                     dark:bg-blue-500 dark:hover:bg-blue-600">
                    Download Resume
                </a>
                <button
                    onClick={toggleDark}
                    className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                    aria-label="Toggle dark mode">
                    🌓
                </button>
            </div>
            <button className="md:hidden text-2xl">☰</button>
        </header>
    );
}

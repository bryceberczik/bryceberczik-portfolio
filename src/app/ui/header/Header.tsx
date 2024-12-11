"use client";

import { useState, useEffect } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
                isScrolled ? "bg-gradient-to-b from-black to-transparent" : ""
            }`}
        >
            <header className="flex flex-row justify-around py-5">
                <div style={{ marginRight: "480px" }}>
                    <h1 className="text-stone-300">BRYCE BERCZIK</h1>
                </div>
                <div className="flex flex-row">
                    <h1 className="mx-5 text-stone-300">HOME</h1>
                    <h1 className="mx-5 text-stone-300">ABOUT ME</h1>
                    <h1 className="mx-5 text-stone-300">EXPERIENCES</h1>
                    <h1 className="mx-5 text-stone-300">PROJECTS</h1>
                    <h1 className="mx-5 text-stone-300">CONTACT ME</h1>
                </div>
            </header>
        </div>
    );
};

export default Header;
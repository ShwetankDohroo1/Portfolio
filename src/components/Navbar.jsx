import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import S from "../imgs/S.png";
import { styles } from "../styles";
import { navLinks } from "../constants";

export function Navbar() {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`navmain ${styles.paddingX} w-full flex justify-center items-center py-5 fixed top-0 z-20`}>
            <div className={`w-6/12 flex items-center max-w-7xl p-2 rounded-2xl ${scrolled ? "navbar" : "bg-transparent border-none"} duration-300`}>
                <Link to="/" className="flex items-center gap-2" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
                    <img src={S} alt="" className="logo w-9 h-9 object-contain" />
                </Link>
                <ul className="list-none w-full hidden sm:flex flex-row gap-10 justify-center">
                    {navLinks.map((link) => (
                        <li key={link.id} className={`hoverable text-2xl ${active === link.title ? "text-red-400" : ""} ${scrolled ? "text-black" : ""}`} onClick={() => setActive(link.title)}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="icon flex flex-1 items-center justify-end">
                    <div className={`flex flex-col ${toggle ? "change" : ""}`} onClick={() => setToggle(!toggle)}>
                        <div className="bar1" style={{ width: "25px", height: "3px", transition: "0.4s", transform: toggle ? "translate(0, 11px) rotate(-45deg)" : "none", }}>

                        </div>
                        <div className="bar2" style={{ width: "25px", height: "3px", margin: "2px 0", transition: "0.4s", opacity: toggle ? 0 : 1, }}>

                        </div>
                        <div className="bar3" style={{ width: "25px", height: "3px", transition: "0.4s", transform: toggle ? "translate(0, -11px) rotate(45deg)" : "none", }}>

                        </div>
                    </div>
                </div>
            </div>
            <div className={`sidebar ${toggle ? "active" : ""} fixed top-0 right-0 h-full bg-[#363636] shadow-lg z-10 w-[240px] transform transition-transform duration-500 flex flex-col justify-center items-center`}>
                    <button className="text-white text-6xl mb-4 self-end absolute top-0 p-5" onClick={() => setToggle(false)}>
                        ×
                    </button>
                <div className="p-6 flex flex-col">
                    <ul className="list-none flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <li key={link.id} className={`${active === link.title ? "text-blue-400 font-bold" : "text-white"} text-2xl cursor-pointer hover:bg-red-500 px-3 py-2 rounded-lg duration-300`}onClick={() => { setActive(link.title);setToggle(false);}}>
                                <a className="w-full" href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </nav>
    );
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import S from '../imgs/S.png';
import { styles } from "../styles";
import { navLinks } from "../constants";
import menu from '../imgs/menu.png';
import close from '../imgs/close.png';

export function Navbar() {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={`${styles.paddingX} w-full flex justify-center items-center py-5 fixed top-0 z-20`}>
            <div className="navbar w-6/12 flex justify-between items-center max-w-7xl p-2 rounded-2xl">
                <Link to="/" className="flex items-center gap-2" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
                    <img src={S} alt="" className="w-9 h-9 object-contain" />
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li key={link.id} className={`${active === link.title ? "text-black" : "text-[#d6f4ff]"} hover:text-white text-2xl font-medium cursor-pointer duration-300`}
                            onClick={() => setActive(link.title)}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img src={toggle ? close : menu} alt="" className="w-16 h-16 object-contain cursor-pointer invert" onClick={() => setToggle(!toggle)} />
                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute  top-20 right-0 px-4 my-2 min-w[140px] z-10 rounded-xl`}>
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {navLinks.map((link) => (
                                <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px] duration-300`}
                                    onClick={() => { setActive(link.title); setToggle(!toggle) }}>
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}   
import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Links = () => {
    const handleEmailClick = () => {
        const email = 'shwetankdohroo7@gmail.com';
        const subject = '';
        const body = '';
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
      };
    return (
        <>
            <div>
                <div className="flex flex-col">
                    <p className="Heading text-[#6cc4e2] text-3xl font-semibold">Lets Connect</p>
                    <h2 className={`${styles.sectionHeadText} HeadingText`}>My Profiles.</h2>
                    <p className="Heading-desc mt-4 text-[#6cc4e2] text-2xl font-semibold">
                    </p>
                </div>
            </div>
            <div className="links flex flex-col h-full w-full ">
                <a href="https://github.com/ShwetankDohroo1">
                    <div className="github flex items-center border-b-2 h-32 p-2 hover:text-black duration-500">
                        <h1 className="text-5xl">GITHUB</h1>
                        <div className="flex justify-end items-center p-5 h-full w-full text-5xl">
                            &#x2197;
                        </div>
                    </div>
                </a>
                <a onClick={handleEmailClick}>
                    <div className="email flex items-center border-b-2 h-32 p-2 hover:text-black duration-500">
                        <h1 className="text-5xl">EMAIL</h1>
                        <div className="flex justify-end items-center p-5 h-full w-full text-5xl">
                            &#x2197;
                        </div>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/shwetank-dohroo-066651242/">
                    <div className="linkedin flex items-center border-b-2 h-32 p-2 hover:text-black duration-500">
                        <h1 className="text-5xl">LINKEDIN</h1>
                        <div className="flex justify-end items-center p-5 h-full w-full text-5xl">
                            &#x2197;
                        </div>
                    </div>
                </a>
                <a href="https://leetcode.com/u/Shwetank_Dohroo/">
                    <div className="leetcode flex items-center border-b-2 h-32 p-2 hover:text-black duration-500">
                        <h1 className="text-5xl">LeetCode</h1>
                        <div className="flex justify-end items-center p-5 h-full w-full text-5xl">
                            &#x2197;
                        </div>
                    </div>
                </a>
                <a href="https://www.geeksforgeeks.org/user/shwetankwi0igy/">
                    <div className="gfg flex items-center border-b-2 h-32 p-2 hover:text-black duration-500">
                        <h1 className="text-5xl">GFG</h1>
                        <div className="flex justify-end items-center p-5 h-full w-full text-5xl">
                            &#x2197;
                        </div>
                    </div>
                </a>
                <a href="https://codeforces.com/profile/ShwetankDohroo">
                    <div className="codeforce flex items-center border-b-2 h-32 p-2 hover:text-black duration-500">
                        <h1 className="text-5xl">CodeForces</h1>
                        <div className="flex justify-end items-center p-5 h-full w-full text-5xl">
                            &#x2197;
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}
export default SectionWrapper(Links, "links");
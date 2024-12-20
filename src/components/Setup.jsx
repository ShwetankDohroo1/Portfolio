import { motion } from 'framer-motion';
import { styles } from '../styles';
import Computer from './Canvas/Computer';
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

export function Setup() {
    useEffect(() => {
        new Typewriter('#typewriter', {
            strings: ['Hi, I\'m Shwetank', 'Welcome to my Portfolio'],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
        });
    }, []);

    return (
        <section className="relative w-full h-screen mx-auto">
            <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#c54930]" />
                    <div className='w-1 sm:h-80 h-40 orange-pink-gradient' />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText} myname text-white`}>
                        <span id="typewriter" className="text-[#e2a454]"></span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I am a FullStack WebDeveloper.
                    </p>
                </div>
            </div>
            <Computer />
            <div className='navi absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#e2826f] flex justify-center items-start p-2'>
                        <motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }} className='w-3 h-3 rounded-full bg-[#ffb765] mb-1'/>
                    </div>
                </a>
            </div>
        </section>
    );
}

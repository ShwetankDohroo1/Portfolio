import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx';
import { Navbar } from './components/Navbar.jsx';
import Tech from './components/Tech.jsx';
import { Setup } from './components/Setup.jsx';
import Links from './components/Links.jsx';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

function App() {
  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;
      if (cursorDot) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <ParallaxProvider>
      <BrowserRouter>
        <div className='relative z-0 bg-[#101820]'>
          <div className="cursor-dot" data-cursor-dot></div>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Setup />
          </div>
          <hr className="bg-[#FEE715] h-0.5 border-0 rounded-3xl w-11/12 mx-auto my-8" />
          <Parallax speed={-10}>
            <About />
          <hr className="bg-[#FEE715] h-0.5 border-0 rounded-3xl w-11/12 mx-auto my-8" />
          </Parallax>
            <Projects />
          <hr className="bg-[#FEE715] h-0.5 border-0 rounded-3xl w-11/12 mx-auto my-8" />
            <Tech />
          <hr className="bg-[#FEE715] h-0.5 border-0 rounded-3xl w-11/12 mx-auto my-8" />
          <Parallax speed={-10}>
            <Links />
          </Parallax>
          <hr className="bg-[#FEE715] h-0.5 border-0 rounded-3xl w-11/12 mx-auto my-8" />
          <div className='relative z-0'>
            <Parallax speed={-10}>
              <Contact />
            </Parallax>
          </div>
          <hr className="bg-[#FEE715] h-0.5 border-0 rounded-3xl w-11/12 mx-auto my-8" />
        </div>
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;

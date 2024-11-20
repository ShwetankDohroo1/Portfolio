import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx';
import { Navbar } from './components/Navbar.jsx';
import Tech from './components/Tech.jsx';
import { Setup } from './components/Setup.jsx';
import Resume from './components/Resume.jsx';

function App() {
  const [cursorColor, setCursorColor] = useState("#ffffff");

  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;
      if(cursorDot){
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        cursorDot.style.backgroundColor = cursorColor;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorColor]);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-gradient-to-b from-[#1a405c] via-[#205072] via-[#007693] via-[#009d9f] via-[#2dc196] to-[#95e180]'>
        <div className="cursor-dot" data-cursor-dot></div>
        <div className="color-picker-container flex flex-col justify-center items-center">
          <label htmlFor="cursor-color" className="text-black mr-2">Choose Cursor Color</label>
          <input className="bg-transparent w-7 h-7" type="color" id="cursor-color" value={cursorColor} onChange={(e) => setCursorColor(e.target.value)}/>
        </div>
        
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Setup />
        </div>
        <hr className="bg-red-400 h-0.5 border-0 rounded-3xl w-11/12 mx-auto my-8" />
        <About />
        <hr className="bg-red-400 h-0.5 border-0 rounded-3xl w-11/12 mx-auto my-8" />
        <Projects />
        <hr className="bg-red-400 h-0.5 border-0 rounded-3xl w-11/12 mx-auto my-8" />
        <Tech />
        <hr className="bg-red-400 h-0.5 border-0 rounded-3xl w-11/12 mx-auto my-8" />
        <Resume />
        <hr className="bg-red-400 h-0.5 border-0 rounded-3xl w-11/12 mx-auto my-8" />
        <div className='relative z-0'>
          <Contact />
        </div>
        <hr className="bg-red-400 h-0.5 border-0 rounded-3xl w-11/12 mx-auto my-8" />
      </div>
    </BrowserRouter>
  );
}

export default App;

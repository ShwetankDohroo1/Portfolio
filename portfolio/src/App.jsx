import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import { Navbar } from "./components/Navbar.jsx";
import Tech from "./components/Tech.jsx";
import { Setup } from "./components/Setup.jsx";
import Links from "./components/Links.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(isLoading){
      document.body.style.overflow = "hidden";
    } 
    else{
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "auto";
    }
    //cursor logic
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;
      if(cursorDot){
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    //loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, [isLoading]);

  return (
    <BrowserRouter>
      <div className={`relative z-1 bg-[#0a0a0a] ${isLoading ? "" : "fade-in show"}`}>
        <div className="cursor-dot" data-cursor-dot></div>
        {isLoading && (
          <div className="clock-loader-container">
            <div className="clock-loader"></div>
          </div>
        )}
        <div className={`bg-hero-pattern bg-cover bg-no-repeat bg-center ${isLoading ? "fade-in" : "fade-in show"}`}>
          <Navbar />
          <Setup />
        </div>
        <hr className="bg-white h-0.5 border-0 rounded-3xl w-11/12 mx-auto my-8" />
        <About />
        <hr className="bg-white h-0.5 border-0 rounded-3xl w-11/12 mx-auto my-8" />
        <Projects />
        <section className="outro">
          <h1>That's all with my projects, hope you found them interesting!</h1>
        </section>
        <hr className="bg-white h-0.5 border-0 rounded-3xl w-11/12 mx-auto my-8" />
        <Tech />
        <hr className="bg-white h-0.5 border-0 rounded-3xl w-11/12 mx-auto my-8" />
        <Links />
        <hr className="bg-white h-0.5 border-0 rounded-3xl w-11/12 mx-auto my-8" />
        <div className="relative z-0">
          <Contact />
        </div>
        <hr className="bg-white h-0.5 border-0 rounded-3xl w-11/12 mx-auto my-8" />
      </div>
    </BrowserRouter>
  );
}

export default App;

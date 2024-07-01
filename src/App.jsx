import "./App.css";
import About from "./components/About";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
      <div className="text-neutral-300 antialiased selection:bg-lime-300 selection:text-white">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_5px,#00091d_50px)] bg-[size:20px_20px]"></div>
        </div>

        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Certification/>
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;

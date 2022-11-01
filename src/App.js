import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";


function App() {
  return (
    <div className="text-center">
      <Navbar />
      <Home />
      <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;

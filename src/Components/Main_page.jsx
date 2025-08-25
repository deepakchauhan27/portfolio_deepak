import "/src/App.css";
import { useEffect } from "react";
import Header_class from "./header";
import Banner from "./Banner";
import About from "./About";
import Education from "./Education";
import Tech_stack from "./Tech__stack";
import Projects from "./Project";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function MainPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // animation should happen only once
    });
  }, []);

  return (
      <div className="bg-gradient-to-r  from-[#4adf8b] from-30% to-[#9ed662] to-90% font-mono ">
        <div className="relative z-10">
          <Header_class />
          <Banner />
          <About />
          <Education />
          <Tech_stack />
          <Projects />
          <Footer />
        </div>
    </div>
  );
}
export default MainPage;

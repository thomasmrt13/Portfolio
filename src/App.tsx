import NavBar from "./components/navigation/NavBar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProXpSection from "./sections/ProXpSection";
import TechnoSection from "./sections/TechnoSection";
import Footer from "./sections/Footer";
import ScrollTopBtn from "./components/common/ScrollTopBtn";

function App() {
  return (
    <div className="pt-20 min-h-screen bg-primary text-white font-mono overflow-x-hidden">
      <NavBar />
      <div className="relative pt-40 min-h-screen bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat overflow-y-auto text-center">
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-primary z-10" />
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-t from-transparent to-primary z-10" />
        <HeroSection />
      </div>
        <AboutSection />
        <ProXpSection />
        <TechnoSection />
        <Footer />
        <ScrollTopBtn />
    </div>
  );
}

export default App;

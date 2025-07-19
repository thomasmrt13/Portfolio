import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";

function App() {
  return (
    <div className="pt-20 min-h-screen bg-primary text-white font-mono">
      <NavBar />
      <div className="relative pt-40 min-h-screen bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat overflow-y-auto text-center">
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-primary z-10" />
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-t from-transparent to-primary z-10" />
        <HeroSection />
      </div>
        <AboutSection />
    </div>
  );
}

export default App;

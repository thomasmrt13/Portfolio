import { useState, useEffect } from "react";

function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "DEVELOPPEUR FULL-STACK WEB & MOBILE";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div id="home" className="h-full">
      <h1 className="text-6xl sm:text-8xl lg:text-9xl break-words text-slate-50 font-bold">
        THOMAS MARTIN
      </h1>
      <br></br>
      <h1 className="text-l md:text-3xl text-slate-50 font-semibold">
        {text}
        <span className="animate-pulse">|</span>
      </h1>
    </div>
  );
}

export default HeroSection;
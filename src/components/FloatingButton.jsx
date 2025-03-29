import React, { useEffect, useRef } from "react";

const FloatingButton = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    let degree = 0.5;

    const rotateText = () => {
      degree += 0.2;
      textElement.style.transform = `rotate(${degree}deg)`;
    };

    const interval = setInterval(rotateText, 30);
    return () => clearInterval(interval);
  }, []);

  const handleRedirect = () => {
    window.location.href = "mailto:nagmaniraj133@gmail.com";
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Main Button */}
      <div
        className="relative w-28 h-28 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 cursor-pointer flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
        onClick={handleRedirect}
      >
        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white font-bold text-lg font-poppins tracking-wide">Hire Me!</p>
        </div>

        {/* Rotating Text */}
        <div
          ref={textRef}
          className="absolute w-full h-full flex items-center justify-center"
        >
          {Array.from("• WEB DEVELOPMENT • FRONTEND • REACT").map((char, index) => (
            <span
              key={index}
              className="absolute font-mono font-bold"
              style={{
                transform: `rotate(${index * 10}deg) translate(70px) rotate(-${index * 0}deg)`,
                transformOrigin: "center",
                color: "#ffffff",
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              {char}
            </span>
          ))}
        </div>
        
        {/* Pulsing Effect */}
        <div className="absolute inset-0 rounded-full border-2 border-white opacity-0 hover:opacity-100 animate-ping pointer-events-none transition-opacity duration-1000"></div>
      </div>
    </div>
  );
};

export default FloatingButton;
import React, { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] text-center px-4 bg-gradient-to-br from-pink-400 via-rose-500 to-purple-600">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 right-32 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main content with glassmorphism */}
      <div className="relative z-10 backdrop-blur-sm bg-white bg-opacity-10 rounded-3xl p-8 shadow-2xl">
        <h1
          className={`text-4xl md:text-5xl font-bold mb-4 text-white transform transition-all duration-500 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'
          }`}
        >
          Welcome to TravelApp ✈️
        </h1>
        <p
          className={`text-white text-lg max-w-xl transform transition-all duration-500 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          Temukan destinasi menarik, baca artikel perjalanan seru, dan bagikan pengalamanmu. 
          Mari menjeeelajahi dunia bersama TravelApp!
        </p>
        <div className={`mt-6 flex gap-4 transform transition-all duration-500 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <a
            href="/articles"
            className="bg-gradient-to-r from-pink-600 to-pink-800 text-white px-6 py-3 rounded-lg shadow-lg hover:from-pink-700 hover:to-pink-900 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Explore Articles
          </a>
          <a
            href="/login"
            className="border-2 border-pink-600 text-pink-600 bg-white bg-opacity-90 px-6 py-3 rounded-lg shadow-lg hover:bg-pink-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Get Started!
          </a>
        </div>
      </div>

      {/* Travel icons floating around */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-white text-2xl animate-bounce" style={{animationDelay: '0.5s'}}>🏝️</div>
        <div className="absolute top-1/3 right-1/4 text-white text-2xl animate-pulse" style={{animationDelay: '1.5s'}}>🗺️</div>
        <div className="absolute bottom-1/4 left-1/3 text-white text-2xl animate-bounce" style={{animationDelay: '2.5s'}}>🏔️</div>
        <div className="absolute bottom-1/3 right-1/3 text-white text-2xl animate-pulse" style={{animationDelay: '3s'}}>🎒</div>
      </div>
    </div>
  );
}
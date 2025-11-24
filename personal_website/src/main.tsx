import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./header.tsx";
import { App } from "./App.tsx";
import { Footer } from "./footer.tsx";
import "bootstrap/dist/css/bootstrap.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>
);

//note what i installed:
/*
1) npm install bootstrap
2) npm install tailwindcss @tailwindcss/vite
*/
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/*
import { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function PortfolioHome() {
  const [darkMode, setDarkMode] = useState(true);
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Hi, I'm Marcus";
  const subtitle = "An Aspiring Frontend Developer!";

  // Typing animation effect
  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [text]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const bgClass = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const subtextClass = darkMode ? 'text-gray-400' : 'text-gray-600';
  const accentClass = darkMode ? 'text-blue-400' : 'text-blue-600';
  const cardClass = darkMode ? 'bg-gray-800/50' : 'bg-white/50';

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-500 relative overflow-hidden`}>
//      { Animated background shapes }
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-72 h-72 ${darkMode ? 'bg-blue-500/10' : 'bg-blue-500/20'} rounded-full blur-3xl animate-float`}></div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 ${darkMode ? 'bg-purple-500/10' : 'bg-purple-500/20'} rounded-full blur-3xl animate-float-delayed`}></div>
        <div className={`absolute top-1/2 left-1/2 w-64 h-64 ${darkMode ? 'bg-pink-500/10' : 'bg-pink-500/20'} rounded-full blur-3xl animate-pulse-slow`}></div>
      </div>

//      { Theme toggle button }
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-6 right-6 p-3 rounded-full ${cardClass} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:scale-110 transition-all duration-300 z-50 shadow-lg`}
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-gray-700" />
        )}
      </button>

//      { Main content }
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center space-y-8 animate-fade-in">
          // { Main heading with typing effect }
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              {text}
              <span className={`${accentClass} ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
            </h1>
            <p className={`text-2xl md:text-3xl ${subtextClass} animate-slide-up`}>
              {subtitle}
            </p>
          </div>

          // { Decorative line }
          <div className="flex items-center justify-center space-x-4 animate-slide-up-delayed">
            <div className={`h-px w-16 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
            <div className={`w-2 h-2 rounded-full ${accentClass} bg-current animate-pulse`}></div>
            <div className={`h-px w-16 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
          </div>

          // { Social links }
          <div className="flex gap-6 justify-center animate-slide-up-delayed-2">
            <a
              href="#"
              className={`p-3 rounded-full ${cardClass} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:scale-110 hover:${accentClass.replace('text', 'border')} transition-all duration-300`}
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              className={`p-3 rounded-full ${cardClass} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:scale-110 hover:${accentClass.replace('text', 'border')} transition-all duration-300`}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className={`p-3 rounded-full ${cardClass} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:scale-110 hover:${accentClass.replace('text', 'border')} transition-all duration-300`}
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          // { CTA Button }
          <div className="pt-8 animate-slide-up-delayed-3">
            <button className={`px-8 py-4 ${accentClass} bg-current/10 border-2 border-current rounded-full font-semibold hover:bg-current hover:${darkMode ? 'text-gray-900' : 'text-white'} transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl`}>
              View My Work
            </button>
          </div>
        </div>

        // { Scroll indicator }
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className={`w-8 h-8 ${subtextClass}`} />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-30px, 30px) rotate(-5deg); }
          66% { transform: translate(20px, -20px) rotate(5deg); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out 0.5s both;
        }

        .animate-slide-up-delayed {
          animation: slide-up 1s ease-out 1s both;
        }

        .animate-slide-up-delayed-2 {
          animation: slide-up 1s ease-out 1.3s both;
        }

        .animate-slide-up-delayed-3 {
          animation: slide-up 1s ease-out 1.6s both;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
*/

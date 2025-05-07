import './index.css';
import { useRef, useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [step, setStep] = useState('splash');
  const heroRef = useRef();

  const handleSplashFinish = () => {
    setShowSplash(false);

    // Wait a frame before scrolling (for fade-out smoothness)
    setTimeout(() => {
      heroRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <div className="dark bg-gray-900 text-gray-100 font-sans">
          <Navbar />
          <div ref={heroRef}>
            <Hero />
          </div>
          <About />
          <Projects />
        </div>
      )}
    </>
  );
}

export default App;

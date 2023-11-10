"use client"
import Image from 'next/image';
import Hero from './components/Hero';
import SplashScreen from './components/SplashScreen';
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loading) {
      // Simulate loading progress
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 10;
          if (newProgress >= 100) {
            clearInterval(interval);
            setLoading(false); // Set loading to false when progress is complete
          }
          return newProgress;
        });
      }, 500); // Adjust the interval as needed

      return () => clearInterval(interval);
    }
  }, [loading]);

  return (
    <div>
      {loading ? <SplashScreen progress={progress} /> : <Hero />}
    </div>
  );
};

export default Home;

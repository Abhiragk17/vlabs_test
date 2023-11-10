import React from 'react';

const SplashScreen = ({ progress }) => {
  return (
    <div className="min-h-screen flex flex-col w-full justify-center items-center bg-black">
      <div className="flex justify-between w-full text-white">
        <p style={{ color: progress >= 50 ? 'white' : 'purple', fontSize: '1.5rem' }}>You think</p>
        <p style={{ color: progress >= 50 ? 'purple' : 'white', fontSize: '1.5rem' }}>We create</p>
      </div>

      <div className="w-full h-4 bg-slate-300 relative mb-2">
        <progress
          value={progress}
          max="100"
          className="absolute inset-0 w-full h-full bg-transparent"
          style={{
            background: `linear-gradient(to right, #FFD6E8 ${progress}%, transparent ${progress}%)`,
          }}
        ></progress>
      </div>

      <p className="text-white font-bold text-xl">{progress}</p>
    </div>
  );
};

export default SplashScreen;

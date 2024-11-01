import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  return (
    <>
      <div>
        <LoadWelcome />
      </div>
    </>
  );
}

function LoadWelcome() {
  const [isMoved, setIsMoved] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true); // Control visibility of "Welcome"
  const [showOneSpace, setShowOneSpace] = useState(false); // Control visibility of "OneSpace"

  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false); // Fade out "Welcome" after 3 seconds
      setShowOneSpace(true); // Start showing "OneSpace" after "Welcome" fades out
    }, 3000); // Show "Welcome" for 3 seconds

    const moveTimer = setTimeout(() => {
      setIsMoved(true); // Move after 5 seconds
    }, 5000); // Move after 5 seconds

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(moveTimer); // Cleanup timers
    };
  }, []);

  return (
    <div className={`absolute ${isMoved ? 'top-4 left-1/2 animate-fadeIn' : 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'} flex flex-col items-center`}>
      <div className={`border-t-4 border-black h-20 w-48 flex flex-col justify-center items-center`}>
        <h1 className={`text-customblue text-3xl font-bold ${showWelcome ? 'animate-fadeIn' : 'animate-fadeOut'}`}>
          {showWelcome ? 'Welcome' : ''}
        </h1>
        <h1 className={`text-customblue text-3xl font-bold ${showOneSpace ? 'animate-fadeIn' : 'animate-fadeOut'}`}>
          {showOneSpace ? 'OneSpace' : ''}
        </h1>
        <div className="bg-gray-300 h-10 w-full"></div>
      </div>
    </div>
  );
}

export default App;

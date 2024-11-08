import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ActionItem() {
  const [OpenFrame, CloseFrame] = useState(false);
  const [selectedNum, setSelectedNum] = useState(null);

  const handleClick = (num) => {
    setSelectedNum(num);
  };

  const toggleDropdown = () => {
    CloseFrame(!OpenFrame);
  };

  return (
    <>
      <TopActionBlock selectedNum={selectedNum} />
      {!OpenFrame && (
        <>
          <BottomActionBlock />
          <AccessDeviceRequest setSelectedNum={handleClick} />
          <IncidentReports />
        </>
      )}

      <button
        onClick={toggleDropdown}
        className="p-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300"
      >
        {OpenFrame ? '▲' : '▼'}
      </button>
    </>
  );
}

function TopActionBlock({ selectedNum }) {
  return (
    <div className="bg-customdarkblue p-6 rounded-lg shadow-lg flex justify-between items-center">
      <img src="/BellIcon.png" alt="Bell Icon" className="w-12 h-12" />
      <h3 className="text-3xl font-bold text-white">
        {selectedNum !== null ? `${selectedNum} out of 10 Actions` : '0 out of 10 Actions'}
      </h3>
      <input
        placeholder="Search"
        className="w-1/3 px-3 py-1 rounded-lg text-black bg-white border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function BottomActionBlock() {
  return (
    <div className="flex space-x-4">
      <Link to="/somewhere" className="flex-1 p-6 bg-white text-customdarkblue rounded-lg shadow-lg hover:bg-slate-400 transition duration-300 cursor-pointer">
        <h3 className="text-xl font-bold">User Join Request</h3>
      </Link>
      <Link to="/somewhere" className="flex-1 p-6 bg-white text-customdarkblue rounded-lg shadow-lg hover:bg-slate-400 transition duration-300 cursor-pointer">
        <h3 className="text-xl font-bold">Booking Requests</h3>
      </Link>
      <Link to="/somewhere" className="flex-1 p-6 bg-white text-red-700 rounded-lg shadow-lg hover:bg-slate-400 transition duration-300 cursor-pointer">
        <h3 className="text-xl font-bold">Device Health Alerts</h3>
      </Link>
    </div>
  );
}

function AccessDeviceRequest({ setSelectedNum }) {
  return (
    <Link onClick={() => setSelectedNum(3)}  className="flex flex-col items-start p-6 bg-white text-customdarkblue rounded-lg shadow-lg hover:bg-slate-400 transition duration-300 cursor-pointer">
      <div className="flex items-center space-x-2">
        <img src="./key.png" alt="Key icon" className="w-8 h-8 mt-1" />
        <h3 className="text-xl font-bold">Access Device Requests</h3>
        <AccessDeviceRequestsSub setSelectedNum={setSelectedNum} />
      </div>
    </Link>
  );
}

function AccessDeviceRequestsSub({ setSelectedNum }) {
    return (
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden max-w-md mx-auto mt-4">
        <Link 
          onClick={(e) => {
            e.stopPropagation();
            setSelectedNum(1);
          }} 
          className="w-1/4 p-6 text-center hover:bg-gray-100 transition duration-300 cursor-pointer border-r"
        >
          <h3 className="text-base font-bold text-customdarkblue">1</h3>
          <img src='./face-id.png' alt="Face ID" className="w-8 h-8 mt-1" />
        </Link>
        
        <Link 
          onClick={(e) => {
            e.stopPropagation();
            setSelectedNum(2);
          }} 
          className="w-1/4 p-6 text-center hover:bg-gray-100 transition duration-300 cursor-pointer border-r"
        >
          <h3 className="text-base font-bold text-customdarkblue">2</h3>
          <img src='./iphone.png' alt="iPhone" className="w-8 h-8 mt-1" />
        </Link>
        
        <Link 
          onClick={(e) => {
            e.stopPropagation();
            setSelectedNum(0);
          }} 
          className="w-1/4 p-6 text-center hover:bg-gray-100 transition duration-300 cursor-pointer border-r"
        >
          <h3 className="text-base font-bold text-customdarkblue">0</h3>
          <img src='./wifi.png' alt="WiFi" className="w-8 h-8 mt-1" />
        </Link>
        
        <Link 
          onClick={(e) => {
            e.stopPropagation();
            setSelectedNum(0);
          }} 
          className="w-1/4 p-6 text-center hover:bg-gray-100 transition duration-300 cursor-pointer"
        >
          <h3 className="text-base font-bold text-customdarkblue">0</h3>
          <img src='./car.png' alt="Car" className="w-8 h-8 mt-1" />
        </Link>
      </div>
    );
  }

function IncidentReports() {
  return (
    <Link to="/somewhere" className="flex-1 p-6 bg-white text-customdarkblue rounded-lg shadow-lg hover:bg-slate-400 transition duration-300 cursor-pointer">
      <div className="flex space-x-2 items-center">
        <img src="./warning.png" alt="Warning icon" className="w-8 h-8 mt-1" />
        <h3 className="text-xl font-bold">Incident Reports</h3>
      </div>
    </Link>
  );
}

export default ActionItem;

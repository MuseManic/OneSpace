



import React from 'react';
import { Link } from 'react-router-dom';


function ActionItem() {
  return (
    <>
    <TopActionBlock/>
    <BottomActionBlock/>

    </>

  );
}

function BottomActionBlock() {
    return (
        <>
    <div className="flex space-x-4">
  {/* Left Panel */}
  <div className="flex w-full space-x-4">
    
    {/* Clickable Panel 1 */}
    <Link to="/somewhere" className="flex-1 p-6 bg-white text-customdarkblue rounded-lg shadow-lg hover:bg-slate-400 transition duration-300 cursor-pointer">
      <h3 className="text-xl font-bold">User Join Request</h3>
    </Link>

    {/* Clickable Panel 2 */}
    <Link to="/somewhere" className="flex-1 p-6 bg-white text-customdarkblue rounded-lg shadow-lg hover:bg-slate-400 transition duration-300 cursor-pointer">
      <h3 className="text-xl font-bold">Booking Requests</h3>    
    </Link>

    {/* Clickable Panel 3 */}
    <Link to="/somewhere" className="flex-1 p-6 bg-white text-red-700 rounded-lg shadow-lg hover:bg-slate-400 transition duration-300 cursor-pointer">
      <h3 className="text-xl font-bold">Device Health Alerts</h3>
    </Link>
    
  </div>
</div>


     
 
  
        </>
    );
  }

//   This is the block that will display the number of items that require actions 
  function TopActionBlock() {
    return (
<>
  <div className="bg-customdarkblue p-6 rounded-lg shadow-lg flex justify-between items-center">
  <img src="/BellIcon.png" alt="Bell Icon" className="w-12 h-12" />
    <h3 className="text-3xl font-bold text-white">3 Out of 10 Action Items</h3>
    <input
      placeholder="Search"
      className="w-1/3 px-3 py-1 rounded-lg text-black bg-white border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</>



    );

  }


export default ActionItem;

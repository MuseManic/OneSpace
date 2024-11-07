import React from 'react';
import ActionDashboard from './ActionDashboard';  
import ActionItem from './ActionItem';            

function DashboardMain() {
  return (
    <div className="flex space-x-4">
      <div className="flex flex-col w-1/2 space-y-4">
        <ActionDashboard />
        <ActionItem />
      </div>


      <div className="w-1/2">
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold">Select an Action Item</h3>
        </div>
      </div>
    </div>
  );
}

export default DashboardMain;

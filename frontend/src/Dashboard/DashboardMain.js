import React from 'react';
import ActionItem from './ActionItem';    
import { useState } from 'react';
import AddUser from './AddUser';


// Contains the main layout of the dashboard
function DashboardMain() {
  const [selectedAction, setSelectedAction] = useState('No Action Selected');


  return (
    
    <div className="flex space-x-4">
      <div className="flex flex-col w-1/2 space-y-4">
      <ActionItem setSelectedAction={setSelectedAction}/>
     
      </div>


      <div className="w-1/2">
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold">{selectedAction}</h3>
          {selectedAction === 'Mark Knopfler Selected' && (
            <AddUser />
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardMain;

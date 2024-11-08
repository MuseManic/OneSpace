import React, { useState } from 'react';

function ActionDeviceRequests({ setSelectedAction }) {
  return (
    <>
      <ItemList setSelectedAction={setSelectedAction} />
    </>
  );
}

const ItemList = ({ setSelectedAction }) => {
  const items = [
    { image: './face-id.png', name: 'Mark Knopfler', state: 'active' },
    { image: './iphone.png', name: 'David Gilmore', state: 'snoozed' },
    { image: './iphone.png', name: 'Jimmy Hendrix', state: 'snoozed' },
    { image: './car.png', name: 'Slash', state: 'inactive' },
  ];

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index); 
  };

  const handleMouseLeave = () => {
    setHoveredItem(null); 
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-lg hover:bg-slate-100 transition duration-300"
        >
          <img src={item.image} alt={item.name} className="w-8 h-8" />
          <div className="flex-1">
            <h3
              className={`text-lg font-semibold ${
                hoveredItem === index
                  ? item.state === 'active'
                    ? 'text-green-500'
                    : item.state === 'snoozed'
                    ? 'text-yellow-500'
                    : item.state === 'inactive'
                    ? 'text-red-600'
                    : 'text-blue-500'
                  : 'text-customdarkblue'
              } cursor-pointer`}
              onMouseEnter={() => handleMouseEnter(index)} 
              onMouseLeave={handleMouseLeave}
              onClick={() => setSelectedAction(`${item.name} Selected`)} // Update selected action when clicked
            >
              {item.name} {/* Display the name */}
            </h3>
          </div>
          <div
            className={`text-sm font-bold ${
              item.state === 'active'
                ? 'text-green-500'
                : item.state === 'snoozed'
                ? 'text-yellow-500'
                : item.state === 'inactive'
                ? 'text-red-600'
                : 'text-blue-500'
            }`}
          >
            {item.state} {/* Display the state */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActionDeviceRequests;

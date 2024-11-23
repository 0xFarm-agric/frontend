
import React from "react";

export const HarvestSummary = () => {
  const harvests = [
    { name: 'Tomatoes', amount: '150 tons' },
    { name: 'Carrots', amount: '120 tons' },
    { name: 'Corn', amount: '200 tons' }
  ];

  return (
    <div className="w-full mt-6 rounded-lg shadow-lg p-8">
      <p className='text-sm font-semibold mb-4'>Vegetable Harvest Summary</p>

      <div>
        <div className="divide-y divide-gray-200">
          {harvests.map((harvest, index) => (
            <div key={index}>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index === 0 ? 'bg-red-100' :
                    index === 1 ? 'bg-orange-100' : 'bg-green-100'
                  }`}>
                    {index === 0 && <span className="text-red-600">🍅</span>}
                    {index === 1 && <span className="text-orange-600">🥕</span>}
                    {index === 2 && <span className="text-green-600">🌽</span>}
                  </div>
                  <span className="ml-3 font-thin text-sm">{harvest.name}</span>
                </div>
                <span className="font-semibold text-sm">{harvest.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

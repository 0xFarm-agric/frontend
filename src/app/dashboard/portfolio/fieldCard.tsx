import React from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";



export const FieldCard = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedField, setSelectedField] = useState('corn');
  
    const fieldData = {
      corn: {
        name: 'Corn Field',
        image: '/strawberry-field.jpg',
        cropHealth: 'Good',
        plantingDate: '16 March, 2024',
        harvestTime: '6 month',
        bgColor: 'bg-green-50',
        textColor: 'text-green-800'
      },
      wheat: {
        name: 'Wheat Field',
        image: '/strawberry-field.jpg',
        cropHealth: 'Excellent',
        plantingDate: '10 February, 2024',
        harvestTime: '4 month',
        bgColor: 'bg-amber-50',
        textColor: 'text-amber-800'
      },
      potato: {
        name: 'Potato Field',
        image: '/strawberry-field.jpg',
        cropHealth: 'Fair',
        plantingDate: '20 March, 2024',
        harvestTime: '3 month',
        bgColor: 'bg-brown-50',
        textColor: 'text-brown-800'
      },
      soybean: {
        name: 'Soybean Field',
        image: '/strawberry-field.jpg',
        cropHealth: 'Good',
        plantingDate: '1 April, 2024',
        harvestTime: '5 month',
        bgColor: 'bg-yellow-50',
        textColor: 'text-yellow-800'
      }
    };
  
    const currentField = fieldData[selectedField];
  
    return (
      <div className="w-full overflow-hidden rounded-lg bg-white shadow-md">
        <div className="relative">
          <img
            src={currentField.image}
            alt={`${currentField.name} at sunset`}
            className="object-cover w-full h-48"
          />
          
          {/* Dropdown Menu */}
          <div className="absolute top-4 right-4">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center px-4 py-2 bg-white rounded-lg shadow-md text-sm"
              >
                <span className="mr-2 text-sm font-thin">Switch Field</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 w-48 mt-2 bg-white rounded-lg shadow-lg z-10">
                  {Object.entries(fieldData).map(([key, field]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedField(key);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                        selectedField === key ? 'bg-gray-50' : ''
                      }`}
                    >
                      {field.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
  
          {/* Field Information */}
          <div className={`absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-90`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className={`text-sm font-medium ${currentField.textColor}`}>
                  {currentField.name}
                </span>
              </div>
              <button className="flex items-center text-gray-600 text-sm">
                More Details
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
  
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-gray-500 text-sm">Crop Health</p>
                <p className={`font-semibold ${currentField.textColor}`}>
                  {currentField.cropHealth}
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Planting Date</p>
                <p className="font-semibold">
                  {currentField.plantingDate}
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Harvest Time</p>
                <p className="font-semibold">
                  {currentField.harvestTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
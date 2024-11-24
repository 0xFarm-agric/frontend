'use client'
import React, { useState, useRef } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

const DateDropdownInput: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'January', 'February', 'March', 'April', 'May', 
    'June', 'July', 'August', 'September', 'October', 
    'November', 'December',
  ];
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  const handleDateSelect = (day: number, month: string, year: number) => {
    setSelectedDate(`${month} ${day}, ${year}`);
    setShowDropdown(false);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="dob" className="mb-2 font-medium text-gray-700">
        Date Of Birth
      </label>
      <div className="relative w-72">
        {/* Input Field */}
        <input
          type="text"
          id="dob"
          value={selectedDate}
          placeholder="MM/DD/YYYY"
          readOnly
          onClick={() => setShowDropdown(!showDropdown)}
          className="border px-2 py-2 rounded w-full shadow focus:outline-none cursor-pointer"
        />
        <AiOutlineDown
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
        />

        {/* Dropdown */}
        {showDropdown && (
          <div
            ref={dropdownRef}
            className="absolute top-full mt-2 w-full bg-white border rounded shadow-md z-10"
          >
            <div className="flex gap-2 p-2">
              {/* Month Selector */}
              <select
                className="border px-2 py-1 rounded w-full focus:outline-none"
                onChange={(e) => setSelectedDate(`${e.target.value} ${selectedDate.split(' ')[1] || ''}, ${selectedDate.split(', ')[1] || ''}`)}
              >
                <option value="" disabled>
                  Month
                </option>
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>

              {/* Day Selector */}
              <select
                className="border px-2 py-1 rounded w-full focus:outline-none"
                onChange={(e) => setSelectedDate(`${selectedDate.split(' ')[0] || ''} ${e.target.value}, ${selectedDate.split(', ')[1] || ''}`)}
              >
                <option value="" disabled>
                  Day
                </option>
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>

              {/* Year Selector */}
              <select
                className="border px-2 py-1 rounded w-full focus:outline-none"
                onChange={(e) => setSelectedDate(`${selectedDate.split(' ')[0] || ''} ${selectedDate.split(' ')[1] || ''}, ${e.target.value}`)}
              >
                <option value="" disabled>
                  Year
                </option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => setShowDropdown(false)}
              className="w-full bg-blue-500 text-white py-2 rounded-b hover:bg-blue-600"
            >
              Confirm
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateDropdownInput;

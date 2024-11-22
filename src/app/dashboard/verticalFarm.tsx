import React, { useState } from 'react';
import { Edit, FileText, Target, Flag, Clock, File } from 'lucide-react';

// TabButton component remains the same...
const TabButton = ({ active, icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
      active 
        ? 'bg-green-50 text-green-600 text-xs md:text-[12px] font-medium' 
        : 'text-gray-400 hover:bg-gray-50 text-[10px] md:text-[10px]'
    }`}
  >
    <Icon size={16} className="flex-shrink-0" />
    <span className="whitespace-nowrap">{label}</span>
  </button>
);

// CampaignCard component with updated color scheme for vertical farming
const FarmingProjectCard = ({ 
  daysLeft, 
  supporters, 
  image, 
  title, 
  raised, 
  goal, 
  percentComplete,
  isFeatured,
  isGoalReached,
  cropType,
  location
}) => {
  const amountLeft = goal * raised;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <div className="bg-white rounded-full px-3 py-1 text-xs">
            {daysLeft} DAYS LEFT
          </div>
          <div className="bg-white rounded-full px-3 py-1 text-xs flex items-center gap-1">
            <span className="text-gray-600">👥</span> {supporters}
          </div>
        </div>

        <div className="absolute bottom-0 left-4 -mb-6 bg-white rounded-full p-2 shadow-lg">
          <div className="w-12 h-12 rounded-full border-4 border-green-500 flex items-center justify-center">
            <span className="text-xs font-medium">{percentComplete}%</span>
          </div>
        </div>

        {(isFeatured || isGoalReached) && (
          <div className="absolute top-3 right-3">
            <div className={`rounded-full px-3 py-1 text-xs ${
              isGoalReached ? 'bg-green-500 text-white' : 'bg-white text-green-500'
            }`}>
              {isGoalReached ? 'GOAL REACHED' : '⚡ FEATURED'}
            </div>
          </div>
        )}
      </div>

      <div className="p-4 pt-8">
        <h3 className="text-sm md:text-base font-semibold mb-2 line-clamp-2 h-12">{title}</h3>
        <div className="flex gap-2 mb-4 text-xs">
          <span className="bg-green-50 text-green-600 px-2 py-1 rounded-full">{cropType}</span>
          <span className="bg-gray-50 text-gray-600 px-2 py-1 rounded-full">{location}</span>
        </div>
        
        <button className="w-full mb-4 border border-green-500 text-green-500 rounded-lg py-2 px-4 flex items-center justify-center gap-2 hover:bg-green-50 transition-colors text-xs">
          Update Project
          <Edit size={14} />
        </button>

        <div className="grid grid-cols-3 gap-4 text-xs">
          <div>
            <div className="text-gray-400">Raised</div>
            <div className="font-semibold">${raised.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-gray-400">Period</div>
            <div className="font-semibold">{goal.toLocaleString()} Months</div>
          </div>
          <div>
            <div className="text-gray-400">Yield</div>
            <div className="font-semibold">${amountLeft.toLocaleString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const VerticalFarms = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      daysLeft: 74,
      supporters: '22K',
      image: '/v2.jpg',
      title: 'Carrot Farm Mountain Farm',
      raised: 150512,
      goal: 5,
      percentComplete: 75,
      isFeatured: true,
      isGoalReached: false,
      status: 'active',
      cropType: 'Leafy Greens',
      location: 'Wuse 2, Abuja'
    },
    {
      daysLeft: 6,
      supporters: '40K',
      image: '/v3.webp',
      title: 'Green Pepper Vertical Farm',
      raised: 252215,
      goal: 6,
      percentComplete: 100,
      isFeatured: false,
      isGoalReached: true,
      status: 'completed',
      cropType: 'Berries',
      location: 'Ikorodu, Lagos'
    },
    {
      daysLeft: 23,
      supporters: '10K',
      image: '/v4.jpg',
      title: 'Onions Farm',
      raised: 80212,
      goal: 3,
      percentComplete: 80,
      isFeatured: true,
      isGoalReached: false,
      status: 'active',
      cropType: 'Herbs',
      location: 'Ikeja, Lagos'
    },
    {
      daysLeft: 45,
      supporters: '15K',
      image: '/three.png',
      title: 'Community Vertical Farm for Fresh Tomatoes',
      raised: 120000,
      goal: 6,
      percentComplete: 67,
      isFeatured: false,
      isGoalReached: false,
      status: 'active',
      cropType: 'Tomatoes',
      location: 'Oke-ado, Akure'
    },
    {
      daysLeft: -1,
      supporters: '1K',
      image: '/v1.webp',
      title: 'Indoor Mushroom Cultivation Center',
      raised: 0,
      goal: 3,
      percentComplete: 0,
      isFeatured: false,
      isGoalReached: false,
      status: 'draft',
      cropType: 'Mushrooms',
      location: 'MaryLand, Lagos'
    }
  ];

  const tabs = [
    { id: 'all', label: 'All farms', icon: FileText },
    { id: 'completed', label: 'Open Farms', icon: Target },
    { id: 'active', label: 'Active Farms', icon: Flag },
    { id: 'closed', label: 'Harvested', icon: Clock },
    { id: 'draft', label: 'Draft', icon: File }
  ];

  const filteredProjects = projects.filter(project => {
    switch (activeTab) {
      case 'completed':
        return project.isGoalReached;
      case 'active':
        return !project.isGoalReached && project.status === 'active';
      case 'closed':
        return project.status === 'closed';
      case 'draft':
        return project.status === 'draft';
      default:
        return true;
    }
  });

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      {/* Tab Navigation */}
      <div className="bg-white p-2 rounded-lg shadow-sm mb-6 flex gap-2 overflow-x-auto">
        {tabs.map(tab => (
          <TabButton
            key={tab.id}
            active={activeTab === tab.id}
            icon={tab.icon}
            label={tab.label}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {filteredProjects.map((project, index) => (
          <FarmingProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default VerticalFarms;
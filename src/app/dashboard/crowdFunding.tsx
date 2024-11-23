"use client";

import React, { useState } from 'react';
import { Edit, FileText, Target, Flag, Clock, File } from 'lucide-react';

const TabButton = ({ active, icon: Icon, label, onClick }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${active
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-500 hover:bg-gray-50'
            }`}
    >
        <Icon size={16} />
        {label}
    </button>
);

const CampaignCard = ({
    daysLeft,
    supporters,
    image,
    title,
    raised,
    goal,
    percentComplete,
    isFeatured,
    isGoalReached
}) => {
    const amountLeft = goal - raised;

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                />

                <div className="absolute top-3 left-3 flex items-center gap-2">
                    <div className="bg-white rounded-full px-3 py-1 text-sm">
                        {daysLeft} DAYS LEFT
                    </div>
                    <div className="bg-white rounded-full px-3 py-1 text-sm flex items-center gap-1">
                        <span className="text-gray-600">👥</span> {supporters}
                    </div>
                </div>

                <div className="absolute bottom-0 left-4 -mb-6 bg-white rounded-full p-2 shadow-lg">
                    <div className="w-12 h-12 rounded-full border-4 border-blue-500 flex items-center justify-center">
                        <span className="text-sm font-medium">{percentComplete}%</span>
                    </div>
                </div>

                {(isFeatured || isGoalReached) && (
                    <div className="absolute top-3 right-3">
                        <div className={`rounded-full px-3 py-1 text-sm ${isGoalReached ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
                            }`}>
                            {isGoalReached ? 'GOAL REACHED' : '⚡ FEATURED'}
                        </div>
                    </div>
                )}
            </div>

            <div className="p-4 pt-8">
                <h3 className="text-lg font-semibold mb-4 line-clamp-2 h-14">{title}</h3>

                <button className="w-full mb-4 border border-blue-500 text-blue-500 rounded-lg py-2 px-4 flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors">
                    Update Campaign
                    <Edit size={16} />
                </button>

                <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                        <div className="text-gray-500">Raised</div>
                        <div className="font-semibold">${raised.toLocaleString()}</div>
                    </div>
                    <div>
                        <div className="text-gray-500">Goals</div>
                        <div className="font-semibold">${goal.toLocaleString()}</div>
                    </div>
                    <div>
                        <div className="text-gray-500">Left</div>
                        <div className="font-semibold">${amountLeft.toLocaleString()}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function CrowdFunding() {
    const [activeTab, setActiveTab] = useState('all');

    const campaigns = [
        {
            daysLeft: 74,
            supporters: '22K',
            image: '/api/placeholder/400/300',
            title: 'Construction of the Ar-Rahmat Mosque in North Gambia',
            raised: 150512,
            goal: 200000,
            percentComplete: 75,
            isFeatured: true,
            isGoalReached: false,
            status: 'active'
        },
        {
            daysLeft: 6,
            supporters: '40K',
            image: '/api/placeholder/400/300',
            title: 'Building a Decent School for Children in Cellevon Village',
            raised: 252215,
            goal: 250000,
            percentComplete: 100,
            isFeatured: false,
            isGoalReached: true,
            status: 'completed'
        },
        {
            daysLeft: 23,
            supporters: '10K',
            image: '/api/placeholder/400/300',
            title: 'Help Steven Conor Fight to Survive Liver Cancer',
            raised: 80212,
            goal: 100000,
            percentComplete: 80,
            isFeatured: true,
            isGoalReached: false,
            status: 'active'
        },
        {
            daysLeft: 0,
            supporters: '3K',
            image: '/api/placeholder/400/300',
            title: 'Give Clean Water To Developing Communities',
            raised: 5212,
            goal: 48000,
            percentComplete: 17,
            isFeatured: false,
            isGoalReached: false,
            status: 'closed'
        },
        {
            daysLeft: -1,
            supporters: '1K',
            image: '/api/placeholder/400/300',
            title: 'Draft Campaign for Community Center',
            raised: 0,
            goal: 75000,
            percentComplete: 0,
            isFeatured: false,
            isGoalReached: false,
            status: 'draft'
        }
    ];

    const tabs = [
        { id: 'all', label: 'All Campaigns', icon: FileText },
        { id: 'completed', label: 'Goal Reached', icon: Target },
        { id: 'active', label: 'Goal Unreached', icon: Flag },
        { id: 'closed', label: 'Closed', icon: Clock },
        { id: 'draft', label: 'Draft', icon: File }
    ];

    const filteredCampaigns = campaigns.filter(campaign => {
        switch (activeTab) {
            case 'completed':
                return campaign.isGoalReached;
            case 'active':
                return !campaign.isGoalReached && campaign.status === 'active';
            case 'closed':
                return campaign.status === 'closed';
            case 'draft':
                return campaign.status === 'draft';
            default:
                return true;
        }
    });

    const groupedCampaigns = filteredCampaigns.reduce((acc, campaign, index) => {
        const rowIndex = Math.floor(index / 2);
        if (!acc[rowIndex]) {
            acc[rowIndex] = [];
        }
        acc[rowIndex].push(campaign);
        return acc;
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
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

            {/* Campaign Grid */}
            <div className="space-y-6">
                {groupedCampaigns.map((row, rowIndex) => (
                    <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {row.map((campaign, colIndex) => (
                            <div key={colIndex} className="w-full">
                                <CampaignCard {...campaign} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};


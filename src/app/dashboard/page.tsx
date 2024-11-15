"use client";

import React, { useState } from "react";
import { Sidebar } from "../components/sidebar";
import { Navbar } from "../components/navbar";
import dynamic from 'next/dynamic';

const VerticalFarms = dynamic(() => import("./verticalFarm"));
const Portfolio = dynamic(() => import("./portfolio"));
const HomeGrown = dynamic(() => import("./homeGrown"));
const Agents = dynamic(() => import("./agents"));
const Blog = dynamic(() => import("./blog/page"));
const CrowdFunding = dynamic(() => import("./crowdFunding"));
const BlogPage = dynamic(() => import("./blog/blogPage"));

interface BlogData {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  description: string;
}

export default function Dashboard() {
    const [selectedScreen, setSelectedScreen] = useState<string>("Portfolio");
    const [blogData, setBlogData] = useState<BlogData | null>(null);

    const handleBackToBlog = () => {
        setSelectedScreen("Blog");
        setBlogData(null);
    };

    const screenComponents = {
        Portfolio: <Portfolio />,
        VerticalFarms: <VerticalFarms />,
        HomeGrown: <HomeGrown />,
        CrowdFunding: <CrowdFunding />,
        Blog: (
            <Blog 
                onBlogSelect={(data: BlogData) => {
                    setBlogData(data);
                    setSelectedScreen("BlogPage");
                }}
            />
        ),
        BlogPage: blogData ? (
            <BlogPage 
                blog={blogData} 
                onBack={handleBackToBlog}
            />
        ) : null,
        Agents: <Agents />,
        home: null,
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar setSelectedScreen={setSelectedScreen} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar />
                <div className="p-4 flex-1 overflow-auto">
                    {screenComponents[selectedScreen as keyof typeof screenComponents]}
                </div>
            </div>
        </div>
    );
}
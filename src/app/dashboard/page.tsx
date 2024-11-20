"use client";

import React, { useState } from "react";
import { Sidebar } from "../components/sidebar";
import { Navbar } from "../components/navbar";
import dynamic from 'next/dynamic';
import { BlogData } from "../model/blogs";
import { useWallet } from '../hooks/useWallet'; // Import your custom hook
const VerticalFarms = dynamic(() => import("./verticalFarm"), { ssr: false });
const Portfolio = dynamic(() => import("./portfolio"), { ssr: false });
const HomeGrown = dynamic(() => import("./homeGrown"), { ssr: false });
const Agents = dynamic(() => import("./agents"), { ssr: false });
const Blog = dynamic(() => import("./blog/page"), { ssr: false });
const CrowdFunding = dynamic(() => import("./crowdFunding"), { ssr: false });
const BlogPage = dynamic(() => import("./blog/blogPage"), { ssr: false });



export default function Dashboard() {
    const { walletAddress, networkError, ensName, connectWallet } = useWallet(); // Use the custom hook
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
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
                rel="stylesheet"
            />
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
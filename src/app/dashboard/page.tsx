


"use client";
import React, { useState } from "react";
import { Sidebar } from "../components/sidebar"; // Assuming Sidebar is in a separate file
import { Navbar } from "../components/navbar"; // Assuming Navbar is in a separate file
import VerticalFarms from "./verticalFarm";
import Portfolio from "./portfolio";
import HomeGrown from "./homeGrown";
import Agents from "./agents";
import Blog from "./blog";
import CrowdFunding from "./crowdFunding";


export default function Dashboard () {
    const [selectedScreen, setSelectedScreen] = useState("home"); // Default screen

    return (
        <div className="flex">
            <Sidebar setSelectedScreen={setSelectedScreen} />
            <div className="flex-1">
                <Navbar />
                <div className="p-8">
                    {/* Render content based on selectedScreen */}
                    {selectedScreen === "Portfolio" && <Portfolio/>}
                    {selectedScreen === "VerticalFarms" && <VerticalFarms/>}
                    {selectedScreen === "HomeGrown" && <HomeGrown/>}
                    {selectedScreen === "CrowdFunding" && <CrowdFunding/>}
                    {selectedScreen === "Blog" && <Blog/>}
                    {selectedScreen === "Agents" && <Agents/>}
                </div>
            </div>
        </div>
    );
};


"use client";

import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import CommentsSection from './comments';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  description: string;
}

interface BlogPageProps {
  blog: BlogPost;
  onBack?: () => void; // Add onBack prop
}

const BlogPage: React.FC<BlogPageProps> = ({ blog, onBack }) => {
  const navigation = [
    { title: 'Introduction', href: '#' },
    { title: 'Cameras and tools', href: '#' },
    { title: 'How you work', href: '#' },
    { title: 'Advice for photographers', href: '#' },
    { title: "What's next?", href: '#' }
  ];

  const author = {
    name: 'Amélie Laurent',
    role: 'Designer, Craft+Curiosity',
    avatar: '/profile.png'
  };

 


 
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center text-[10px] gap-2 text-gray-600 hover:text-main mb-8 transition-colors duration-200 group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
        <span>Back to Blogs</span>
      </button>
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <div className="lg:w-2/3">
          {/* Article Text */}
          <p className="text-gray-700 mb-6 text-xs w-4/5">
            Incidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat.
          </p>
          
          {/* Featured Image with Floating Avatars */}
          <div className="relative mb-8">
            <Image
            width={505}
            height={205} 
              src="/box-with-vegetables.jpg" 
              alt="Person working on laptop" 
              className="rounded-lg"
            />
          </div>

          {/* Quote Section */}
          <blockquote className="text-xl font-semibold text-gray-900 mb-8 w-4/5">
            In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear
          </blockquote>

          {/* Author Quote Attribution */}
          <div className="flex items-center gap-3 mb-8">
          <Image
            width={105}
            height={105}
              src={author.avatar} 
              alt={author.name}
             
            />
            <div className="text-gray-600 text-xs">
              {author.name}, Product Designer
            </div>
          </div>

          {/* Additional Content */}
          <p className="text-gray-700 mb-6 text-xs">
            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
          </p>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3">
         
    <CommentsSection/>
 

    <div className="p-6">
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Write a comment"
                className="w-full px-4 py-2 text-[10px] border border-gray-300 rounded-md"
              />
              <button className="w-full text-[12px] bg-main text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
               Add Comment
              </button>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
"use client";

import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

interface BlogPost {
  category: string;
  date: string;
  title: string;
  image: string;
  description: string;
}

interface RowProps {
  posts: BlogPost[];
  rowIndex: number;
}

const BlogRow: React.FC<RowProps> = ({ posts, rowIndex }) => (
  <div className="flex space-x-6 overflow-x-auto pb-2 hide-scrollbar">
    {posts.map((post, postIndex) => (
      <div 
        key={`${rowIndex}-${postIndex}`} 
        className="flex-none w-[250px] bg-white rounded-lg shadow-md"
      >
        <div className="relative">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-[120px] object-cover rounded-t-lg"
          />
          <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded text-xs font-medium">
            {post.category}
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-gray-500 text-xs mb-2">{post.date}</p>
          <h3 className="text-sm font-semibold mb-3 text-gray-800">{post.title}</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-3">{post.description}</p>
          
          <div className="flex justify-between items-center">
            <div className="flex space-x-3">
              <Facebook className="w-3 h-3 text-gray-600 hover:text-gray-800" />
              <Linkedin className="w-3 h-3 text-gray-600 hover:text-gray-800" />
              <Instagram className="w-3 h-3 text-gray-600 hover:text-gray-800" />
            </div>
            <button className="text-gray-600 text-[10px] font-medium hover:text-gray-800 uppercase">
              Read More
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = Array(12).fill({
    category: 'Health Blog',
    date: 'January 02,2020',
    title: 'Corona vaious is dangerous,stay away fom it.',
    image: '/box-with-vegetables.jpg',
    description: 'There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'
  });

  const chunkArray = (arr: BlogPost[], size: number): BlogPost[][] => {
    return arr.reduce((chunks: BlogPost[][], item: BlogPost, index: number) => {
      const rowIndex = index % size;
      if (!chunks[rowIndex]) chunks[rowIndex] = [];
      chunks[rowIndex].push(item);
      return chunks;
    }, []);
  };

  const rows = chunkArray(blogPosts, 3);

  return (
    <div className="container mx-auto px-2 py-4">
      <div className="grid grid-rows-3 gap-6 h-full">
        {rows.map((row, rowIndex) => (
          <BlogRow key={rowIndex} posts={row} rowIndex={rowIndex} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
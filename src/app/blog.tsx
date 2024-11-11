import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const BlogCards = () => {
  const blogPosts = Array(12).fill({
    category: 'Lettuce Blog',
    date: 'January 02,2020',
    title: 'Planting onions or Carrots require 21 days.',
    image: '/box-with-vegetables.jpg',
    description: 'There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'
  });

  // Function to chunk array into rows of 3
  const chunkArray = (arr:any, size:any) => {
    return arr.reduce((chunks:any, item:any, index:any) => {
      const rowIndex = index % size;
      if (!chunks[rowIndex]) chunks[rowIndex] = [];
      chunks[rowIndex].push(item);
      return chunks;
    }, []);
  };

  const rows = chunkArray(blogPosts, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-rows-3 gap-6 h-full">
        {rows.map((row:any, rowIndex:any) => (
          <div key={rowIndex} className="flex space-x-6 overflow-x-auto pb-2 hide-scrollbar">
            {row.map((post:any, postIndex:any) => (
              <div 
                key={`${rowIndex}-${postIndex}`} 
                className="flex-none w-[300px] bg-white rounded-lg shadow-md"
              >
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-[150px] object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-500 text-xs mb-2">{post.date}</p>
                  <h3 className="text-sm font-semibold mb-3 text-gray-800">{post.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-3">{post.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <Facebook className="w-3 h-5 text-gray-600 hover:text-gray-800" />
                      <Linkedin className="w-3 h-5 text-gray-600 hover:text-gray-800" />
                      <Instagram className="w-3 h-5 text-gray-600 hover:text-gray-800" />
                    </div>
                    <button className="text-gray-600 text-xs font-medium hover:text-gray-800 uppercase">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
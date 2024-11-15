// blog/page.tsx
"use client";

import React, { useMemo } from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';
import { BlogCardProps, BlogPost, BlogProps } from '@/app/model/blogs';



const BlogCard: React.FC<BlogCardProps> = ({ post, index, onSelect }) => (
  <div className="flex-none w-[250px] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="relative">
      <Image
        src={post.image}
        alt={post.title}
        width={250}
        height={120}
        className="w-full h-[120px] object-cover rounded-t-lg"
        priority={index < 3}
      />
      <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded text-xs font-medium">
        {post.category}
      </div>
    </div>
    <div className="p-6">
      <time className="text-gray-500 text-xs mb-2">{post.date}</time>
      <h3 className="text-sm font-semibold mb-3 text-gray-800 line-clamp-2">{post.title}</h3>
      <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-3">{post.description}</p>
      <div className="flex justify-between items-center">
        <div className="flex space-x-3">
          <button className="hover:scale-110 transition-transform" aria-label="Share on Facebook">
            <Facebook className="w-3 h-3 text-gray-600 hover:text-gray-800" />
          </button>
          <button className="hover:scale-110 transition-transform" aria-label="Share on LinkedIn">
            <Linkedin className="w-3 h-3 text-gray-600 hover:text-gray-800" />
          </button>
          <button className="hover:scale-110 transition-transform" aria-label="Share on Instagram">
            <Instagram className="w-3 h-3 text-gray-600 hover:text-gray-800" />
          </button>
        </div>
        <button
          onClick={() => onSelect(post)}
          className="text-gray-600 text-[10px] font-medium hover:text-gray-800 uppercase transition-colors"
        >
          Read More
        </button>
      </div>
    </div>
  </div>
);

interface RowProps {
  posts: BlogPost[];
  rowIndex: number;
  onSelect: (data: BlogPost) => void;
}

const BlogRow: React.FC<RowProps> = React.memo(({ posts, rowIndex, onSelect }) => (
  <div className="flex space-x-6 overflow-x-auto pb-2 scrollbar-hide">
    {posts.map((post, postIndex) => (
      <BlogCard
        key={`${rowIndex}-${postIndex}`}
        post={post}
        index={rowIndex * posts.length + postIndex}
        onSelect={onSelect}
      />
    ))}
  </div>
));

BlogRow.displayName = 'BlogRow';

// Update Blog component to use BlogProps
const Blog: React.FC<BlogProps> = ({ onBlogSelect }) => {
  const blogPosts: BlogPost[] = useMemo(() => Array(12).fill({
    id: 0,
    category: 'Health Blog',
    date: 'January 02, 2020',
    title: 'Coronavirus is dangerous, stay away from it.',
    image: '/box-with-vegetables.jpg',
    description: 'There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'
  }).map((post, index) => ({ ...post, id: index })), []);

  const rows = useMemo(() => {
    const chunkSize = 3;
    return Array.from({ length: Math.ceil(blogPosts.length / chunkSize) }, (_, i) =>
      blogPosts.slice(i * chunkSize, i * chunkSize + chunkSize)
    );
  }, [blogPosts]);

  return (
    <div className="container mx-auto px-2 py-4">
      <div className="grid grid-rows-3 gap-6 h-full">
        {rows.map((row, rowIndex) => (
          <BlogRow
            key={rowIndex}
            posts={row}
            rowIndex={rowIndex}
            onSelect={onBlogSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
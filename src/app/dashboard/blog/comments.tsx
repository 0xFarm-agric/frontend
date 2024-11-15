import React, { useState } from 'react';
import { MessageCircle, ThumbsUp, ThumbsDown, Reply, ChevronDown } from 'lucide-react';

const CommentsSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "/profile.png",
      content: "This is really helpful! Thanks for sharing your insights on this topic.",
      votes: 12,
      timeAgo: "2h ago",
      isVerified: true,
      isExpanded: false,
      replies: [
        {
          id: 101,
          author: "John Doe",
          avatar: "/profile.png",
          content: "Completely agree with your point Sarah!",
          votes: 5,
          timeAgo: "1h ago",
        }
      ]
    },
    {
      id: 2,
      author: "Mike Chen",
      avatar: "/profile.png",
      content: "I have a different perspective on this. While I agree with most points, I think we should also consider...",
      votes: 8,
      timeAgo: "4h ago",
      isVerified: false,
      isExpanded: false,
      replies: []
    },
    {
      id: 3,
      author: "Emma Wilson",
      avatar: "/profile.png",
      content: "Great discussion everyone! I'd love to add that...",
      votes: 15,
      timeAgo: "5h ago",
      isVerified: true,
      isExpanded: false,
      replies: []
    }
  ]);

  const [newReply, setNewReply] = useState("");
  const [activeReplyId, setActiveReplyId] = useState(0);

  const handleVote = (commentId:number, isUpvote:Boolean) => {
    setComments(prevComments => {
      const updatedComments = prevComments.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            votes: comment.votes + (isUpvote ? 1 : -1)
          };
        }
        return comment;
      });
      
      // Sort comments by votes in descending order
      return [...updatedComments].sort((a, b) => b.votes - a.votes);
    });
  };

  const toggleReplies = (commentId:Number) => {
    setComments(prevComments =>
      prevComments.map(comment =>
        comment.id === commentId
          ? { ...comment, isExpanded: !comment.isExpanded }
          : comment
      )
    );
  };

  const handleReplySubmit = (commentId:Number, event:any) => {
    event.preventDefault();
    if (!newReply.trim()) return;

    setComments(prevComments =>
      prevComments.map(comment =>
        comment.id === commentId
          ? {
              ...comment,
              replies: [
                ...comment.replies,
                {
                  id: Date.now(),
                  author: "Current User",
                  avatar: "/api/placeholder/40/40",
                  content: newReply,
                  votes: 0,
                  timeAgo: "Just now"
                }
              ]
            }
          : comment
      )
    );

    setNewReply("");
    setActiveReplyId(0);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-bold text-gray-900 text-[12px]">Comments</h2>
        <span className="text-gray-500 text-[10px]">{comments.length} comments</span>
      </div>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={comment.avatar}
                  alt={`${comment.author}'s avatar`}
                />
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-900 text-[10px]">{comment.author}</span>
                  {comment.isVerified && (
                    <svg className="w-4 h-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                  <span className="text-[10px] text-gray-500">{comment.timeAgo}</span>
                </div>
                
                <p className="mt-1 text-gray-700 text-[10px]">{comment.content}</p>
                
                <div className="mt-2 flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => handleVote(comment.id, true)}
                      className="text-gray-500 text-[10px] hover:text-green-600"
                    >
                      <ThumbsUp className="w-4 h-4" />
                    </button>
                    <span className="font-medium text-[10px]">{comment.votes}</span>
                    <button 
                      onClick={() => handleVote(comment.id, false)}
                      className="text-[10px] text-gray-500 hover:text-red-600"
                    >
                      <ThumbsDown className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => setActiveReplyId(activeReplyId === comment.id ? 0 : comment.id)}
                    className="flex items-center text-gray-500 hover:text-gray-700 text-[10px]"
                  >
                    <Reply className="w-4 h-4 mr-1" />
                    <span className="text-[10px]">Reply</span>
                  </button>
                  
                  <button 
                    onClick={() => toggleReplies(comment.id)}
                    className="flex items-center text-[10px] text-gray-500 hover:text-gray-700"
                  >
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span className="text-[10px]">{comment.replies.length} replies</span>
                    <ChevronDown 
                      className={`w-4 h-4 text-[10px] ml-1 transform transition-transform ${
                        comment.isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Reply Form */}
            {activeReplyId === comment.id && (
              <form 
                onSubmit={(e) => handleReplySubmit(comment.id, e)}
                className="mt-4 ml-14"
              >
                <textarea
                  value={newReply}
                  onChange={(e) => setNewReply(e.target.value)}
                  className="w-full text-[10px] p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Write a reply..."
                  rows= {0}
                />
                <div className="mt-2 text-[10px] flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setActiveReplyId(0)}
                    className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-[10px] bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Reply
                  </button>
                </div>
              </form>
            )}

            {/* Nested Replies Accordion */}
            {comment.isExpanded && comment.replies.length > 0 && (
              <div className="mt-4 ml-14 space-y-4">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8 text-[10px] rounded-full"
                        src={reply.avatar}
                        alt={`${reply.author}'s avatar`}
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-[10px] text-gray-900">{reply.author}</span>
                        <span className="text-sm text-[10px] text-gray-500">{reply.timeAgo}</span>
                      </div>
                      <p className="mt-1 text-gray-700">{reply.content}</p>
                      <div className="mt-2 flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <button className="text-gray-500 text-[10px] hover:text-green-600">
                            <ThumbsUp className="w-1 h-1" />
                          </button>
                          <span className="text-sm font-medium">{reply.votes}</span>
                          <button className="text-gray-500 text-[10px] hover:text-red-600">
                            <ThumbsDown className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
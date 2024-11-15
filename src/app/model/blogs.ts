
  
 export interface BlogProps {
    onBlogSelect: (data: BlogPost) => void;
    }
  
 export interface BlogCardProps {
    post: BlogPost;
    index: number;
    onSelect: (data: BlogPost) => void;
    }

export interface BlogPost {
        id: number;
        title: string;
        date: string;
        category: string;
        image: string;
        description: string;
    }
      
export interface BlogPageProps {
        blog: BlogPost;
        onBack?: () => void; // Add onBack prop
    }

export    interface BlogData {
        id: number;
        title: string;
        date: string;
        category: string;
        image: string;
        description: string;
      }
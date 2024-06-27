import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Mock API call to fetch blog posts
    const fetchPosts = async () => {
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">Welcome to My Blog</h1>
        <p className="text-center">
          This is the homepage of my blog. Navigate to the blog posts section to read more.
        </p>
      </div>
      <div className="mt-8 w-full max-w-2xl">
        {posts.map((post) => (
          <Card key={post.id} className="mb-4">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{post.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;
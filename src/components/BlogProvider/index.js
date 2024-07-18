import React, { createContext, useState, useEffect } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-06-18&sortBy=publishedAt&apiKey=7a470b3492d04d768d406efdbb22cba9')
      .then((response) => response.json())
      .then((data) => {
        setBlogList(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching the blog posts:', error);
        setLoading(false);
      });
  }, []);

  return (
    <BlogContext.Provider value={{ blogList, loading }}>
      {children}
    </BlogContext.Provider>
  );
};

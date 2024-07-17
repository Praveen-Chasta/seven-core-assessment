import { useState, useEffect } from "react";
import BlogPostItem from '../BlogPostItem'

function BlogPostList () {
  
  const [blogList, setBlogList] = useState([])
  
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-06-17&sortBy=publishedAt&apiKey=7a470b3492d04d768d406efdbb22cba9')
      .then((response) => response.json())
      .then((data) => {
        setBlogList(data.articles);
      })
      .catch((error) => {
        console.error('Error fetching the blog posts:', error);
      });
  }, []);

  return(
    <>
     {blogList.map((blog, index) => (
        <BlogPostItem
          key={index}
          title={blog.title}
          description={blog.description}
          author={blog.author}
          publishedAt={blog.publishedAt}
          url={blog.url}
          urlToImage={blog.urlToImage}
        />
      ))}
    </>
  )
}

export default BlogPostList
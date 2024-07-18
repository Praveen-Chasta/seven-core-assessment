import { useContext } from 'react';
import { BlogContext } from '../BlogProvider';
import BlogPostItem from '../BlogPostItem';
import { Link } from 'react-router-dom';

function BlogPostList() {
  const { blogList, loading } = useContext(BlogContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {blogList.map((blog, index) => (
        <Link
          to={`/post/${index}`}
          key={index}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <BlogPostItem
            title={blog.title}
            description={blog.description}
            author={blog.author}
            publishedAt={blog.publishedAt}
            url={blog.url}
            urlToImage={blog.urlToImage}
          />
        </Link>
      ))}
    </>
  );
}

export default BlogPostList;

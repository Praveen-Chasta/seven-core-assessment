import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { BlogContext } from '../BlogProvider';
import './index.css'; 

function BlogPostDetails() {
  const { id } = useParams();
  const { blogList } = useContext(BlogContext);
  const post = blogList[id];

  if (!post) {
    return <div>Loading...</div>;
  }


  return (
    <div className='container detailed-container'>
      <div className='row'>
          <div className='col-lg-12'>
               <div className='row'>
                   <div className='col-lg-6 p-0'>
                       <img src={post.urlToImage} alt={post.title} className='detailed-img' />
                   </div>
                   <div className='col-lg-6 p-4'>
                        <h1>{post.title}</h1>
                        <p>{post.description}</p>
                        <p><strong>Author:</strong> {post.author}</p>  
                        <p><strong>Published At:</strong> {new Date(post.publishedAt).toLocaleDateString()}</p>
                        <a href={post.url} className="anchor-element">Read More</a>
                   </div>
               </div>
          </div>
      </div>
    </div>
  );
}

export default BlogPostDetails;

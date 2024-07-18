import './index.css';

function BlogPostItem({ title, description, author, publishedAt, urlToImage, url }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="row mb-5 mt-5 blog-bg-color">
            <div className="col-lg-8 col-md-6 col-sm-12 mb-5 detail-container">
              <h1 className="title">{title}</h1>
              <p className="teaser-text">{description}</p>
              <p className="teaser-text"><strong>Author:</strong> {author}</p>
              <p className="teaser-text"><strong>Published At:</strong> {new Date(publishedAt).toLocaleDateString()}</p>
              <a href={url} className="anchor-element">Read More</a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 image-container">
              {urlToImage && <img src={urlToImage} alt={title} className="img-fluid fixed-image" />}
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default BlogPostItem;

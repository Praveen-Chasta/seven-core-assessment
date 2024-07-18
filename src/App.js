import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetails from './components/BlogPostDetails';
import { BlogProvider } from './components/BlogProvider';

function App() {
  return (
    <BlogProvider>
      <Router>
        <Routes>
          <Route path='/' element={<BlogPostList />} />
          <Route path='/post/:id' element={<BlogPostDetails />} />
        </Routes>
      </Router>
    </BlogProvider>
  );
}

export default App;

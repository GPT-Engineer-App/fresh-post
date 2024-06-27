import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import BlogPosts from "./pages/BlogPosts.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/blog-posts" element={<BlogPosts />} />
      </Routes>
    </Router>
  );
}

export default App;
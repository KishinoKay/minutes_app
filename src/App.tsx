import { Routes, Route, Link } from 'react-router-dom';
import Load from './pages/LoadingPage';
import Result from './pages/ResultPage';
import Upload from './pages/UploadPage';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Upload</Link> | <Link to="/Load">Load</Link> | <Link to="/Load/Result">Result</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Upload />} />
        <Route path="/Load" element={<Load />} />
        <Route path="/Load/Result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
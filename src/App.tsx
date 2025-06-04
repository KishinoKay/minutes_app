import { Routes, Route} from 'react-router-dom';
import Load from './pages/LoadingPage';
import Result from './pages/ResultPage';
import Upload from './pages/UploadPage';
//gimini-apiKey
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Upload />} />
        <Route path="/Load" element={<Load />} />
        <Route path="/Load/Result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
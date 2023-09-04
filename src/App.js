import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dragons from './components/Dragons';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="dragons" element={<Dragons />} />
      </Routes>
    </>
  );
}

export default App;

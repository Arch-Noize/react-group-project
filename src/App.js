import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RocketsList from './components/RocketList';
import DragonsPage from './components/Dragons';
import MissionsPage from './pages/MissionsPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="rockets" element={<RocketsList />} />
        <Route path="dragons" element={<DragonsPage />} />
        <Route path="missions" element={<MissionsPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;

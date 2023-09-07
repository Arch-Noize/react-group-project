import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RocketsPage from './pages/RocketsPage';
import DragonsPage from './components/Dragons';
import MissionsPage from './pages/MissionsPage';
import ProfilePage from './pages/ProfilePage';
import { getMissions } from './redux/mission/missionSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="rockets" element={<RocketsPage />} />
        <Route path="dragons" element={<DragonsPage />} />
        <Route path="missions" element={<MissionsPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;

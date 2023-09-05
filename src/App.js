import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDragons } from './redux/dragons/dragonSlice';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RocketsPage from './pages/RocketsPage';
import DragonsPage from './components/Dragons';
import MissionsPage from './pages/MissionsPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDragons());
  });
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

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RocketsPage from './pages/RocketsPage';
import DragonsPage from './pages/DragonsPage';
import MissionsPage from './pages/MissionsPage';
import ProfilePage from './pages/ProfilePage';

function App() {
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

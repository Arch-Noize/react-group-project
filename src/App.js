import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import SpaceNavbar from './components/Navbar';
import RocketsList from './components/RocketList';
import Dragons from './components/Dragons';
import { getDragons } from './redux/dragons/dragonSlice';
import Missions from './components/Missions';
import Profile from './components/Profile';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDragons());
  }, []);

  return (
    <>
      <SpaceNavbar />
      <Routes>
        <Route path="rockets" element={<RocketsList />} />
        <Route path="dragons" element={<Dragons />} />
        <Route path="missions" element={<Missions />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;

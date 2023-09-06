import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/mission/missionSlice';
import '../styles/Missions.module.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  return (
    <div>
      <header>
        <h4>Mission</h4>
        <h4 id="description">Description</h4>
        <h4>Status</h4>
        <h4>Join</h4>
      </header>
      <h3 id="missions">
        {missions.map((mission) => (
          <li key={mission.id}>
            <h2>{mission.name}</h2>
            <p>{mission.description}</p>
            <button type="button">Join </button>
          </li>
        ))}
      </h3>
    </div>
  );
};

export default Missions;

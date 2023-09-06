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
    <h3 id="missions">
      {missions.map((mission) => (
        <li key={mission.id}>
          <h2>{mission.name}</h2>
          <p>{mission.description}</p>
          <button type="button">Join </button>
        </li>
      ))}
    </h3>
  );
};

export default Missions;

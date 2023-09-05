import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/mission/missionSlice';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <h3>
      {missions.map((mission) => (
        <li key={mission.id}>
          <h3>Mission</h3>
          <h2>{mission.name}</h2>
          <h3>Description</h3>
          <p>{mission.description}</p>
          <p>Mission status</p>
          <p>Join status</p>
        </li>
      ))}
    </h3>
  );
};

export default Missions;

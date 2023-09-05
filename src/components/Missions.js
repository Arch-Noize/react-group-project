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
          <h4>{mission.name}</h4>
          <p>{mission.description}</p>
        </li>
      ))}
    </h3>
  );
};

export default Missions;

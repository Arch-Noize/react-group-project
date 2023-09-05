import React from 'react';
import { useSelector } from 'react-redux';

const Missions = () => {
  const missionState = useSelector((state) => state.missionsReducer);

  return (
    <h3>
      {missionState}
    </h3>
  );
};

export default Missions;

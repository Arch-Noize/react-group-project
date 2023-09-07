import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { missions } = useSelector((state) => state.missions);
  const { dragons } = useSelector((state) => state.dragons);
  const resDragons = dragons.filter((dragon) => dragon.reserved);
  const resMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="profile">
      <h2>Reserved Dragons</h2>
      <ul>
        {resDragons.map((dragon) => (
          <li key={dragon.id}>
            {dragon.name}
          </li>
        ))}
      </ul>
      <h2>Reserved Missions</h2>
      <ul>
        {resMissions.map((mission) => (
          <li key={mission.id}>
            {mission.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;

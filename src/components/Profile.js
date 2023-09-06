import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { dragons } = useSelector((state) => state.dragons);
  const resDragons = dragons.filter((dragon) => dragon.reserved);

  return (
    <>
      <h2>Reserved Dragons</h2>
      <ul>
        {resDragons.map((dragon) => (
          <li key={dragon.id}>
            {dragon.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Profile;

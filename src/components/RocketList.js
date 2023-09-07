import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  return (
    <>
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.name}
          images={rocket.flickr_images[0]}
          description={rocket.description}
          reserved={rocket.reserved}
        />
      ))}
    </>
  );
};

export default RocketList;

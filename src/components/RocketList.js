import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  console.log(rockets);

  return (
    <>
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          name={rocket.name}
          images={rocket.flickr_images[1]}
          description={rocket.description}
          reserved={rocket.reserved}
        />
      ))}
    </>
  );
};

export default RocketList;

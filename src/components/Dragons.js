import React from 'react';
import { useSelector } from 'react-redux';

const Dragons = () => {
  const dragons = useSelector((state) => state.dragons.dragons);
  console.log(dragons);

  return (
    <>
      <h3>
        Heres a list of dragons!
      </h3>
      <p>
        {dragons[1].id}
      </p>
      <p>
        {dragons[1].name}
      </p>
    </>
  );
};

export default Dragons;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/extensions
import { fetchRockets } from './redux/rockets/rocketSlice';

const RocketList = () => {
  const dispatch = useDispatch();
  useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  // Render your rocket list here, considering loading and error states

  return (
    <div>
      {/* Render your rocket list here */}
    </div>
  );
};

export default RocketList;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from './rocketActions';

const RocketList = () => {
  const dispatch = useDispatch();
  const { rockets, loading, error } = useSelector((state) => state.rockets);

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

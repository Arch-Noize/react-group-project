import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../redux/rockets/rocketSlice';

const RocketsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
      <h2>Rockets</h2>
      {/* <Rockets /> */}
    </div>
    /* Here add all your components needed for your tab or feature */
  );
};

export default RocketsPage;

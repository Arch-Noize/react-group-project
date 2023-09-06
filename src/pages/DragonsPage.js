import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getDragons } from '../redux/dragons/dragonSlice';
import Dragons from '../components/Dragons';

const DragonsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDragons());
  }, []);

  return (
    <div>
      <h2>Heres a list of dragons!</h2>
      <Dragons />
    </div>
  );
};

export default DragonsPage;

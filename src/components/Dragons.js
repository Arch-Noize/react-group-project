import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReservation, cancelReservation, getDragons } from '../redux/dragons/dragonSlice';
import styles from '../styles/Dragons.module.css';

const Dragons = () => {
  const dragons = useSelector((state) => state.dragons.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDragons());
  }, []);

  return (
    <>
      <ul className={styles.dragonCard}>
        {dragons.map((dragon) => (
          <li key={dragon.id} className={styles.dragonList}>
            {/* <img src={dragon.flickr_images[0]} alt="" className={styles.image} /> */}
            <h2>{dragon.name}</h2>
            <p>{dragon.desc}</p>
            {dragon.reserved ? (
              <button type="button" onClick={() => dispatch(cancelReservation(dragon.id))}>
                Cancel Dragon
              </button>
            ) : (
              <button type="button" onClick={() => dispatch(addReservation(dragon.id))}>
                Reserve Dragon
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dragons;

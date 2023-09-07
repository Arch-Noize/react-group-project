import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap/';
import { addReservation, cancelReservation } from '../redux/dragons/dragonSlice';
import styles from '../styles/Dragons.module.css';

const Dragons = () => {
  const dragons = useSelector((state) => state.dragons.dragons);
  const dispatch = useDispatch();

  return (
    <>
      <ul className={styles.dragonCard}>
        {dragons.map((dragon) => (
          <li key={dragon.id} className={styles.dragonList}>
            <img src={dragon.img} alt="" className={styles.image} />
            <h2>{dragon.name}</h2>
            <p>{dragon.type}</p>
            <p>{dragon.desc}</p>
            {dragon.reserved ? (
              <Button variant="outline-light" type="button" onClick={() => dispatch(cancelReservation(dragon.id))}>
                Cancel Dragon
              </Button>
            ) : (
              <Button variant="primary" type="button" onClick={() => dispatch(addReservation(dragon.id))}>
                Reserve Dragon
              </Button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dragons;

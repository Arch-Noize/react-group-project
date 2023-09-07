import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Row, Col, Button, Badge,
} from 'react-bootstrap/';
import { addReservation, cancelReservation } from '../redux/dragons/dragonSlice';
import styles from '../styles/Dragons.module.css';

const Dragons = () => {
  const dragons = useSelector((state) => state.dragons.dragons);
  const dispatch = useDispatch();

  return (
    <>
      <Container className={styles.dragonCard}>
        {dragons.map((dragon) => (
          <Row key={dragon.id} className={styles.dragonList}>
            <Col>
              <img src={dragon.img} alt="" className={styles.image} />
            </Col>
            <Col>
              <h2>{dragon.name}</h2>
              <p>{dragon.type}</p>
              {dragon.reserved ? (
                <>
                  <span>
                    <Badge bg="info">Reserved</Badge>
                  </span>
                  <p>{dragon.desc}</p>
                </>
              ) : (
                <p>{dragon.desc}</p>
              )}
              {dragon.reserved ? (
                <Button variant="outline-light" type="button" onClick={() => dispatch(cancelReservation(dragon.id))}>
                  Cancel Dragon
                </Button>
              ) : (
                <Button variant="primary" type="button" onClick={() => dispatch(addReservation(dragon.id))}>
                  Reserve Dragon
                </Button>
              )}
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default Dragons;

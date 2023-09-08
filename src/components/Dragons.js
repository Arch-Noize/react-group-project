import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Row, Col, Button, Badge,
} from 'react-bootstrap/';
import { addReservation, cancelReservation } from '../redux/dragons/dragonSlice';
import styles from '../styles/Cards.module.css';

const Dragons = () => {
  const dragons = useSelector((state) => state.dragons.dragons);
  const dispatch = useDispatch();

  return (
    <>
      <Container className={styles.card}>
        {dragons.map((dragon) => (
          <Row key={dragon.id} className={styles.list}>
            <Col>
              <img src={dragon.img} alt="" className={styles.image} />
            </Col>
            <Col>
              <h3>{dragon.name}</h3>
              <h5>
                Type:
                {' '}
                {dragon.type}
              </h5>
              {dragon.reserved ? (
                <>
                  <p>
                    <span className="mx-1">
                      <Badge bg="info">Reserved</Badge>
                    </span>
                    {dragon.desc}
                  </p>
                </>
              ) : (
                <p>{dragon.desc}</p>
              )}
              {dragon.reserved ? (
                <Button
                  variant="outline-dark"
                  type="button"
                  onClick={() => dispatch(cancelReservation(dragon.id))}
                >
                  Cancel Dragon
                </Button>
              ) : (
                <Button
                  variant="primary"
                  type="button"
                  style={{ color: '#fff' }}
                  onClick={() => dispatch(addReservation(dragon.id))}
                >
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

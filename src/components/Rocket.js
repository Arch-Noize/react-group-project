import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Container, Row, Col, Button, Badge,
} from 'react-bootstrap/';
import { reserveRocket, unReserveRocket } from '../redux/rockets/rocketSlice';
import styles from '../styles/Cards.module.css';

const Rocket = ({
  id, name, description, images, reserved,
}) => {
  const dispatch = useDispatch();
  const handleReserve = (id) => {
    dispatch(reserveRocket(id));
  };

  const handleUnReserve = (id) => {
    dispatch(unReserveRocket(id));
  };

  return (
    <>
      <Container className={styles.card}>
        <Row className={styles.list}>
          <Col>
            <img src={images} alt="" className={styles.image} />
          </Col>
          <Col>
            <h3>{name}</h3>
            <p>
              {reserved && (
              <span className="mx-1">
                <Badge bg="info">Reserved</Badge>
              </span>
              )}
              {description}
            </p>
            {reserved ? (
              <Button
                variant="outline-dark"
                type="button"
                onClick={() => {
                  handleUnReserve(id);
                }}
              >
                Cancel Reservation
              </Button>
            ) : (
              <Button
                variant="primary"
                type="button"
                style={{ color: '#fff' }}
                onClick={() => {
                  handleReserve(id);
                }}
              >
                Reserve Rocket
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default Rocket;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'react-bootstrap';
import { getMissions } from '../redux/mission/missionSlice';
import '../styles/Missions.module.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Join</th>
          </tr>
        </thead>
        {missions.map((mission) => (
          <tbody key={mission.id}>
            <tr>
              <td>{mission.name}</td>
              <td>{mission.description}</td>
              <td>{mission.status}</td>
              <Button>Join</Button>
            </tr>
          </tbody>
        ))}
      </Table>
    </>
  );
};

export default Missions;

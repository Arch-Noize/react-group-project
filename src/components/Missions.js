// Missions.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Button, Table } from 'react-bootstrap';
import { getMissions, joinMission, leaveMission } from '../redux/mission/missionSlice'; // You need to import these action functions.
import '../styles/Missions.module.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: '10%' }}>Mission</th>
            <th>Description</th>
            <th style={{ width: '15%' }}> </th>
            <th style={{ width: '15%' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission, index) => (
            <tr key={mission.id} className={index % 2 === 0 ? 'alternate-row' : ''}>
              <td style={{ fontWeight: '600' }}>{mission.name}</td>
              <td>{mission.description}</td>
              <td>
                {mission.reserved ? (
                  <>
                    <Badge bg="info">Active Member</Badge>
                  </>
                ) : (
                  <>
                    <Badge bg="secondary">NOT A MEMBER</Badge>
                  </>
                )}
              </td>
              <td>
                {mission.reserved ? (
                  <>
                    <Button variant="outline-danger" onClick={() => dispatch(leaveMission(mission.id))}>
                      Leave Mission
                    </Button>
                  </>
                ) : (
                  <Button variant="outline-dark" onClick={() => dispatch(joinMission(mission.id))}>
                    Join Mission
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Missions;

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
            <th style={{ width: '10%' }}>Mission</th>
            <th>Description</th>
            <th style={{ width: '10%' }}>Status</th>
            <th style={{ width: '15%' }}>Join</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission, index) => (
            <tr key={mission.id} className={index % 2 === 0 ? 'alternate-row' : ''}>
              <td>{mission.name}</td>
              <td>{mission.description}</td>
              <td>{mission.status}</td>
              <td>
                <div id="join">
                  <Button variant="outline-dark" className="join-button">Join Mission</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Missions;

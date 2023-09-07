import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';

const Profile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const resRockets = rockets.filter((rocket) => rocket.reserved);

  const { dragons } = useSelector((state) => state.dragons);
  const resDragons = dragons.filter((dragon) => dragon.reserved);

  const { missions } = useSelector((state) => state.missions);
  const resMissions = missions.filter((mission) => mission.reserved);

  const renderReservedItemsTable = (items, title) => (
    <div className="table">
      <h2>{title}</h2>
      <Table bordered hover>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );

  return (
    <div className="profile">
      <div className="table-container">
        {renderReservedItemsTable(resRockets, 'Reserved Rockets')}
        {renderReservedItemsTable(resDragons, 'Reserved Dragons')}
        {renderReservedItemsTable(resMissions, 'Reserved Missions')}
      </div>
    </div>
  );
};

export default Profile;

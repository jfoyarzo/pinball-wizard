/* eslint-disable react/prop-types */
import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';

const Location = (props) => {
  const { name, machineCount } = props;
  return (
    <div className="d-flex justify-content-between bg-primary">
      <span>{name}</span>
      <div>
        <span>
          Total Machines:
          {' '}
          {machineCount}
        </span>
        <BsArrowRightCircle />
      </div>
    </div>
  );
};

export default Location;

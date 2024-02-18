import React from 'react';
import { CarListContainer } from './CarList.styled'; 
import CarCard from 'components/CarCard/CarCard';
import PropTypes from 'prop-types';

const CarList = ({ data }) => {
  return (
    <CarListContainer>
      {data.map(car => {
        return <CarCard key={car.id} data={car} />;
      })}
    </CarListContainer>
  );
};

CarList.propTypes = {
  data: PropTypes.array,
};

export default CarList;
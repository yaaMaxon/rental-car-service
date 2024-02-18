import React from "react";
import PropTypes from "prop-types";
import {
  BtnClose,
  ModalContainer,
  ModalDiscretion,
  ModalSubTitle,
  ModalTitleWrapper,
  RentalConditions,
  RentalConditionsWrapper,
  BtnRental
} from './ModalContent.styled';
import NoCarImg from "../../../img/NoCarImg.webp";
import heart from "../../../img/svg/heart.svg";
import { 
    CardFeatureContainer, 
    FeatureContainer, 
    FirstLine, 
    SecondLine 
} from "components/CarCard/CarCard.styled";


const ModalContent = ({ data, handleClose }) => {
 const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,

    type,
    accessories,
    fuelConsumption,
    engineSize,
    description,
    functionalities,
    rentalConditions,
    mileage,
  } = data;
  const location = address.split(',');
  const country = location[2];
  const city = location[1];

  const conditions = rentalConditions.split('\n');
  const age = conditions[0].match(/\d+/);

  return (
    <ModalContainer>
      <BtnClose type="button" onClick={handleClose}>
        <svg width="18" height="18">
          <use href={heart + '#close'}></use>
        </svg>
      </BtnClose>
      <img
        src={img}
        onError={e => {
          e.target.src = NoCarImg;
        }}
        alt={make}
        width="461px"
        height="248px"
      />

      <ModalTitleWrapper>
        <h2>
          {make}
          <span> {model}</span>, {year}
        </h2>
      </ModalTitleWrapper>

      <CardFeatureContainer $marginBottom="14px">
        <FirstLine>
          <FeatureContainer>{city}</FeatureContainer>
          <span></span>
          <FeatureContainer>{country}</FeatureContainer>
          <span></span>
          <FeatureContainer>id: {id}</FeatureContainer>
          <span></span>
          <FeatureContainer>Year: {year}</FeatureContainer>
          <span></span>
          <FeatureContainer>Type: {type}</FeatureContainer>
        </FirstLine>
        <SecondLine>
          <FeatureContainer>
            Fuel Consumption: {fuelConsumption}
          </FeatureContainer>
          <span></span>
          <FeatureContainer>Engine Size: {engineSize}</FeatureContainer>
        </SecondLine>
      </CardFeatureContainer>
      <ModalDiscretion>{description}</ModalDiscretion>
      <ModalSubTitle>Accessories and functionalities:</ModalSubTitle>

      <CardFeatureContainer $marginBottom="24px">
        <FirstLine>
          {accessories.map(item => {
            return (
              <>
                <FeatureContainer>{item}</FeatureContainer>
                <span></span>
              </>
            );
          })}
        </FirstLine>
        <SecondLine>
          {functionalities.map(item => {
            return (
              <>
                <FeatureContainer>{item}</FeatureContainer>
                <span></span>
              </>
            );
          })}
        </SecondLine>
      </CardFeatureContainer>
      <ModalSubTitle>Rental Conditions: </ModalSubTitle>
      <RentalConditionsWrapper>
        <RentalConditions>
          Minimum age: <span> {age}</span>
        </RentalConditions>
        <RentalConditions>{conditions[1]}</RentalConditions>
        <RentalConditions>{conditions[2]}</RentalConditions>
        <RentalConditions>
          Mileage: <span>{mileage}</span>
        </RentalConditions>
        <RentalConditions>
          Price: <span>{rentalPrice}</span>
        </RentalConditions>
      </RentalConditionsWrapper>
      <BtnRental href="https://github.com/yaaMaxon">Rental car</BtnRental>
    </ModalContainer>
  )
}

ModalContent.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  handleClose: PropTypes.func,
};
export default ModalContent;
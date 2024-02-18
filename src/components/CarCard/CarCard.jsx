import React from "react";
import NoCarImg from '../../img/NoCarImg.webp';
import heart from '../../img/svg/heart.svg';
import { 
    CarCardContainer,
    ImgContainer,
    CardTitleContainer,
    CardFeatureContainer,
    FeatureContainer,
    FirstLine,
    SecondLine,
    BtnHeard,
    LearnMoreBtn 
} from "./CarCard.styled";
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from "react-redux";
import { addFavorite, deleteFavorite, openModal } from "../../redux/cars/slice";
import { selectFavorite } from "../../redux/cars/selectors";

const CarCard = ({ data }) => {
  const dispatch = useDispatch();

  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    accessories,

    mileage,
  } = data;

  const onClick = data => {
    dispatch(openModal(data));
  };
  const favoriteCars = useSelector(selectFavorite);

  const toggleFavorite = data => {
    if (favoriteCars.some(car => car.id === data.id)) {
      dispatch(deleteFavorite(data));
    } else {
      dispatch(addFavorite(data));
    }
  };
  const location = address.split(',');
  const country = location[2];
  const city = location[1];
  const feature = accessories[2];

    return (
        <CarCardContainer>
            <BtnHeard onClick={() => {
                toggleFavorite(data);
            }}>
                {favoriteCars.some(car => car.id === data.id) ? (
                 <svg width="18" height="18">
                  <use href={heart + '#active'}></use>
                </svg>
                ) : (
                 <svg width="18" height="18">
                  <use href={heart + '#normal'}></use>
                 </svg>
                )}
            </BtnHeard>
            <ImgContainer>
               <img 
               src={img}
               onError = { e => {
                e.target.src = NoCarImg;
               }}
               alt = { make }
               />
            </ImgContainer>
            <CardTitleContainer>
                <h2>
                    { make }
                    <span>{ model }</span>, 
                    { year }
                </h2>
                <h2>{ rentalPrice }</h2>
            </CardTitleContainer>
            <CardFeatureContainer>
                <FirstLine>
                    <FeatureContainer>{ city }</FeatureContainer>
                    <span></span>
                    <FeatureContainer>{ country }</FeatureContainer>
                    <span></span>
                    <FeatureContainer>{ rentalCompany }</FeatureContainer>
                </FirstLine>
                <SecondLine>
                    <FeatureContainer>{ type }</FeatureContainer>
                    <span></span>
                    <FeatureContainer>{ make }</FeatureContainer>
                    <span></span>
                    <FeatureContainer>{ mileage }</FeatureContainer>
                    <span></span>
                    <FeatureContainer>{ feature }</FeatureContainer>
                </SecondLine>
            </CardFeatureContainer>
            <LearnMoreBtn onClick={() => {
                onClick(data);
            }}>
                Learn more
            </LearnMoreBtn>
        </CarCardContainer>
    )
}

CarCard.propTypes = {
  data: PropTypes.object.isRequired,
};
export default CarCard;
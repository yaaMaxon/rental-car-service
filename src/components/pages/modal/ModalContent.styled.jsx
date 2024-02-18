import styled from "styled-components";
import { CardTitleContainer } from "components/CarCard/CarCard.styled";

export const BtnClose = styled.div`
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
  transition: all 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  svg {
    stroke: black;
  }
  &:hover {
    scale: 1.2;
  }
`;
export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  width: 541px;
  padding: 40px;
  border-radius: 24px;

  background-color: #fff;

  img {
    border-radius: 14px;
    margin-bottom: 14px;

    width: 461px;
    height: 248px;
    object-fit: cover;
  }
`;

export const ModalTitleWrapper = styled(CardTitleContainer)`
  margin-bottom: 8px;
  h2 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3;
  }
`;
export const ModalDiscretion = styled.p`
  color: #121417;

  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 24px;
`;

export const ModalSubTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 8px;
`;

export const RentalConditions = styled.p`
  display: flex;
  align-items: baseline;
  justify-content: baseline;
  padding: 7px 14px;

  font-family: Montserrat;
  font-size: 12px;

  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;

  border-radius: 35px;
  background: #f9f9f9;

  span {
    color: #3470FF;
    font-weight: 600;
  }
`;

export const RentalConditionsWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

export const BtnRental = styled.a`
    display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;

  font-size: 14px;
  line-height: 1.4;
  font-weight: 600;
  text-align: center;
  color: #FFF;

  padding: 14px 44px;

  outline: none;
  border: none;
  border-radius: 12px;
  background-color: #3470FF;

  transition: all 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    background-color: #0B44CD;
  }

  padding: 12px 50px;
  margin-right: auto;
`

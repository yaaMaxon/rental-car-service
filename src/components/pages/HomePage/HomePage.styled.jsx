import { styled } from "styled-components";

import bg_car_image from "../../../img/bg-image/bg-car-image.jpg";

export const HomeSection = styled.section`
  background-image: url(${bg_car_image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 0px;

  height: 100svh;
  width: 100%;

  h1 {
    position: absolute;
    top: 250px;
    left: 150px;
    margin-top: auto;
    color: #301201;
    font-size: 75px;
  }
`

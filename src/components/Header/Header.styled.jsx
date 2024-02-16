import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


export const HeaderWrap = styled.header`
  color: white;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;

  display: flex;
  gap: 17px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  padding: 17px 0px;
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const HeaderLink = styled(NavLink)`
  color: #301201;
  position: relative;
  font-size: 20px;
  line-height: 20px;
  font-weight: 600px;
  text-decoration: none;

  display: flex;
  align-items: center;

    &:hover {
    color: #99532d;
    transition: color 0.3s ease;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 0;
    height: 3px;
    border-radius: 10px;
    background-color: #99532d;
    transition: width 0.3s ease;
  }
  &:hover:before {
    width: 100%;
  }
  &.active {
    color: #99532d;
    transition: color 0.3s ease;
  }
  &.active:before {
    width: 100%;
  }
`

export const Logo = styled(Link)`
  color: #301201;
  cursor: pointer;
  font-size: 32px;
  text-decoration: none;
`
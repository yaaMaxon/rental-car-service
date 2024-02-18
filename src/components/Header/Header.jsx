import React from "react";
import { HeaderWrap, Navigation, HeaderLink, Logo } from "./Header.styled";
import Container from "components/Container/Container";
import { useLocation } from "react-router-dom";

const Header = () => {
   const location = useLocation();

    return (
   <HeaderWrap $location={location.pathname}>
     <Container>
        <Logo to="/">RENTCAR</Logo>
        <Navigation>
           <HeaderLink to={"/"}>HOME</HeaderLink>
           <HeaderLink to={"/catalog"}>OUR CATALOG</HeaderLink>
           <HeaderLink to={"/favorite"}>FAVORITE</HeaderLink>
        </Navigation>
     </Container>
   </HeaderWrap>
    );
};

export default Header;

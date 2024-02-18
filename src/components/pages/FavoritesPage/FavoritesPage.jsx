import React from "react";
import { useSelector } from "react-redux";
import { selectFavorite } from "../../../redux/cars/selectors";
import { CatalogSection, MainContent } from "../CatalogPage/CatalogPage.styled";
import Container from "components/Container/Container";
import CarList from "components/CarList/CarList";
import { Notice } from "./FavoritesPage.styled";

const FavoritesPage = () => {
    const favoriteCars = useSelector(selectFavorite);

    return (
      <CatalogSection>
        <Container>
            <MainContent>
                {Object.entries(favoriteCars).length ? (
                    <CarList data={favoriteCars}/>
                ) : (
                <Notice>
                   You don't have any favorite cars yet!
                </Notice>)}
            </MainContent>
        </Container>
      </CatalogSection>
    )
}

export default FavoritesPage;
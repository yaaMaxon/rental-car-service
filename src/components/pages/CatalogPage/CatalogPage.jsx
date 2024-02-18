import React, { useEffect, useState } from "react";
import { 
    CatalogSection, 
    FilterBar, 
    MainContent, 
    LoadMore, 
    BtnLoadMore 
} from "./CatalogPage.styled";
import Container from "components/Container/Container";

import FilterForm from "./FilterForm/FilterForm";
import { useDispatch, useSelector } from 'react-redux';
import { getAllThunk, getCarByPageThunk } from "../../../redux/cars/thunk";
import CarList from "components/CarList/CarList";
import { 
    selectOnFilter, 
    selectFilteredCars, 
    selectCarsPagination, 
    selectAllCars 
} from "../../../redux/cars/selectors";
import { clearData } from "../../../redux/cars/slice";
import { selectorIsLoading } from "../../../redux/root/selectors";
import { Loader } from "components/Loader/Loader";

const CatalogPage = () => {
  const dispatch = useDispatch();

  const onFilter = useSelector(selectOnFilter);
  const FilteredCars = useSelector(selectFilteredCars);
  const CarsPagination = useSelector(selectCarsPagination);
  const allCars = useSelector(selectAllCars);
  const isLoading = useSelector(selectorIsLoading);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(clearData());
    dispatch(getAllThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCarByPageThunk(page));
  }, [dispatch, page]);

  const loadMore = () => {
    if (allCars.length / 12 > page) {
      setPage(p => p + 1);
    }
  };

  const showLoadMore = allCars.length / 12 > page && !onFilter && !isLoading;
    return (
      <CatalogSection>
        {isLoading && <Loader/>}
        <Container>
            <FilterBar>
                <FilterForm/>
            </FilterBar>
            <MainContent>
              {onFilter && <CarList data={FilteredCars} />}
              {!onFilter && <CarList data={CarsPagination} />}
            </MainContent>
            <LoadMore>
              {showLoadMore && (
            <BtnLoadMore type="button" onClick={loadMore}>
              Load More
            </BtnLoadMore>
          )}
            </LoadMore>
        </Container>
      </CatalogSection>
    )
}

export default CatalogPage;
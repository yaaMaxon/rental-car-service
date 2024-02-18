import { createSelector } from '@reduxjs/toolkit';

export const selectFilterBrands = state => state.catalog.filter.brand;
export const selectFilterPrice = state => state.catalog.filter.price;
export const selectFilterFrom = state => state.catalog.filter.from;
export const selectFilterTo = state => state.catalog.filter.to;

export const selectAllCars = state => state.catalog.carsAll;
export const selectCarsPagination = state => state.catalog.carsPagination;
export const selectOnFilter = state => state.catalog.onFilter;
export const selectorDataForModal = state => state.catalog.dataForModal;
export const selectFavorite = state => state.catalog.favorite;

export const selectAllBrands = state => {
  const uniqueBrands = new Set(state.catalog.carsAll.map(car => car.make));
  const uniqueBrandsArray = Array.from(uniqueBrands);
  return uniqueBrandsArray;
};

export const selectFilteredCars = createSelector(
  [selectAllCars, selectOnFilter],
  (carsAll, onFilter) => {
    if (!onFilter) {
      return [];
    }
    const result = carsAll.filter(car => {
      if (onFilter.brand) {
        if (car.make !== onFilter.brand) {
          return false;
        }
      }
      if (onFilter.price) {
        const carPrice = Number(car.rentalPrice.split('').slice(1).join(''));
        const selectedPriceRange = Number(onFilter.price);
        if (carPrice > selectedPriceRange) {
          return false;
        }
      }

      if (onFilter.from) {
        if (car.mileage < onFilter.from) {
          return false;
        }
      }
      if (onFilter.to) {
        if (car.mileage > onFilter.to) {
          return false;
        }
      }

      return true;
    });
    return result;
  }
);

export const selectorFilteredBrands = createSelector(
  [selectAllBrands, selectFilterBrands],
  (AllBrands, FilterBrands) => {
    return AllBrands.filter(item => {
      return item
        .trim()
        .toLocaleLowerCase()
        .includes(FilterBrands.trim().toLocaleLowerCase());
    }).sort((a, b) => a - b);
  }
);

export const selectRangePrice = createSelector([selectAllCars], catalog => {
  let maxPrice = 0;
  const rangePrice = [];

  for (let index = 0; index < catalog.length; index++) {
    const currentPrice = Number(
      catalog[index].rentalPrice.split('').slice(1).join('')
    );
    if (maxPrice < currentPrice) {
      maxPrice = currentPrice;
    }
  }
  for (
    let number = 10;
    number <= Math.ceil(maxPrice / 10) * 10;
    number = number + 10
  ) {
    rangePrice.push(number);
  }

  return rangePrice;
});
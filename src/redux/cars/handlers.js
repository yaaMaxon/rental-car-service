export const handlerAllCars = (state, { payload }) => {
  state.carsAll = payload;
};

export const handlerCarByPage = (state, { payload }) => {
  state.carsPagination = [...state.carsPagination, ...payload];
};

export const handleOnFilter = (state, { payload }) => {
  state.onFilter = payload;
};
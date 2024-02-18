import { getAllThunk, getCarByPageThunk } from './thunk';
import { handleOnFilter, handlerAllCars, handlerCarByPage } from './handlers';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carsAll: [],
  carsPagination: [],
  currentPage: 1,
  filter: {
    brand: '',
    price: '',
    from: '',
    to: '',
  },
  onFilter: '',
  dataForModal: '',
  favorite: [],
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllThunk.fulfilled, handlerAllCars)
      .addCase(getCarByPageThunk.fulfilled, handlerCarByPage);
  },
  reducers: {
    setFilterBrand: (state, { payload }) => {
      state.filter.brand = payload;
    },
    setFilterPrice: (state, { payload }) => {
      state.filter.price = payload;
    },
    setFilterFrom: (state, { payload }) => {
      state.filter.from = payload;
    },
    setFilterTo: (state, { payload }) => {
      state.filter.to = payload;
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = state.currentPage + 1;
    },

    setOnFilter: handleOnFilter,

    closeModal(state) {
      state.dataForModal = '';
    },
    openModal(state, { payload }) {
      state.dataForModal = payload;
    },
    clearData(state, { payload }) {
      state.carsAll = [];
      state.carsPagination = [];
    },
    addFavorite(state, { payload }) {
      state.favorite.push(payload);
    },
    deleteFavorite(state, { payload }) {
      const indexDelete = state.favorite.findIndex(
        car => car.id === payload.id
      );
      state.favorite.splice(indexDelete, 1);
    },
  },
});

export const reducerCatalog = catalogSlice.reducer;
export const {
  closeModal,
  clearData,
  addFavorite,
  deleteFavorite,
  setFilterBrand,
  setCurrentPage,
  setOnFilter,
  setFilterPrice,
  setFilterFrom,
  setFilterTo,
  openModal,
} = catalogSlice.actions;
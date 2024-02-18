import { instance } from './auth';
import { data } from './data.js';

export const getAllCars = async () => {
  const { data } = await instance('/cars');
  return data;
};

export const getCarByPage = async page => {
  const { data } = await instance(`/cars?p=${page}&l=12`);
  return data;
};

export const postCar = async body => {
  const { data } = await instance.post('/cars', body);
  return data;
};

export const addData = () => {
  let time = 1000;
  for (let index = 0; index <= data.length; index++) {
    time = time + 1000;
    setTimeout(() => {
      postCar(data[index]);
    }, time);
  }
};
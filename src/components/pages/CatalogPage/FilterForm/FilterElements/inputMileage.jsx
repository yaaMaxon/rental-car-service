import React, { useEffect } from "react";
import { 
    LabelST, 
    InputBrandsST, 
    MileageContainer, 
    MileageInputWrapper 
} from "../FilterForm.styled";
import { useDispatch } from "react-redux";
import { setFilterFrom, setFilterTo } from "../../../../../redux/cars/slice";
import PropTypes from "prop-types";

const InputMileage = ({ values, setFieldValue }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilterFrom(values.from));
  }, [dispatch, values.from]);

  useEffect(() => {
    dispatch(setFilterTo(values.to));
  }, [dispatch, values.to]);

  const handleOnChange = e => {
    let { name, value } = e.target;
    value = value.trim().replace(/[^\d]/g, '');

    if (value === '') {
      setFieldValue(name, '');
      return;
    }

    const formattedValue = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(parseFloat(value.replace(/,/g, '')));

    setFieldValue(name, formattedValue);
    dispatch(name === 'from' ? setFilterFrom(value) : setFilterTo(value));
  };

  return (
    <LabelST>
      Сar mileage / km
      <MileageContainer>
        <MileageInputWrapper>
          <InputBrandsST
            className="left"
            autoComplete="off"
            type="text"
            name="from"
            value={values.from}
            onChange={handleOnChange}
          ></InputBrandsST>
          <span>From</span>
        </MileageInputWrapper>
        <MileageInputWrapper>
          <InputBrandsST
            className="right"
            autoComplete="off"
            type="text"
            name="to"
            value={values.to}
            onChange={handleOnChange}
          ></InputBrandsST>
          <span>To</span>
        </MileageInputWrapper>
      </MileageContainer>
    </LabelST>  
  );
};

InputMileage.propTypes = {
  values: PropTypes.object,
  setFieldValue: PropTypes.func,
};
export default InputMileage;
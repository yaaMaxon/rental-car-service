import React, { useEffect, useRef, useState } from "react";
import { DropDownBrands, InputBrandsST, LabelST } from "../FilterForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectorFilteredBrands } from "../../../../../redux/cars/selectors";
import { setFilterBrand } from "../../../../../redux/cars/slice";
import PropTypes from "prop-types";

const InputBrands = ({ values, setFieldValue }) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const dispatch = useDispatch();
  const ref = useRef(null);
  const filteredBrands = useSelector(selectorFilteredBrands);

  useEffect(() => {
    dispatch(setFilterBrand(values.brand));
  }, [dispatch, values.brand]);

  const onMouseDownBrand = brand => {
    setFieldValue('brand', brand);
    setIsOpenDropDown(false);
  };

  const handleClickOutSide = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpenDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutSide);
    return () => {
      document.removeEventListener('click', handleClickOutSide);
    };
  }, []);

  return (
    <LabelST ref={ref}>
      Car brand
      <InputBrandsST
        autoComplete="off"
        type="text"
        name="brand"
        value={values.brand}
        onClick={() => {
          setIsOpenDropDown(true);
        }}
        onChange={e => {
          setIsOpenDropDown(true);
          const { name, value } = e.target;
          setFieldValue(name, value);
          dispatch(setFilterBrand(value));
        }}
        placeholder="Enter the text"
      ></InputBrandsST>
      {isOpenDropDown && (
        <DropDownBrands>
          <ul>
            {filteredBrands.map((car, index) => {
              return (
                <li
                  key={index}
                  onMouseDown={() => {
                    onMouseDownBrand(car);
                  }}
                >
                  {car}
                </li>
              );
            })}
          </ul>
        </DropDownBrands>
      )}
    </LabelST>
    )
}

InputBrands.propTypes = {
  values: PropTypes.object,
  setFieldValue: PropTypes.func,
};

export default InputBrands;
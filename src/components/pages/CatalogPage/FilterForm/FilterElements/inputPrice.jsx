import React, { useEffect, useRef, useState } from "react";
import { DropDownBrands, InputPriceST, LabelST } from "../FilterForm.styled";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectRangePrice } from "../../../../../redux/cars/selectors";
import { setFilterPrice } from "../../../../../redux/cars/slice";

const InputPrice = ({ values, setFieldValue }) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const dispatch = useDispatch();
  const ref = useRef(null);
  const rangePrice = useSelector(selectRangePrice);

  const onMouseDownBrand = price => {
    setFieldValue('price', price);
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

  useEffect(() => {
    dispatch(setFilterPrice(values.price));
  }, [dispatch, values.price]);

  return (
    <LabelST ref={ref}>
      Price/ 1 hour
      <InputPriceST
        onClick={() => {
          setIsOpenDropDown(true);
        }}
      >
        To {values.price}$
      </InputPriceST>
      {isOpenDropDown && (
        <DropDownBrands>
          <ul>
            {rangePrice.map((price, index) => {
              return (
                <li
                  key={index}
                  onMouseDown={() => {
                    onMouseDownBrand(price);
                  }}
                >
                  {price}
                </li>
              );
            })}
          </ul>
        </DropDownBrands>
      )}
    </LabelST>
  );
};

InputPrice.propTypes = {
  values: PropTypes.object,
  setFieldValue: PropTypes.func,
};
export default InputPrice;
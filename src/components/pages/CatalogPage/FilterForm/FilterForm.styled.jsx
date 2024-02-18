import { styled } from "styled-components";

export const FormST = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
  z-index: 1;
`;

export const LabelST = styled.label`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 8px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
  color: #8A8A89;
`;
export const InputBrandsST = styled.input`
  width: 224px;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;

  display: flex;
  padding: 14px 18px 14px 18px;
  justify-content: center;
  align-items: center;

  border-radius: 14px;
  border: none;
  background-color: #F7F7FB;

  &::placeholder {
    color: #121417;
  }
`;

export const InputPriceST = styled.div`
  min-width: 125px;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  cursor: pointer;

  display: flex;
  padding: 14px 18px 14px 18px;
  justify-content: center;
  align-items: center;

  border-radius: 14px;
  border: none;
  background-color: #F7F7FB;

  &::placeholder {
    color: #121417;
  }
`;

export const DropDownBrands = styled.div`
  position: absolute;
  top: 78px;

  padding: 14px 8px 14px 18px;

  width: 100%;
  max-height: 272px;

  border-radius: 14px;
  border: 1px solid #1214170d;
  background: #FFF;
  box-shadow: 0px 4px 36px 0px #00000005;

  display: flex;
  flex-direction: column;

  ul {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #1214170d;
      border-radius: 10px;
      border: 8px solid transparent;
    }
  }
  li {
    color: #12141733;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;

    &:hover,
    &:active {
      color: #121417;
      cursor: pointer;
    }
  }
`;

export const MileageContainer = styled.div`
  display: flex;

  .left {
    width: 160px;
    min-width: 160px;
    padding-left: 70px;
    border-radius: 14px 0px 0px 14px;
    border-right: 1px solid #1214170d;
  }
  .right {
    width: 160px;
    min-width: 160px;
    padding-left: 47px;
    border-radius: 0px 14px 14px 0px;
  }
`;
export const MileageInputWrapper = styled.div`
  position: relative;
  span {
    position: absolute;
    left: 24px;
    top: 50%;
    transform: translateY(-50%);

    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }
`;

export const MainBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;

  font-size: 14px;
  line-height: 1.4;
  font-weight: 600;
  text-align: center;
  color: #FFF;

  padding: 14px 44px;

  outline: none;
  border: none;
  border-radius: 12px;
  background-color: #3470FF;

  transition: all 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    background-color: #0B44CD;
  }
`
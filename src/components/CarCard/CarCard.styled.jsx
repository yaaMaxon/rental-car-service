import { styled } from "styled-components";

export const CarCardContainer = styled.li`
  position: relative;
  padding: 10px;
  width: 274px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: 14px;

  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    scale 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  img {
    width: 274px;
    height: 210px;
    object-fit: cover;
    object-position: center center;
    border-radius: 14px;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    scale: 1.03;
  }
`

export const ImgContainer = styled.div`
  margin-bottom: 14px;
`

export const CardTitleContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
  justify-content: space-between;
  h2{
    color: #121417;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    margin-right: 9px;
  }

  span {
    color: #3470FF;
  }
`

export const CardFeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.$marginBottom || '28px'};
  gap: 5px;

  flex-grow: 1;
  span {
    border-left: 1px solid #1214171a;
  }
`

export const FeatureContainer = styled.div`
  color: #12141780;
  font-size: 12px;
  font-weight: 400px;
  line-height: 1.5;
  white-space: nowrap;
`

export const FirstLine = styled.div`
  display: flex;
  gap: 6px;
  overflow: hidden;
`

export const SecondLine = styled.div`
  display: flex;
  gap: 6px;
  overflow: hidden;
`

export const BtnHeard = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  stroke: red;
  background-color: transparent;

  &:hover {
    scale: 1.1;
  }
`

export const LearnMoreBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;

  font-size: 14px;
  line-height: 1.4;
  font-weight: 600;
  text-align: center;
  color: #FFF;

  width: 100%;
  padding: 12px 44px;

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
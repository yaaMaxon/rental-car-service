import { styled } from "styled-components";

export const CatalogSection = styled.section`
  padding: 12px 0;

  & .container {
    margin-top: 85px;
  }
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const MainContent = styled.div`
  display: flex;
  margin-bottom: 100px;
  justify-content: center;
`;

export const LoadMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BtnLoadMore = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;

  font-size: 16px;
  font-style: normal;
  line-height: 1.5;
  font-weight: 500;
  text-align: center;
  text-decoration-line: underline;
  color: #3470ff;

  padding: 14px 44px;

  outline: none;
  border: none;
  border-radius: 12px;
  background-color: transparent;

  transition: all 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  cursor: pointer;

  &:hover {
    box-shadow: none;
    background-color: transparent;
    font-size: 20px;
    font-weight: 700;
  }
`
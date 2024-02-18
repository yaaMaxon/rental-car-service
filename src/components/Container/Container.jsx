import React from "react";
import { Box } from './Container.styled';

const Container = ({ children }) => {
  return <Box className="container">{children}</Box>;
};

export default Container;
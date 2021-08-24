import React from 'react';
import styled from 'styled-components';
interface IIconProps {
  children?: React.ReactNode;
  classes?: string;
}
const Icon = ({ children, classes }: IIconProps) => {
  return <StyledIcon className={classes}>{children}</StyledIcon>;
};
const StyledIcon = styled.i`
  display: block;
`;
export default Icon;

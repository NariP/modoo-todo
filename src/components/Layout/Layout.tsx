import React from 'react';
import styled from 'styled-components';
import { GNB } from 'components/Layout';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GNB />
      <StyledMain>{children}</StyledMain>
    </>
  );
};
const StyledMain = styled.main`
  background: ${props => props.theme.color.bgColor};
  color: ${props => props.theme.color.textColor};
  width: 1000px;
  margin: 0 auto;
`;
export default Layout;

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
  background: ${({ theme }) => theme.light.bgColor};
  color: ${({ theme }) => theme.light.textColor};
  width: 1000px;
  margin: 0 auto;
`;
export default Layout;

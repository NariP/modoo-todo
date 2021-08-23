import React from 'react';
import styled from 'styled-components';
import { GNB } from 'components/Layout';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
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

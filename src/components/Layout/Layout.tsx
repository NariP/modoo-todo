import React from 'react';
import styled from 'styled-components';
import { GNB } from 'components/Layout';
interface ILayoutProps {
  setTheme: Function;
}
const Layout: React.FC<ILayoutProps> = ({ children, setTheme }) => {
  return (
    <StyledLayoutContainer>
      <GNB setTheme={setTheme} />
      <StyledMain>{children}</StyledMain>
    </StyledLayoutContainer>
  );
};
const StyledLayoutContainer = styled.div`
  background: ${({ theme }) => theme.color.bgColor};
  color: ${({ theme }) => theme.color.textColor};
`;

const StyledMain = styled.main`
  background: inherit;
  color: inherit;
  width: 1000px;
  margin: 0 auto;
  padding-top: 40px;
`;
export default Layout;

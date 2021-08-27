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
  @media only screen and (max-width: 768px) {
    max-width: 500px;
  }
  display: flex;
  min-width: 360px;
  max-width: 700px;
  min-height: 100vh;
  background: inherit;
  color: inherit;
  margin: 20px auto 32px;
`;
export default Layout;

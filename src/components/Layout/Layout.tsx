import React from 'react';
import styled from 'styled-components';
import { GNB } from 'components/Layout';
interface ILayoutProps {
  setTheme: Function;
}
const Layout: React.FC<ILayoutProps> = ({ children, setTheme }) => {
  return (
    <>
      <GNB setTheme={setTheme} />
      <StyledMain>{children}</StyledMain>
    </>
  );
};

const StyledMain = styled.main`
  background: ${({ theme }) => theme.color.bgColor};
  color: ${({ theme }) => theme.color.textColor};
  width: 1000px;
  margin: 0 auto;
  padding-top: 40px;
`;
export default Layout;

import React from 'react';
import styled from 'styled-components';
import { ToggleButton } from 'components/ToggleButton';
import { Icon } from 'components/Icon';

interface IGnbProps {
  setTheme: Function;
}
const GNB: React.FC<IGnbProps> = ({ setTheme }) => {
  return (
    <StyledHeader>
      <StyledLogo>MODOO</StyledLogo>
      <StyledToggleButtonContainer>
        <Icon>☀️</Icon>
        <ToggleButton setTheme={setTheme} />
        <Icon>🌙</Icon>
      </StyledToggleButtonContainer>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  background: inherit;
  color: inherit;
  border-bottom: 1px solid rgba(153, 153, 153, 0.3);
  box-shadow: 0 3px 5px rgba(153, 153, 153, 0.3);
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: sticky;
  padding: 1em 3em;
`;
const StyledLogo = styled.div`
  color: inherit;
  font-size: 1.2em;
  font-weight: 800;
`;
const StyledToggleButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default GNB;

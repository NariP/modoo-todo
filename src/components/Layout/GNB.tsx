import React from 'react';
import styled from 'styled-components';
import { ToggleButton } from 'components/ToggleButton';
import { Icon } from 'components/Icon';

const GNB = () => {
  return (
    <StyledHeader>
      <StyledLogo>MODOO</StyledLogo>
      <StyledToggleButtonContainer>
        <Icon>☀️</Icon>
        <ToggleButton />
        <Icon>🌙</Icon>
      </StyledToggleButtonContainer>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  // NOTE: theme 사용하기
  background: white;
  color: #333;
  border-bottom: 1px solid rgba(153, 153, 153, 0.3);
  box-shadow: 0 3px 5px rgba(153, 153, 153, 0.3);

  display: flex;
  justify-content: space-between;
  width: 100%;
  position: sticky;
  padding: 1em;
`;
const StyledLogo = styled.div`
  // NOTE: theme 사용하기
  color: black;

  font-size: 1.2em;
  font-weight: 800;
`;
const StyledToggleButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default GNB;

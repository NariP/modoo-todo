import React from 'react';
import styled, { css } from 'styled-components';

interface IModalInnerProps {
  title?: string;
  closeButton?: React.ReactNode;
}
const ModalInner: React.FC<IModalInnerProps> = ({
  children,
  title,
  closeButton,
}) => {
  return (
    <Wrapper>
      <Header title={title}>
        <Title>{title}</Title>
        {closeButton}
      </Header>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 20px;
  padding: 1em;
  color: inherit;
  min-width: 400px;
  max-width: 600px;
  min-height: 200px;
  ${({ theme }) => css`
    background: ${theme.color.bgColor};
    border-bottom: 1px solid ${theme.color.normalAlpha};
    box-shadow: 0 3px 5px ${theme.color.normalAlpha};
  `}
`;
const Header = styled.div`
  ${({ title, theme }) =>
    title && `border-bottom: 1px solid ${theme.color.normalAlpha};`}
  padding-bottom: 0.5em;
  display: flex;
`;
const Title = styled.span`
  display: block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export default ModalInner;

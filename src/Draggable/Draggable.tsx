import React from 'react';
import styled, { css } from 'styled-components';
import { useDraggable } from './hooks';

interface IModalInnerProps {
  title?: string;
  closeButton?: React.ReactNode;
  location?: { x: number; y: number };
}
const Draggable: React.FC<IModalInnerProps> = ({
  children,
  title,
  closeButton,
  location = { x: 0, y: 0 },
}) => {
  const { x, y } = location;
  const { modalRef, modalLocation, mouseDownHandler } = useDraggable({ x, y });
  return (
    <Wrapper
      onMouseDown={mouseDownHandler}
      ref={modalRef}
      style={{ left: modalLocation.x, top: modalLocation.y }}
    >
      <Header title={title}>
        <Title>{title}</Title>
        {closeButton}
      </Header>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
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
  cursor: move;
  &:active {
    cursor: move;
  }
`;
const Title = styled.span`
  display: block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export default Draggable;

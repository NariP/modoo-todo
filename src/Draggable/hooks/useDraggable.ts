import { MouseEvent, useEffect, useRef, useState } from 'react';

const useDraggable = (location: { x: number; y: number }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [mouseDown, setMouseDown] = useState(false);

  const [modalOffset, setModalOffset] = useState({ x: 0, y: 0 });
  const [modalLocation, setModalLocation] = useState({
    x: location.x,
    y: location.y,
  });
  const mouseDownHandler = (e: MouseEvent) => {
    // ele 에서 마우스 포인터까지의 거리
    const modalPos = modalRef.current?.getBoundingClientRect();
    if (!modalPos) return;

    const [moX, moY] = [e.clientX - modalPos.left, e.clientY - modalPos.top];
    setModalOffset({ ...modalOffset, x: moX, y: moY });

    setMouseDown(true);
  };
  useEffect(() => {
    if (!mouseDown) return;
    const mouseMoveHandler = (e: MouseEvent<HTMLDivElement>) => {
      const [moLeft, moTop] = [
        e.clientX - modalOffset.x,
        e.clientY - modalOffset.y,
      ];
      setModalLocation({ ...modalLocation, x: moLeft, y: moTop });
    };
    const mouseUpHandler = () => {
      setMouseDown(false);
    };

    const throttledFunc = (e: MouseEvent<HTMLDivElement>) => {
      setTimeout(() => {
        mouseMoveHandler(e);
      }, 10);
    };
    // NOTE: addEventListener 타입 찾기
    window.addEventListener<any>(MOUSE_MOVE, throttledFunc);
    window.addEventListener(MOUSE_UP, mouseUpHandler);

    return () => {
      window.removeEventListener<any>(MOUSE_MOVE, throttledFunc);
      window.removeEventListener(MOUSE_UP, mouseUpHandler);
    };
  }, [mouseDown, modalRef, modalOffset, modalLocation]);
  return { modalRef, modalLocation, mouseDownHandler };
};
const [MOUSE_MOVE, MOUSE_UP] = ['mousemove', 'mouseup'];
export default useDraggable;
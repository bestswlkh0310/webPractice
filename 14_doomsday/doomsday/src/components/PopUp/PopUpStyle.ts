import { styled } from 'styled-components';
import { keyframes } from "styled-components";

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;


export const PopUpContainer = styled.div<{left: string, show: boolean}>`
  position: absolute;
  left: ${props => props.left || '500px'};
  transform: translateX(-50%);
  width: 400px;
  height: 100px;
  background: black;
  border: 2px solid white;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: bottom 0.5s;
  animation: ${fadeOut} 1s ease-in-out ${props => props.show ? '0s' : '1.5s'} forwards;
`;
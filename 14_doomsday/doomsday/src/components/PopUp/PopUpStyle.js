import { styled } from 'styled-components';
import { keyframes } from "styled-components";

// Define the fadeOut animation
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;


export const PopUpContainer = styled.div`
  position: absolute;
  left: ${props => props.left || '500px'};
  transform: translateX(-50%);
  width: 200px;
  height: 100px;
  background: blue;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: bottom 0.5s;
  animation: ${fadeOut} 1s ease-in-out ${props => props.show ? '0s' : '1.5s'} forwards;
`;
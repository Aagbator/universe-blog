import styled, { keyframes } from "styled-components";

export const LoaderWrapper = styled.div`
  display: flex;
  background: #fff;
  display: flex;           
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  height: 100vh;
`;


const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 3px solid #000;
  border-right: 2px solid #000;
  border-bottom: 2px solid transparent;
  border-left: 2px solid #000;
  background: transparent;
  margin-bottom: 10px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;
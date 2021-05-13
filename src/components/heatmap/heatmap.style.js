import styled, { keyframes } from 'styled-components/macro';

export const Frame = styled.div`
 max-width: 1115px;
 text-align: center;
 margin: 0 auto;
 @media(max-width: 1115px) {
    width: 95%;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.img`
  animation: ${rotate360} 1.5s linear infinite;
  width: 70px;
  margin: 1rem 0;
`;

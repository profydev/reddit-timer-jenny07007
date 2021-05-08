import styled, { keyframes } from 'styled-components/macro';

export const Container = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const Frame = styled.div`
 max-width: 1115px;
 text-align: center;
 margin: 0 auto;
 @media(max-width: 1115px) {
    width: 95%;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size.h1};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  font-family: ${({ theme }) => theme.font.family.headline};
  line-height: 1.2;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -25px;
  gap: 10px;
`;

export const Input = styled.input`
    width: 370px;
    height: 36px;
    text-indent: 17px;
    border: 1px solid ${({ theme }) => theme.color.lightGray};

    &[type="text"] {
      font-size: ${({ theme }) => theme.font.size.default};
      letter-spacing: .5px;
    }

    &::placeholder {
      font-size: ${({ theme }) => theme.font.size.small}
    }
`;

export const PrefixedText = styled.p`
  font-size: ${({ theme }) => theme.font.size.h6};
  color: ${({ theme }) => theme.color.lighterGray};
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

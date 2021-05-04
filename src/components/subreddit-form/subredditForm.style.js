import styled from 'styled-components/macro';

export const Container = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const Frame = styled.div`
 max-width: 1115px;
 text-align: center;
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

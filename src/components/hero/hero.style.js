import styled, { css } from 'styled-components/macro';

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

const textBase = css`
  font-size: ${({ theme }) => theme.font.size.default};
  color: ${({ theme }) => theme.color.lightGray};
`;

export const SubTitle = styled.p`
  ${textBase};
  line-height: 0.9;
`;

export const Button = styled.button`
  width: 216px;
  height: 36px;
  cursor: pointer;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  font-size: 0.875rem;
  margin: 30px 0;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.yellow};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const Text = styled.p`
  ${textBase};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: 1.5;
`;

export const TimeTable = styled.img`
  max-width: 1115px;
  margin-top: 15px;

  @media(max-width: 1115px) {
    width: 95%;
  }
`;

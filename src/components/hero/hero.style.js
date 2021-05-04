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
  color: ${({ theme }) => theme.color.lighterGray};
`;

export const SubTitle = styled.p`
  ${textBase};
  line-height: 0.9;
  @media(max-width: 738px) {
    line-height: 1.7;
  }
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

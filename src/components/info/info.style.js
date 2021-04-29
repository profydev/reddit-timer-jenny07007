import styled, { css } from 'styled-components/macro';

export const Container = styled.section`
  width: 100vw;
  margin-bottom: 6.3rem;
`;

export const Row = styled.article`
  max-width: 738px;
  margin: 0 auto;
 
  @media (max-width: 738px) {
    width: 90%;
  }
`;

export const Box = styled.div`
  padding-top: 6.8rem;


  &:nth-child(2) {
    padding-top: 4.6rem;
  }
`;

const TextBase = css`
  color: ${({ theme }) => theme.color.lightGray};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  font-family: ${({ theme }) => theme.font.family.default};
`;

export const Title = styled.h3`
  ${TextBase};
  font-size: ${({ theme }) => theme.font.size.h3};
  font-family: ${({ theme }) => theme.font.family.headline};
  color: ${({ theme }) => theme.color.black};
`;

export const ListText = styled.p`
  ${TextBase};
  margin-top: -4px;
  line-height: 0.95;

  @media (max-width: 738px) {
    line-height: 1.7;
  }
`;

export const Text = styled.p`
  ${TextBase}
  margin-top: -8px;
  line-height: 1.7;
`;

export const Link = styled.a`
  &:visited,
  &:hover,
  &:link {
    color: ${({ theme }) => theme.color.blue};
  }
`;

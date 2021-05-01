import styled, { css } from 'styled-components/macro';

export const Section = styled.section`
  width: 100%;
  max-width: 778px;
  margin: 122px auto 0;
  padding: 0 28px;
`;

export const Article = styled.article`
  margin: 100px 0;
`;

const TextBase = css`
  color: ${({ theme }) => theme.color.lightGray};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  font-family: ${({ theme }) => theme.font.family.default};
  font-size: ${({ theme }) => theme.font.size.default};
`;

export const Headline = styled.h3`
  ${TextBase};
  font-size: ${({ theme }) => theme.font.size.h3};
  font-family: ${({ theme }) => theme.font.family.headline};
  color: ${({ theme }) => theme.color.black};
  margin: 0;
  line-height: 1.9; 
`;

export const Content = styled.div`
  ${TextBase}
  line-height: 1.8; 
`;

export const Link = styled.a`
  &:visited,
  &:hover,
  &:link {
    color: ${({ theme }) => theme.color.blue};
  }
`;

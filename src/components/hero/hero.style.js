import styled from 'styled-components/macro';

export const Container = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const Frame = styled.div`
 max-width: 1115px;
 text-align: center;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size.h1};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  font-family: ${({ theme }) => theme.font.family.headline}
`;

export const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.font.size.default};
  color: ${({ theme }) => theme.color.lightGray};
`;

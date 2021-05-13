import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Frame = styled.div`
  margin: 0 auto;
  width: 50%;
  padding: 0.1rem 0.3rem;
  border-radius: .25rem;
  border: 1px solid ${({ theme }) => theme.color.errorBorder};
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.font.size.default};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.color.errorText};
`;

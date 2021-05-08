/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/macro';

export const ButtonStyle = styled.button`
  padding: 0 16px;
  height: 36px;
  line-height: 36px;
  display: inline-block;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  font-size: 0.875rem;
  margin: 30px 0;
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.yellow};
  font-weight: ${({ theme }) => theme.font.weight.medium};

  &:hover {
    background: ${({ theme }) => theme.color.darkerYellow};
  }

  &[aria-disabled='true'] {
    background: ${({ theme }) => theme.color.lightGray};
    cursor: default;
  }
  `;

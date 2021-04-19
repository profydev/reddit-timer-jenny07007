import styled, { css } from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import { ReactComponent as SignLogo } from '../../img/sign.svg';

export const Container = styled.footer`
  height: 100px;
  width: 100vw;
  display: flex;
`;

export const Frame = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 250px;
`;

export const Sign = styled(SignLogo)``;

const baseTextLink = css`
  color: ${(props) => props.theme.color.gray};
  font-size: 0.875rem;
`;

export const TextRouterLink = styled(ReactRouterLink)`
  ${baseTextLink};
`;

export const TextLink = styled.a`
  ${baseTextLink};
`;

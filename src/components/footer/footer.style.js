import styled, { css } from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import { ReactComponent as SignLogo } from '../../assets/sign.svg';

export const Container = styled.footer`
  height: 100px;
  width: 100vw;
  display: flex;
`;

export const Frame = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  max-width: 940px;
  margin: auto;
  
  @media(max-width: 940px) {
      padding: 0 20px;
  }
`;

export const Sign = styled(SignLogo)`
  display: block;
`;

const baseTextLink = css`
  color: ${(props) => props.theme.color.gray};
  font-size: 0.875rem;
`;

export const RightLink = styled(ReactRouterLink)`
  flex:1;
  text-align: right;
  ${baseTextLink};
`;

export const LeftLink = styled.a`
  flex:1;
  ${baseTextLink};
`;

import styled, { css } from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

export const Container = styled.header`
  height: 100px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  margin-left: 80px;
`;

const Link = css`
  font-size: ${(props) => props.theme.font.size.default};
  color: ${(props) => props.theme.color.gray};
  margin-left: 25px;
`;

export const NavLink = styled(ReactRouterLink)`
  ${Link};
`;

export const HashLink = styled(NavHashLink)`
  ${Link};
`;

export const Nav = styled.nav`
  margin-right: 80px;
`;

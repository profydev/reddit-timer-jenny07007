import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  height: 100px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  margin-left: 80px;
  width: 150px;
  height: 36px;
`;

export const NavLink = styled(Link)`
  font-size: ${(props) => props?.theme?.font?.size?.default};
  color: ${(props) => props?.theme?.color?.gray};
  text-decoration: none;
  margin-left: 25px;
`;

export const Nav = styled.nav`
  margin-right: 80px;
`;

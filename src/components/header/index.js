import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Logo, Nav, NavLink,
} from './header.style';
import logo from '../../img/logotype.svg';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="logo" />
      </Link>
      <Nav>
        <NavLink to="/search/javascript">Search</NavLink>
        <NavLink to="#how-it-works">How it works</NavLink>
        <NavLink to="#about">About</NavLink>
      </Nav>
    </Container>
  );
}

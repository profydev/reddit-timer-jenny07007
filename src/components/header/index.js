import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Logo, Nav, NavLink, HashLink,
} from './header.style';
import logo from '../../img/logotype.svg';
import { DEFAULT_SUBREDDIT } from '../../constants/subreddit';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="logo" />
      </Link>
      <Nav>
        <NavLink to={`/search/${DEFAULT_SUBREDDIT}`}>Search</NavLink>
        <HashLink to="/#how-it-works">How it works</HashLink>
        <HashLink to="/#about">About</HashLink>
      </Nav>
    </Container>
  );
}

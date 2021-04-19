import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Sign, TextLink, TextRouterLink, Frame,
} from './footer.style';

export default function index() {
  return (
    <Container>
      <Frame>
        <TextLink href="https://profy.dev/employers">profy.dev</TextLink>
        <Link to="/"><Sign /></Link>
        <TextRouterLink to="/terms">Terms &amp; Privacy</TextRouterLink>
      </Frame>
    </Container>
  );
}

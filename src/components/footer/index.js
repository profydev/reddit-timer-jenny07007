import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Sign, LeftLink, RightLink, Frame,
} from './footer.style';

export default function index() {
  return (
    <Container>
      <Frame>
        <LeftLink data-testid="left-link-in-footer" href="https://profy.dev/employers">profy.dev</LeftLink>
        <Link to="/"><Sign /></Link>
        <RightLink to="/terms">Terms &amp; Privacy</RightLink>
      </Frame>
    </Container>
  );
}

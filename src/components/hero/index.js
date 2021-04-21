import React from 'react';
import {
  Container, Title, SubTitle, Frame,
} from './hero.style';

export default function Hero() {
  return (
    <Container>
      <Frame>
        <Title>No reactions to your reddit posts?</Title>
        <SubTitle>
          Great timing, great results! Find the best time to post on your subreddit.
        </SubTitle>
      </Frame>
    </Container>
  );
}

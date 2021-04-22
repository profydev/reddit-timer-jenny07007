import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Title, SubTitle, Frame, Button, Text, TimeTable,
} from './hero.style';
import timeTable from '../../img/table.png';
import { DEFAULT_SUBREDDIT } from '../../constants/subreddit';

export default function Hero() {
  return (
    <Container>
      <Frame>
        <Title>No reactions to your reddit posts?</Title>
        <SubTitle>
          Great timing, great results! Find the best time to post on your subreddit.
        </SubTitle>
        <Button to={`/search/${DEFAULT_SUBREDDIT}`}>show me the best time</Button>
        <Text>
          r/
          {DEFAULT_SUBREDDIT}
        </Text>
        <Link to={`/search/${DEFAULT_SUBREDDIT}`}>
          <TimeTable src={timeTable} alt="time-table" />
        </Link>
      </Frame>
    </Container>
  );
}

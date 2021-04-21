import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Title, SubTitle, Frame, Button, Text, TimeTable,
} from './hero.style';
import timeTable from '../../img/table.png';

export default function Hero() {
  return (
    <Container>
      <Frame>
        <Title>No reactions to your reddit posts?</Title>
        <SubTitle>
          Great timing, great results! Find the best time to post on your subreddit.
        </SubTitle>
        <Link to="/search/javascript">
          <Button>show me the best time</Button>
        </Link>
        <Text>r/javascript</Text>
        <Link to="/search/javascript">
          <TimeTable src={timeTable} alt="time-table" />
        </Link>
      </Frame>
    </Container>
  );
}

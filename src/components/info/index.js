import React from 'react';
import {
  Container, Row, Title, ListText, Text, Link, Box,
} from './info.style';

export default function Info() {
  return (
    <Container>
      <Row>
        <Box>
          <Title>How it works</Title>
          <ListText>
            &#183; We find the 500 top posts from the past year for a subreddit
          </ListText>
          <ListText>
            &#183; The data is visualized in a heatmap grouped by weekday and hour
            of the day.
          </ListText>
          <ListText>
            &#183; See immediately when to submit your reddit post.
          </ListText>
        </Box>

        <Box>
          <Title>About</Title>
          {/* &#x2011; for non-breaking hyphen */}
          <Text>
            This app was created during a course on
            {' '}
            <Link href="https://profy.dev">profy.dev</Link>
            {' '}
            with the goal to implement a pixel&#x2011;perfect real-world application with
            professional workflows and tools like Kanban, Asana, Zeplin, GitHub,
            pull requests and code reviews.
            <Link href="https://profy.dev/employers">
              {' '}
              Click here for more information.
            </Link>
          </Text>
        </Box>
      </Row>
    </Container>
  );
}

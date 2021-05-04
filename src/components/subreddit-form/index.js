import React from 'react';
import Button from '../button';
import {
  Container, Frame, Form, Title, Input, PrefixedText,
} from './subredditForm.style';

export default function SubredditForm() {
  return (
    <Container>
      <Frame>
        <Title>Find the best time for a subreddit</Title>
        <Form>
          <PrefixedText>r /</PrefixedText>
          <Input />
          <Button type="submit" content="search" />
        </Form>
      </Frame>
    </Container>
  );
}

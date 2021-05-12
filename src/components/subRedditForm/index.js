import React, { useContext } from 'react';
import Button from '../button';
import {
  Container, Frame, Form, Title, Input, PrefixedText,
} from './subredditForm.style';
import { SubRedditContext } from '../../contexts/subRedditContext';
import fetchPosts from '../../hooks/useFetchPosts';

export default function SubRedditForm() {
  const {
    subreddit, onSubredditChange, onSubredditSubmit, isLoading,
  } = useContext(SubRedditContext);

  fetchPosts('javascript').then((result) => console.log(result)).catch((err) => console.log(err));

  return (
    <Container>
      <Frame>
        <Title>Find the best time for a subreddit</Title>
        <Form onSubmit={onSubredditSubmit}>
          <PrefixedText>r /</PrefixedText>
          <Input
            type="text"
            placeholder="javascript"
            value={subreddit}
            onChange={onSubredditChange}
          />
          <Button type="submit" content="search" disabled={isLoading} />
        </Form>
      </Frame>
    </Container>
  );
}

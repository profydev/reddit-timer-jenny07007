import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../button';
import {
  Container, Frame, Form, Title, Input, PrefixedText,
} from './subredditForm.style';

export default function SubredditForm() {
  const history = useHistory();
  const { subreddit: initialSubreddit } = useParams();
  const [subreddit, setSubreddit] = useState(initialSubreddit || '');

  useEffect(() => {
    setSubreddit(initialSubreddit);
  }, [initialSubreddit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subreddit) return;
    history.push(`/search/${subreddit}`);
  };

  return (
    <Container>
      <Frame>
        <Title>Find the best time for a subreddit</Title>
        <Form onSubmit={handleSubmit}>
          <PrefixedText>r /</PrefixedText>
          <Input
            type="text"
            placeholder="javascript"
            value={subreddit}
            onChange={({ target }) => setSubreddit(target.value)}
          />
          <Button type="submit" content="search" />
        </Form>
      </Frame>
    </Container>
  );
}

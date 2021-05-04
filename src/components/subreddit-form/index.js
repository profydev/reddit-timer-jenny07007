import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../button';
import {
  Container, Frame, Form, Title, Input, PrefixedText,
} from './subredditForm.style';

export default function SubredditForm() {
  const history = useHistory();
  const { term } = useParams();
  const [searchTerm, setSearchTerm] = useState(term || '');

  useEffect(() => {
    setSearchTerm(term);
  }, [term]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    history.push(`/search/${searchTerm}`);
  };

  return (
    <Container>
      <Frame>
        <Title>Find the best time for a subreddit</Title>
        <Form onSubmit={handleSubmit}>
          <PrefixedText>r /</PrefixedText>
          <Input
            type="text"
            placeholder="javasctipt"
            value={searchTerm}
            onChange={({ target }) => setSearchTerm(target.value)}
          />
          <Button type="submit" content="search" />
        </Form>
      </Frame>
    </Container>
  );
}

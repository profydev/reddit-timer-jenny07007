import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../button';
import spinner from '../../assets/loading_spinner.svg';
import {
  Container, Frame, Form, Title, Input, PrefixedText, Spinner,
} from './subredditForm.style';
import useRequest from '../../hooks/useRequest';
import { SubRedditContext } from '../../contexts/subRedditContext';

export default function SubRedditForm() {
  const history = useHistory();
  const { subreddit, setSubreddit } = useContext(SubRedditContext);
  const cleanedRedditString = subreddit.replace(/[\W_]/g, '');

  const {
    doRequest, setPosts, setError, error, isLoading,
  } = useRequest({
    baseURL: `https://www.reddit.com/r/${cleanedRedditString}/top.json?t=year`,
    afterId: null,
    numOfData: 500,
  });

  useEffect(() => {
    doRequest();
    return () => setPosts(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location.key]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subreddit) return;
    setError(null);
    history.push(`/search/${subreddit}`);

    doRequest();
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
          <Button type="submit" content="search" disabled={isLoading} />
        </Form>
        { isLoading && <Spinner src={spinner} alt="loading-spinner" /> }
        { error && <div>{error}</div> }
      </Frame>
    </Container>
  );
}

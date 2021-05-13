import React, { useContext } from 'react';
import spinner from '../../assets/loading_spinner.svg';
import { SubRedditContext } from '../../contexts/subRedditContext';
import { Spinner, Frame } from './heatmap.style';
import Error from '../error';

export default function Heatmap() {
  const { isLoading, posts, error } = useContext(SubRedditContext);
  return (
    <Frame>
      { !isLoading && !error && `${posts.length} posts` }
      { isLoading && <Spinner src={spinner} alt="loading-spinner" /> }
      { error && <Error error={error} />}
    </Frame>
  );
}

import React, { useContext } from 'react';
import spinner from '../../assets/loading_spinner.svg';
import { SubRedditContext } from '../../contexts/subRedditContext';
import { Spinner, Frame } from './heatmap.style';

export default function Heatmap() {
  const { isLoading } = useContext(SubRedditContext);
  return (
    <Frame>
      { isLoading && <Spinner src={spinner} alt="loading-spinner" /> }
    </Frame>
  );
}

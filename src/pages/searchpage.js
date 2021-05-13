import React from 'react';
import { SubRedditForm, Heatmap } from '../components/index';
import SubRedditContextProvider from '../contexts/subRedditContext';

export default function SearchPage() {
  return (
    <SubRedditContextProvider>
      <SubRedditForm />
      <Heatmap />
    </SubRedditContextProvider>
  );
}

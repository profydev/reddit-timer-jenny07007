import React from 'react';
import { SubRedditForm } from '../components/index';
import SubRedditContextProvider from '../contexts/subRedditContext';

export default function SearchPage() {
  return (
    <SubRedditContextProvider>
      <SubRedditForm />
    </SubRedditContextProvider>
  );
}

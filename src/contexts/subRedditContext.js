import React, { createContext, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import useFetchPosts from '../hooks/useFetchPosts';

export const SubRedditContext = createContext();

export default function SubRedditContextProvider({ children }) {
  const history = useHistory();
  const { subreddit: initialSubreddit } = useParams();
  const [subreddit, setSubreddit] = useState(initialSubreddit);
  const trimedRedditString = subreddit.replace(/[\W_]/g, '');
  const {
    isLoading, posts, error, setError,
  } = useFetchPosts();

  useEffect(() => {
    setSubreddit(initialSubreddit);
  }, [initialSubreddit]);

  const onSubredditChange = (e) => setSubreddit(e.target.value);

  const onSubredditSubmit = (e) => {
    e.preventDefault();
    if (!subreddit) return;
    history.push(`/search/${trimedRedditString}`);
  };

  const onKeyDown = () => setError(null);

  const values = {
    subreddit, onSubredditChange, onSubredditSubmit, onKeyDown, isLoading, posts, error,
  };

  return (
    <SubRedditContext.Provider value={values}>
      { children }
    </SubRedditContext.Provider>
  );
}

SubRedditContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

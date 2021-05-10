import React, { createContext, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

export const SubRedditContext = createContext();

export default function SubRedditContextProvider({ children }) {
  const history = useHistory();
  const { subreddit: initialSubreddit } = useParams();
  const [subreddit, setSubreddit] = useState(initialSubreddit);
  const trimedRedditString = subreddit.replace(/[\W_]/g, '');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setSubreddit(initialSubreddit);
  }, [initialSubreddit]);

  const onSubredditChange = (e) => setSubreddit(e.target.value);

  const onSubredditSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (!subreddit) return;
    history.push(`/search/${trimedRedditString}`);
    // setIsLoading(false);
  };

  const values = {
    subreddit, onSubredditChange, onSubredditSubmit, isLoading,
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

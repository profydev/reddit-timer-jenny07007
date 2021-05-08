import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

export const SubRedditContext = createContext();

export default function SubRedditContextProvider({ children }) {
  const { subreddit: initialSubreddit } = useParams();
  const [subreddit, setSubreddit] = useState(initialSubreddit);

  useEffect(() => {
    setSubreddit(initialSubreddit);
  }, [initialSubreddit]);

  return (
    <SubRedditContext.Provider value={{ subreddit, setSubreddit }}>
      { children }
    </SubRedditContext.Provider>
  );
}

SubRedditContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

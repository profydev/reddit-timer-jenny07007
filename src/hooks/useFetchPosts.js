/* eslint-disable no-param-reassign */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

async function fetchPosts(subreddit, afterId = null, allPosts = []) {
  const url = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`;

  const { data: { data } } = await axios.get(url, { params: { after: afterId } });
  const { dist } = data;
  afterId = data.after;
  allPosts = [...allPosts, ...data.children];

  if (allPosts.length === 500 || dist < 100) {
    return allPosts;
  }

  return fetchPosts(subreddit, afterId, allPosts);
}

function useFetchPosts() {
  const { subreddit } = useParams();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(false);
      try {
        const allPosts = await fetchPosts(subreddit);
        if (!allPosts.length) {
          setError('No results found. Maybe give it another try?');
        }
        setPosts(allPosts);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [subreddit]);

  return {
    posts, error, isLoading, setError,
  };
}

export default useFetchPosts;

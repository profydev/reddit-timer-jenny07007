/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
import { useState } from 'react';
import axios from 'axios';

export default function useRequest({ baseURL, afterId, numOfData }) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState();

  const doRequest = async () => {
    try {
      setIsLoading(true);
      const times = Math.ceil(numOfData / 100);
      const promises = [];

      for (let i = 0; i < times; i++) {
        const res = await axios.get(`${baseURL}`, { params: { limit: 100, after: afterId } });
        afterId = res.data.data.after;
        promises.push(res.data.data);
      }

      Promise.all(promises).then((results) => {
        const arr = [];
        if (results[0].children.length === 0) {
          setError('No posts. Sorry!');
        }
        results.map((r) => arr.push(...r.children));
        setPosts(arr.slice(0, numOfData));
      });
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.mesage);
    }
  };

  return {
    doRequest, posts, error, isLoading, setPosts, setError,
  };
}

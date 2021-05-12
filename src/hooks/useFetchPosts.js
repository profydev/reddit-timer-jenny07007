/* eslint-disable no-param-reassign */
import axios from 'axios';

export default async function fetchPosts(subreddit, afterId = null, allPosts = []) {
  try {
    const url = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`;

    const { data: { data } } = await axios.get(url, { params: { after: afterId } });
    const { dist } = data;
    afterId = data.after;
    allPosts = [...allPosts, ...data.children];

    if (allPosts.length === 500 || dist < 100) {
      return allPosts;
    }

    return fetchPosts(subreddit, afterId, allPosts);
  } catch (error) {
    const { message, reason } = error.response.data;
    return (`message: ${message}, reason: ${reason},`, error.message);
  }
}

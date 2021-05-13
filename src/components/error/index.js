/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { Frame, Text, Wrapper } from './error.style';

export default function Error({ error }) {
  return (
    <Wrapper>
      <Frame>
        {error.includes(404)
          ? <Text>No Results found</Text>
          : error.includes(403)
            ? <Text>Cannot get results from a private subreddit</Text>
            : <Text>{error}</Text>}
      </Frame>
    </Wrapper>
  );
}

Error.propTypes = {
  error: PropTypes.node.isRequired,
};

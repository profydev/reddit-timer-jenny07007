import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle } from './button.style';

export default function Button({ content, disabled }) {
  return (
    <ButtonStyle aria-disabled={disabled}>{content}</ButtonStyle>
  );
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  disabled: PropTypes.bool,
};

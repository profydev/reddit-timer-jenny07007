import React from 'react';
import PropsType from 'prop-types';
import { ButtonStyle } from './button.style';

export default function Button({ content, size }) {
  return (
    <ButtonStyle size={size}>{content}</ButtonStyle>
  );
}

Button.propTypes = {
  content: PropsType.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  size: PropsType.string,
};

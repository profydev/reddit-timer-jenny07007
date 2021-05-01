import React from 'react';
import { string, node } from 'prop-types';
import { Article, Headline, Content } from './info.style';

function InfoSection({ id, headline, children }) {
  return (
    <Article id={id}>
      <Headline>
        {headline}
      </Headline>
      <Content>
        {children}
      </Content>
    </Article>
  );
}

InfoSection.propTypes = {
  id: string.isRequired,
  headline: string.isRequired,
  children: node.isRequired,
};

export default InfoSection;

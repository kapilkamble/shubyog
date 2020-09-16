import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="/" rel="noreferrer noopener" target="_blank">
          Twitter
        </Styled.Link>
        <Styled.Link
          href="https://facebook.com"
          rel="noreferrer noopener"
          target="_blank"
        >
          Facebook
        </Styled.Link>
        <Styled.Link href="/" rel="noreferrer noopener" target="_blank">
          Instagram
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;

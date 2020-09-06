import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Container from 'components/ui/Container';

import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const Bannerv2 = ({ title, subtitle, content }) => (
  <Styled.Bannerv2>
    <Container section>
      <TitleSection title={title} subtitle={subtitle} />
      <Styled.Content>{content}</Styled.Content>
    </Container>
  </Styled.Bannerv2>
);

Bannerv2.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.any.isRequired,
};

export default Bannerv2;

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Bannerv2 from 'components/ui/Bannerv2';

const MainPage = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "hero section" } }) {
        frontmatter {
          title
          subtitle
          content
        }
      }
    }
  `);

  const mainPage = markdownRemark.frontmatter;

  return (
    <Bannerv2
      title={mainPage.title}
      subtitle={mainPage.subtitle}
      content={mainPage.content}
    />
  );
};

MainPage.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default MainPage;

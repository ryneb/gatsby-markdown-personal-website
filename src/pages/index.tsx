import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import MainPage from 'components/MainPage';


const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <MainPage />
    </Layout>
  );
};

export default IndexPage;

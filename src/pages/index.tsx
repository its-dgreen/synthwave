import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Listing from '../components/listing';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Listing />
    </Layout>
  );
};

export default IndexPage;

import React from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';

const PostLayout = ({ data }) => {
  return (
    <Layout>
      <h1 className="neon">{data.markdownRemark.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      />
    </Layout>
  );
};

export const query = graphql`
  query MarkdownPostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`;

export default PostLayout;

import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const ArticleLayout = styled.main`
  margin-bottom: 5vh;
`;

const Listing = () => {
  const data = useStaticQuery(graphql`
    query ListingQuery {
      allMarkdownRemark(limit: 5, sort: { fields: [frontmatter___date] }) {
        edges {
          node {
            excerpt
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `);
  return data.allMarkdownRemark.edges.map(edge => (
    <ArticleLayout key={edge.node.slug}>
      <Link to={`/posts/${edge.node.frontmatter.slug}`}>
        <h2 className="neon">{edge.node.frontmatter.title}</h2>
      </Link>
      <p>{edge.node.excerpt}</p>
      <Link to={`/posts/${edge.node.frontmatter.slug}`}>Read More</Link>
    </ArticleLayout>
  ));
};

export default Listing;

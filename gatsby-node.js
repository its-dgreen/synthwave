const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
          path: `/posts/${edge.node.frontmatter.slug}`,
          component: path.resolve('./src/components/postLayout.tsx'),
          context: {
            slug: edge.node.frontmatter.slug,
          },
        });
      });
      resolve();
    });
  });
};

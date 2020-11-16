import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "synthwave.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  if (!data?.file?.childImageSharp?.fixed) {
    return <div>Picture not found</div>;
  }

  return <Img fixed={data.file.childImageSharp.fixed} />;
};

export default Logo;

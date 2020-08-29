import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

export const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Image fluid={data.placeholderImage.childImageSharp.fluid} />
  );
};

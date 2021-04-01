import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

function Image(props) {
      console.log(data.images.edges)
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      console.log(image)
      if (!image) { return null; }
      return (
        <GatsbyImage
          key={props.filename}
          image={image}
          alt={props.alt}
          className={props.style}
        />
      )
}

Image.defaultProps = {
  alt: '',
}

export default Image

export const data = graphql`
  {
    images: allFile {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(placeholder: BLURRED)
            full: gatsbyImageData(layout: FULL_WIDTH)
            meta: gatsbyImageData(placeholder: BLURRED, layout: FIXED)
          }
        }
      }
    }
  }
`

import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

function Image({filename,alt,style}) {
    return (
      <StaticQuery
        query={query}
        render={data => {
      console.log(`Data is ${data}`)
      /* const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(filename);
      });
      if (!image) { return null; } */
      return (
        <GatsbyImage
          key={filename}
          image={'untoolsThumbs.png'}
          alt={alt}
          className={style}
        />
      )
    }}
    />
  )
}

const query = graphql`
  query ImageQuery {
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

export default Image


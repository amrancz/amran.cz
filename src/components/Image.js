import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Image({imageName,alt,style}) {
  return (
    <StaticQuery
      query={
        graphql`
          query ImageQuery {
            allFile(filter: {extension: {eq: "png"}}){
              nodes {
                relativePath
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }`
      }
      render={data => {
        const image = data.allFile.nodes.find((images) => images.relativePath === imageName)
        if (image === undefined){
          null
        } else {
          return(
            <GatsbyImage
              key={imageName}
              image={image.childImageSharp.gatsbyImageData}
              alt={alt}
              className={style}
            />
          )
        }
      }
    }
    // close StaticQuery and the whole function  
    />
  )
}
/* 
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
    image: file(absolutePath: {regex: "/portraitSmall.png/"}) {
      childImageSharp {
        gatsbyImageData(width: 50, height: 50, layout: FIXED)
      }
    }
  }
`
*/

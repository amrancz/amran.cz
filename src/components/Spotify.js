import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import CustomLink from '../components/CustomLink'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'

function Spotify() {
  return(
  <StaticQuery
      query={spotifyData}
      render={data => {
        const artists = data.allSpotifyTopArtist.edges
        return (
            artists.map(({ node }) => {
                        const name = node.name
                        const image = getImage(node.image.localFile)
                        const link = node.external_urls.spotify

                        return (
                            <span className={'flex flex-wrap mr-2 mb-2'}>
                                <CustomLink link={link} target={'_blank'} style={'withImage'} className={"hover:text-sky-500 rounded-md duration-150 px-2 pr-4"} image={image} text={name}>
                                </CustomLink>
                            </span>
                            
                        )
                        })
        )
    }}
  />
  )
}

export default Spotify

const spotifyData = graphql`query SpotifyData {
    allSpotifyTopArtist(
      limit:5,
      filter: { time_range: { eq: "short_term" } }
      sort: { fields: order }
    ) {
      edges {
        node {
          name
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 24)
              }
            }
          }
          external_urls {
            spotify
          }
        }
      }
    }
  }
`
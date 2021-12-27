import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
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
                        console.log(image)
                        return (
                            <span className={'flex flex-wrap pt-1'}>
                                <span className={'w-6 h-6 rounded-full bg-slate-800'}>
                                <GatsbyImage key={name} alt={`Image of ${name}`} image={image} loading='eager'
                                    imgStyle={{
                                        justifySelf: 'center',
                                        textAlign: 'center',
                                        borderRadius: '10rem',
                                        overflow: 'hidden',
                                        backgroundColor: 'none',
                                      }}
                                ></GatsbyImage>
                                </span>
                                <a href={link} target={'_blank'} className={"hover:text-blue-500 rounded-md duration-150 px-2 pr-4"}>
                                {' '}{` ${name}`}
                                </a>
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
                gatsbyImageData(width: 120)
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
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div className={'bg-gray-700 bg-opacity-10 hover:bg-opacity-20 rounded-xl p-16 w-10xl space-y-4 mb-12'}>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
            />
            <p>
              Written by <strong>{author}</strong> – product designer from Brno, Czechia.
              {` `}
              <a href={`https://twitter.com/${social.twitter}`} className={'font-bold hover:underline'}>
                Follow me on Twitter
              </a>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio

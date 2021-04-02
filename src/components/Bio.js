import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Portrait from '../images/portraitSmall.jpg'
import { data } from 'autoprefixer'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div className={'bg-gray-700 bg-opacity-10 hover:bg-opacity-20 flex flex-row space-x-6 rounded-xl p-16 w-10xl space-y-4 mb-12'}>
            <img src={Portrait} alt={'Portrait of Adam Amran'} className={'rounded-2xl w-24 h-24'}></img> 
            <p>
              Written by <strong>{author}</strong> – product designer from Brno, Czechia.
              {` `}
              <a href={`https://twitter.com/${social.twitter}`} className={'text-blue-400 hover:underline'}>
                Follow me on Twitter
              </a>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`query BioQuery {
  avatar: file(absolutePath: {regex: "/portraitSmall.jpg/"}) {
    childImageSharp {
      gatsbyImageData(width: 50, height: 50, layout: FIXED)
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

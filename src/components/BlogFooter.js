import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import CustomLink from './CustomLink'

function BlogFooter() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div className={'bg-gray-700 bg-opacity-10 hover:bg-opacity-20 flex flex-col rounded-xl p-12 space-y-4 mb-12'}>
            <p>
              Do you want to reach out about this article?
              {' '}<CustomLink link={'mailto:adam@amran.cz'} text={'Email me'}></CustomLink>
            </p>
            <p>
            <CustomLink link={`https://twitter.com/${social.twitter}`} target={'_blank'} text={'Follow me on Twitter'}></CustomLink> for updates on new articles and more of my thinking.
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`query BioQuery {
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

export default BlogFooter

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import CustomLink from '../components/CustomLink'


function Footer() {
  return(
  <StaticQuery
      query={bioQuery}
      render={data => {
        const { social, email } = data.site.siteMetadata
        return (
    <footer className={'flex justify-center text-center py-8 px-12'}>
      <div>
      © 2021  · <CustomLink link={`https://twitter.com/${social.twitter}`} target={'_blank'} text={'Twitter'}></CustomLink> · <CustomLink link={`mailto:${email}?subject=Message from amran.cz`} target={'_blank'} text={'Email'}></CustomLink>  
      </div>
    </footer>
        )
    }}
  />
  )
}

export default Footer

const bioQuery = graphql`query BioQuery {
  site {
    siteMetadata {
      author
      email
      social {
        twitter
      }
    }
  }
}
`
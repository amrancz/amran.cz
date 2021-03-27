import React from 'react'
import { Link, graphql } from 'gatsby'

import Button from '../components/Button'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Image from '../components/Image'

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} width={'8xl'}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className={'flex items-stretch space-x-8'}>
          <div className={'bg-gray-700 flex-1 bg-opacity-10 rounded-xl p-12 space-y-4 mb-12'}>
              <Image
                    filename={"adam.png"}
                    className={'rounded-10xl w-2 h-2'}
                    alt={"profile picture of Adam"}
                  />
            <h1>Hey, I'm Adam</h1>
            <p>
                  Product designer and maker.
            </p>
            <p>
                  Currently designing at <a href={'https://www.productboard.com'} target={"_blank"}>Productboard</a> <br />
                  Making <a href={'https://www.untools.co'} target={"_blank"}>Untools.co</a> on the side.
            </p>
            <div className={'py-8'}>
              <Button primary={true} link={'/about'} text={'More about me'}></Button>
            </div>
          </div>
          <div className={'bg-gray-700 flex-1 bg-opacity-10 rounded-xl p-12 space-y-8 mb-12'}>
            <h2>Recent writings</h2>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div key={node.fields.slug} className={'py-8 space-y-4 mb-12'}>
                  <h4>
                    <Link to={node.fields.slug}>
                      {title}
                    </Link>
                  </h4>
                  <small>{node.frontmatter.date}</small>
                  <p>{node.frontmatter.perex}</p>
                </div>
              )
            })}
          </div>
        </div>
        
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: {frontmatter: {type: {eq: "blog-post"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            perex
          }
        }
      }
    }
  }
`

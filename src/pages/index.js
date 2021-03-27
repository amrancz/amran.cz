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
      <Layout location={this.props.location} width={'8xl'} spacing={'12'}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className={'flex flex-col lg:flex-row lg:items-stretch lg:space-x-8 space-y-8 lg:space-y-0'}>
          <div className={'bg-gradient-to-br from-green-500 to-blue-600 text-white flex-1 rounded-xl p-12 space-y-4'}>
              <Image
                    filename={"adam.png"}
                    className={'rounded-10xl w-2 h-2'}
                    alt={"profile picture of Adam"}
                  />
            <h1>Hey, I'm Adam</h1>
            <p className={"leading-10"}>
                  Product Designer at <a className={"bg-opacity-0 border-2 border-white border-opacity-20 font-medium py-1 px-1 rounded-lg text-white hover:bg-blue-100 hover:text-gray-900 hover:border-blue-100 duration-100"} href={'https://www.productboard.com'} target={"_blank"}>Productboard</a> <br />
                  Making <a className={"bg-opacity-0 border-2 border-white border-opacity-20 font-medium py-1 px-1 rounded-lg text-white hover:bg-blue-100 hover:text-gray-900 hover:border-blue-100 duration-100"} href={'https://www.untools.co'} target={"_blank"}>Untools.co</a> on the side.
            </p>
            <div className={'py-8'}>
              <Button primary={true} link={'/work'} text={'See my work'}></Button>
            </div>
          </div>
          <div className={'bg-gray-700 flex-1 bg-opacity-10 rounded-xl p-12 space-y-8 last:space-y-0'}>
            <Link to={'/writing'}>
              <h4 className={"text-gray-400 uppercase hover:text-blue-400 duration-150"}>Recent writings</h4>
            </Link>
            <div className={'space-y-4 last:space-y-0'}>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <div key={node.fields.slug} className={'py-4 space-y-1'}>
                    <Link to={node.fields.slug}>
                      <h4 className={"hover:text-blue-400 rounded-md duration-150"}>
                          {title}
                      </h4>
                    </Link>
                    <p className={"text-gray-300"}>{node.frontmatter.perex}</p>
                    <p className={"text-gray-600"}>— {node.frontmatter.date}</p>
                  </div>
                )
              })}
            </div>
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
    allMdx(limit:3, filter: {frontmatter: {type: {eq: "blog-post"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
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

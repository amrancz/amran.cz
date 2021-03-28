import React from 'react'
import { Link, graphql } from 'gatsby'

import Button from '../components/Button'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Portrait from '../images/portraitSmall.png'
import CustomLink from '../components/CustomLink'

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
          <div className={'bg-gradient-to-br from-green-500 to-blue-600 text-white lg:flex-1 rounded-2xl p-12 space-y-6'}>
           {/* } <img src={Portrait} alt={'Portrait of Adam Amran'} className={'rounded-2xl w-48 h-48'}></img> */}
            <h1>{`👋 Hey, I'm Adam`}</h1>
            <p className={"leading-10"}>
                  Product Designer at <CustomLink link={'https://www.productboard.com'} target={"_blank"} text={`Productboard`}></CustomLink> <br />
                  Making <CustomLink link={'https://www.untools.co'} target={"_blank"} text={`Untools.co`}></CustomLink> on the side.
            </p>
            <div className={'py-8 flex-col space-x-6'}>
              <Button primary={true} link={'/work'} text={'See my work'} textColor={'green-500'}></Button>
              <Button link={'/about'} text={'Learn more about me'}></Button>
            </div>
          </div>
          <div className={'bg-gray-700 lg:flex-1 lg:flex-grow bg-opacity-10 rounded-2xl p-12 space-y-8 last:space-y-0'}>
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

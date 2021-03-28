import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
class WritingIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} width={'8xl'} spacing={'12'}>
        <SEO
          title="Writing"
          keywords={[`blog`, `design`, `product design`]}
        />
        <div className={'flex flex-col lg:flex-row lg:items-stretch lg:space-x-8 space-y-8 lg:space-y-0'}>
          <div className={'bg-opacit-0 text-white lg:flex-1 rounded-2xl pt-12 space-y-6'}>
            <h1>Writing</h1>
            <p className={"leading-10 text-gray-300"}>
                  From time to time, I publish thoughts about design, side-projects and whatever else interests me at the moment.
            </p>
          </div>
          <div className={'bg-gray-700 lg:flex-2 lg:flex-grow bg-opacity-10 rounded-2xl p-12 space-y-4 last:space-y-0'}>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <div key={node.fields.slug} className={'py-4 space-y-1'}>
                    <Link to={`/writing${node.fields.slug}`}>
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
      </Layout>
    )
  }
}

export default WritingIndex

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

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
      <Layout location={this.props.location} title={"Writing"}  width={'4xl'}>
        <SEO
          title="Writing"
          keywords={[`blog`, `design`, `product design`]}
        />
        <div  className={'bg-gray-700 bg-opacity-10 rounded-xl p-16 w-10xl space-y-6 mb-12'}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <a href={node.fields.slug}>
                <div key={node.fields.slug}  className={'space-y-2 mb-12'}>
                  <h3 className={'hover:text-blue-100'}>
                    <Link to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <p className={"text-gray-300"}>{node.frontmatter.perex}</p>
                  <p className={"text-gray-600"}>— {node.frontmatter.date}</p>
                </div>
              </a>
            )
          })}
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

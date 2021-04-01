import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Image from '../components/Image'
import Layout from '../components/Layout'
import SEO from '../components/seo'
class CaseStudyTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx

    const images = this.props.data.allFile.edges.map(({ node }) => node.childImageSharp)

    return (
      <Layout location={this.props.location} title={post.frontmatter.title}  width={'4xl'} spacing={'12'}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <div>
        <Link to={'/work'} className={"text-gray-600 hover:text-blue-400"}>← Work</Link>
        </div>
        <div className={'w-full relative text-white overflow-hidden rounded-2xl flex shadow-lg'}>
          <div className={`w-full flex flex-col md:flex-row xl:flex-col bg-gradient-to-br from-${post.frontmatter.color}-500 to-${post.frontmatter.color}-700`}>
              <div className={'sm:flex-none md:w-auto flex flex-col items-start relative z-10 p-8 xl:p-16'}>
                <span className={`font-medium text-${post.frontmatter.color}-200 mb-2`}>{post.frontmatter.product}</span>
                <h1 className={'mb-8'}>{post.frontmatter.title}</h1>
              </div>
              <div className={'relative pr-6 pt-4 max-h-48 sm:mx-auto sm:block'}>
                <Image key={`${post.frontmatter.thumbnail}`} filename={`${post.frontmatter.thumbnail}.png`} style={'relative mb-4'}></Image>
              </div>
          </div>
        </div>
        <p>
          {post.frontmatter.date}
        </p>
        <MDXRenderer>{post.body}</MDXRenderer>

      </Layout>
    )
  }
}

export default CaseStudyTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        type
        date(formatString: "MMMM YYYY")
        product
        color
        thumbnail
      }
      body
    }
}
`

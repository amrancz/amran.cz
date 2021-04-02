import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}  width={'3xl'} spacing={'12'}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <div className={'space-y-6'}>
        <Link to={'/writing'} className={"text-gray-600 hover:text-blue-400"}>← Writing</Link>
          <h1 className={'leading-tight'}>{post.frontmatter.title}</h1>
          <p className={'text-gray-600'}>
            {post.frontmatter.date}
          </p>
        <hr className={'opacity-10'} />
        </div>
        <MDXRenderer>{post.body}</MDXRenderer>
        <Bio />

        <ul className={'flex flex-row flex-grow justify-between space-x-6'}>
          <li className={'flex flex-row flex-1'}>
            <div>
              {previous && (
                <Link className={'hover:text-blue-400 flex flex-row flex-1 space-x-1 '} to={previous.fields.slug} rel="prev">
                  <div>
                  ←
                  </div>
                  <div>
                  {previous.frontmatter.title}
                  </div>
                </Link>
              )}
            </div>
          </li>
          <li className={'flex flex-row flex-1'}>
            <div className={'text-right'}>
              {next && (
                <Link className={'hover:text-blue-400 flex flex-row flex-1 space-x-1 '} to={next.fields.slug} rel="ntext">
                  <div>
                  {next.frontmatter.title}
                  </div>
                  <div>
                    →
                  </div>
                </Link>
              )}
            </div>
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

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
      }
      body
    }
  }
`

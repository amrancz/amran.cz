import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer} from "gatsby-plugin-mdx"
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
export default class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const { previous, next } = this.props.pageContext

    // Custom typography components
    const H2 = props => <h2 className='pt-8' {...props} />
    const H3 = props => <h3 className='pt-4' {...props} />
    const H4 = props => <h4 className='pt-2' {...props} />

    return (
      <Layout location={this.props.location}  width={'3xl'} spacing={'6'}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <div className={'space-y-6'}>
        <Link to={'/writing'} className={"text-gray-600 hover:text-blue-400"}>← Writing</Link>
          <h1 className={'leading-tight'}>{post.frontmatter.title}</h1>
          <p className={'text-gray-600'}>
            {post.frontmatter.date}
          </p>
        <hr className={'opacity-10'} />
        </div>
        <MDXProvider
          components={{
            h2: H2,
            h3: H3,
            h4: H4
          }}>
           <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>

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

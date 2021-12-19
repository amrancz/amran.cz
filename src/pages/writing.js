import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
class WritingIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} width={'3xl'} spacing={'12'}>
        <SEO
          title="Writing / Adam Amran"
          keywords={[`blog`, `design`, `product design`]}
        />
        <div className={'flex flex-col space-y-8'}>
          <div className={'bg-opacit-0 text-slate-900 dark:text-white flex-1 rounded-2xl  space-y-6'}>
            <Link to={'/'} className={"text-slate-600 hover:text-slate-400"}>← Home</Link>
            <h1>Writing</h1>
            <p className={"leading-8 text-slate-600 dark:text-slate-300"}>
                  My thoughts about (product) design, side-projects and whatever else interests me at the moment.
            </p>
          </div>
          <div className={'bg-slate-700 flex-2 lg:flex-grow bg-opacity-10 rounded-2xl p-8 md:p-12  space-y-4 last:space-y-0'}>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <div key={node.fields.slug} className={'py-4 space-y-1'}>
                    <Link to={`/writing${node.fields.slug}`}>
                      <h4 className={"hover:text-slate-400 rounded-md duration-150"}>
                          {title}
                      </h4>
                    </Link>
                    <p className={"text-slate-600 dark:text-slate-300"}>{node.frontmatter.perex}</p>
                    <p className={"text-slate-400 dark:text-slate-600"}>— {node.frontmatter.date}</p>
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

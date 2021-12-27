import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
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
          <div className={'bg-opacit-0 text-slate-900 dark:text-white flex-1 rounded-2xl  space-y-12'}>
            <Link to={'/'}>
              <div id="intro" className={'flex max-w-[11rem] border border-solid border-slate-700 text-slate-600 hover:text-slate-400 transition-150 items-center rounded-xl p-2 space-x-2'}>
                <span>←</span>
                <div className={'w-5 h-5 rounded-full bg-slate-800'}>
                  <StaticImage 
                    src={'../images/portraitSmall.jpg'}
                    alt='Portrait of Adam'
                    loading='eager'
                    imgStyle={{
                      justifySelf: 'center',
                      textAlign: 'center',
                      borderRadius: '10rem',
                      overflow: 'hidden',
                      backgroundColor: 'none',
                    }}
                  ></StaticImage>
                </div>
                <span> Adam Amran</span>
              </div>
            </Link>
            <div className={'space-y-4'}>
              <h1>Writing</h1>
              <p className={"leading-8 text-slate-600 dark:text-slate-300"}>
                    My thoughts about product design, side-projects and everything else I'm curious about.
              </p>
            </div>
            
          </div>
          <div className={'bg-slate-100 dark:bg-slate-800 dark:highlight-white/5 shadow-md dark:shadow-lg flex-2 lg:flex-grow rounded-2xl p-8 md:p-12  space-y-6 last:space-y-0'}>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <div key={node.fields.slug} className={'py-6 space-y-1'}>
                    <Link to={`/writing${node.fields.slug}`}>
                      <h3 className={"hover:text-blue-500 rounded-md duration-150"}>
                        {title}
                      </h3>
                    </Link>
                    <p className={"text-slate-600 dark:text-slate-300"}>{node.frontmatter.perex}</p>
                    <p className={"text-slate-400 dark:text-slate-500"}>— {node.frontmatter.date}</p>
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

import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer} from "gatsby-plugin-mdx"
import BlogFooter from '../components/BlogFooter'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import SEO from '../components/seo'

import { ArrowUpIcon } from '@heroicons/react/outline'
export default class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const allBlogPosts = this.props.data.allMdx.edges
    function recommendArticle(article){
      function filterArticles(a){
        return a.node.frontmatter.title != post.frontmatter.title
      }
      const result = article.filter(filterArticles)
      return (
        result[Math.floor(Math.random()*result.length)]
      )
    }

    // Custom typography components
    const H2 = props => <h2 className='pt-8' {...props} />
    const H3 = props => <h3 className='pt-4' {...props} />
    const H4 = props => <h4 className='pt-2' {...props} />
    const P = props => <p className='leading-loose' {...props} />
    const HR = props => <hr className='opacity-20 clear-both !mt-4 pb-4 md:pb-8' {...props} />
    const A = props => <a className={'bg-slate-500 dark:bg-slate-700 bg-opacity-20 py-1 px-1 rounded-md font-medium text-slate-900 dark:text-white hover:text-white hover:bg-slate-600 duration-100 items-center'} {...props} />
    const nextArticle = recommendArticle(allBlogPosts).node

    return (
      <Layout location={this.props.location}  width={'3xl'} spacing={'8'}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
          <div className={'px-0 md:px-12 space-y-8 pb-8'}>
            <div className={'space-y-6'}>
            <div className={'flex flex-row pb-6 items-center font-medium  space-x-4'}>
              <Link to={'/'}>
                <div id="intro" className={'flex max-w-[11rem] text-slate-400 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-400 items-center rounded-xl space-x-2'}>
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
              <Link to={'/writing'}>
                <div id="intro" className={'flex max-w-[6rem] border border-solid border-slate-300 dark:border-slate-700 text-slate-400 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-400 duration-150 items-center rounded-xl p-2 space-x-2'}>
                  <span>← Writing</span>
                </div>
              </Link>
            </div>
              <h1 className={'leading-none'}>{post.frontmatter.title}</h1>
              <p className={'text-slate-600'}>
                {post.frontmatter.date}
              </p>
            <hr className={'opacity-10 py-2'} />
          </div>
          <MDXProvider
            components={{
              h2: H2,
              h3: H3,
              h4: H4,
              p: P,
              hr: HR,
              a: A,
            }}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </div>

        <BlogFooter />
        
        <div className={'px-0 md:px-12'}>
          <div className={'pt-8 space-y-4'}>
            <h4 className={"text-slate-400 dark:text-slate-600 uppercase"}>Read next</h4>
            <div key={nextArticle.fields.slug} className={'pt-2 space-y-1'}>
              <Link to={`/writing${nextArticle.fields.slug}`}>
                <h3 className={"hover:text-sky-400 rounded-md duration-150"}>
                    {nextArticle.frontmatter.title}
                </h3>
              </Link>
              <p className={"text-slate-600 dark:text-slate-300"}>{nextArticle.frontmatter.perex}</p>
              <p className={"text-slate-400 dark:text-slate-600"}>— {nextArticle.frontmatter.date}</p>
            </div>
          </div>
        </div>
        <hr className={'opacity-10'} />

        <button id="scroll-btn" className="transition-opacity duration-200 hidden w-12 h-12 dark:bg-white/10 bg-black/20 dark:hover:bg-slate-600 hover:bg-slate-300 fixed right-6 bottom-6 rounded-4xl" title="Scroll to top"><ArrowUpIcon className={'h-6 w-6 text-slate-900 dark:text-white mx-auto'} /></button>

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
    mdx(fields: { slug: { eq: $slug }}, frontmatter: {type: {eq: "blog-post"}}) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        type
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
    allMdx(filter: {frontmatter: {type: {eq: "blog-post"}}}) {
      edges {
        node {
          frontmatter {
            title
            type
            perex
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

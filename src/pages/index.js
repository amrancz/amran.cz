import React from 'react'
import { Link, graphql } from 'gatsby'

import Button from '../components/Button'
import Layout from '../components/Layout'
import Spotify from '../components/Spotify'
import SEO from '../components/seo'
import CustomLink from '../components/CustomLink'
import { StaticImage } from 'gatsby-plugin-image'

class Index extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMdx.edges
    return (
      <Layout location={this.props.location} width={'6xl'} spacing={'12'}>
        <SEO
          title="Adam Amran – Product Designer"
          keywords={[`product designer`, `portfolio`, `adam amran`, `blog`]}
        />
        <div className={'flex flex-col max-w-6xl lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0'}>

          <div id="column1" className={'flex-col basis-3/5 space-y-6'}>
            <div id="intro" className={'relative mx-auto rounded-xl flex items-center pl-4 gap-6 bg-slate-100 dark:bg-slate-800 dark:highlight-white/5 shadow-md dark:shadow-lg'}>
              <div className={'w-20 h-20 rounded-full bg-slate-800 shadow-lg'}>
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
              <div className={'min-w-0 py-6'}>
                <h3 className={'text-slate-900 font-bold text-md sm:text-2xl truncate dark:text-slate-200'}>{`👋 I'm Adam Amran`}</h3>
                <span className={"text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400"}>
                  Product designer and maker
                </span>
              </div>
            </div>

            <div id="writing" className={'bg-slate-100 dark:bg-slate-800 dark:highlight-white/5 shadow-md dark:shadow-lg rounded-xl p-6 md:p-8 space-y-6'}>
              <Link to={'/writing'}>
                <h4 className={"text-slate-400 dark:text-slate-500 uppercase hover:text-blue-600 dark:hover:text-blue-500 duration-150"}>Writing →</h4>
              </Link>
              <div className={'space-y-8'}>
                {posts.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug
                  return (
                    <div key={node.fields.slug} className={'pt-2 space-y-1'}>
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
          </div>

          <div id="column2" className={'flex-col basis-2/5 space-y-6'}>
            <div id="now" className={'bg-slate-100 dark:bg-slate-800 dark:highlight-white/5 shadow-md dark:shadow-lg rounded-xl p-6 md:p-8 space-y-6 last:space-y-0'}>
              <div class={'flex space-x-2 items-center'}>
                <div class={'w-2 h-2 rounded-xl block bg-green-600 animate-pulse'}></div>
                <h4 className={"flex-col text-slate-400 dark:text-slate-500 uppercase"}>Now</h4>
              </div>
              <div>Designing <CustomLink link={'https://www.productboard.com'} target={"_blank"} text={`Productboard`}></CustomLink> <br /></div>
              <div>Building <CustomLink link={'https://www.untools.co'} target={"_blank"} text={`Untools.co`}></CustomLink> <br /></div>
              <div>Reading TBD <br /></div>
              <span className={'flex flex-wrap'}>{`🎧 Listening to `}{' '} <Spotify></Spotify> </span>
            </div>

            <div>
              <a href={'/work'}>
                <div className={"bg-gradient-to-br from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 shadow-md dark:shadow-lg duration-150 transition-all rounded-xl p-6 md:p-8 space-y-6"}>
                  <h4 className={"text-slate-100 dark:text-slate-100 uppercase"}>Discover my work →</h4>
                </div>
              </a>
            </div>

            <div id="about" className={'bg-slate-100 dark:bg-slate-800 dark:highlight-white/5 shadow-md dark:shadow-lg rounded-xl p-6 md:p-8 space-y-6'}>
                <h4 className={"text-slate-400 dark:text-slate-500 uppercase"}>More about me</h4>
                <div className={"space-y-4 text-slate-600 dark:text-slate-300"}>
                  <p>Since 2011, I have been designing digital products: SaaS, mobile apps, e-commerce and websites. </p>
                  <p>I most enjoy working in an empowered product team:
                  Discovering the right thing to build, designing collaboratively, validating ideas quickly and shipping iteratively.</p>
                  <p>Where to find me on the internet: </p>
                  <div className={'space-x-4'}>
                    <CustomLink link={'https://www.twitter.com/amrancz'} style={'themeable'} target={"_blank"} text={`🐦 Twitter`}></CustomLink>
                    <CustomLink link={'https://www.linkedin.com/in/adam-amran-98950222/'} style={'themeable'} target={"_blank"} text={`💼 LinkedIn`}></CustomLink>
                    <CustomLink link={'https://www.dribbble.com/amrancz'} style={'themeable'} target={"_blank"} text={`🏀 Dribbble`}></CustomLink>
                  </div>
                
                </div>
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
    allMdx(limit:5, filter: {frontmatter: {type: {eq: "blog-post"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
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

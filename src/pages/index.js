import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Spotify from '../components/Spotify'
import SEO from '../components/seo'
import CustomLink from '../components/CustomLink'
import { StaticImage } from 'gatsby-plugin-image'
import LogoPB from '../images/logoPB.svg'
import LogoKontent from '../images/logoKontent.svg'
import LogoGrason from '../images/logoGrason.svg'

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
            <div id="intro" className={'relative mx-auto rounded-xl flex items-center pl-4 space-x-4 bg-gradient-to-br from-teal-500 to-cyan-600 dark:highlight-white/5 shadow-md dark:shadow-lg'}>
              <div className={'w-20 h-20 rounded-full bg-slate-800'}>
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
                <h3 className={'text-white font-bold text-md sm:text-2xl truncate '}>{`👋 I'm Adam Amran`}</h3>
                <span className={"text-white font-medium text-sm sm:text-base leading-tight truncate "}>
                  Product designer and maker
                </span>
              </div>
            </div>

            <div>
              <a href={'/work'}>
                <div className={"flex flex-row border bg-white dark:bg-opacity-0 border border-solid border-slate-200 dark:border-slate-500 text-slate-400 dark:text-slate-500 hover:text-white hover:bg-gradient-to-br hover:from-indigo-500 hover:to-sky-600 hover:border-opacity-0 duration-650 ease-in shadow-md dark:shadow-lg items-center justify-between transition-all rounded-xl px-6 md:px-8 py-6"}>
                  <h4 className={"uppercase"}>Discover my work →</h4>
                  <div className={"flex flex-row gap-2"}>
                    <span className={'flex items-center justify-center w-10 h-10 rounded-full'}>
                      <LogoPB></LogoPB>
                    </span>
                    <span className={'flex items-center justify-center w-10 h-10 rounded-full'}>
                      <LogoKontent></LogoKontent>
                    </span>
                    <span className={'flex items-center justify-center w-10 h-10 rounded-full'}>
                      <LogoGrason></LogoGrason>
                    </span>
                    
                  </div>
                </div>
              </a>
            </div>

            <div id="writing" className={'border border-solid border-slate-200 dark:border-opacity-0 bg-slate-100 dark:bg-slate-800 dark:highlight-white/5 shadow-md dark:shadow-lg rounded-xl p-6 md:p-8 space-y-6'}>
              <Link to={'/writing'}>
                <h4 className={"text-slate-400 dark:text-slate-500 uppercase hover:text-sky-600 dark:hover:text-sky-500 duration-150"}>Writing →</h4>
              </Link>
              <div className={'space-y-8'}>
                {posts.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug
                  return (
                    <div key={node.fields.slug} className={'pt-2 space-y-1'}>
                      <Link to={`/writing${node.fields.slug}`}>
                        <h3 className={"hover:text-sky-500 rounded-md duration-150"}>
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
            <div id="now" className={'border border-solid border-slate-200 dark:border-opacity-0 bg-slate-100 dark:bg-slate-800 dark:highlight-white/5 shadow-md dark:shadow-lg rounded-xl p-6 md:p-8 space-y-6 last:space-y-0'}>
              <div class={'flex space-x-2 items-center'}>
                <div class={'w-2 h-2 rounded-xl block bg-green-600 animate-pulse ml-1'}></div>
                <h4 className={"flex-col text-slate-400 dark:text-slate-500 uppercase"}>Now</h4>
              </div>
              <div><span className={'text-slate-500 dark:text-slate-400'}>{`👨‍💻 Designing `} </span> <CustomLink link={'https://www.productboard.com'} target={"_blank"} text={`Productboard`}></CustomLink> <br /></div>
              <div><span className={'text-slate-500 dark:text-slate-400'}>{`🧠 Building `} </span> <CustomLink link={'https://www.untools.co'} target={"_blank"} text={`Untools.co`}></CustomLink> <br /></div>
              <span className={'flex flex-wrap gap-2'}>
                      <span className={'text-slate-500 dark:text-slate-400'}>{`📚 Reading `} </span>
                      <div className={'flex flex-wrap gap-2 pl-6'}>
                      <span><CustomLink link={'https://www.goodreads.com/book/show/53503835-the-art-of-doing-science-and-engineering'} target={'_blank'} className={"hover:text-sky-500 rounded-md duration-150 "}
                      text={`'The Art of Doing Science and Engineering: Learning to Learn' by Richard Hamming`}></CustomLink></span> 
                      </div>
                </span>
              <div className={'flex flex-col gap-2'}>
                <span className={'text-slate-500 dark:text-slate-400'}>{`🎧 Listening to `} <br/> </span>
                <p className={'flex flex-wrap pl-6'}> <Spotify></Spotify> </p>
              </div>
              
            </div>

            <div id="about" className={'border border-solid border-slate-200 dark:border-slate-700 shadow-md dark:shadow-lg rounded-xl p-6 md:p-8 space-y-6'}>
                <h4 className={"text-slate-400 dark:text-slate-500 uppercase"}>More about me</h4>
                <div className={"space-y-4 text-slate-600 dark:text-slate-300"}>
                  <p>Since 2011, I have been designing digital products: SaaS, mobile apps, e-commerce and websites. </p>
                  <p>I most enjoy working in an empowered product team:
                  Discovering the right thing to build, designing collaboratively, validating ideas quickly and shipping iteratively.</p>
                  <p>Where to find me on the internet: </p>
                  <div className={'space-x-4'}>
                    <CustomLink link={'https://www.twitter.com/amrancz'} target={"_blank"} text={`🐦 Twitter`}></CustomLink>
                    <CustomLink link={'https://www.linkedin.com/in/adam-amran-98950222/'} target={"_blank"} text={`💼 LinkedIn`}></CustomLink>
                    <CustomLink link={'https://www.dribbble.com/amrancz'} target={"_blank"} text={`🏀 Dribbble`}></CustomLink>
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

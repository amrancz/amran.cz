import React from 'react'
import { Link, graphql } from 'gatsby'

import Button from '../components/Button'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import CustomLink from '../components/CustomLink'
import { StaticImage } from 'gatsby-plugin-image'

class Index extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMdx.edges
    return (
      <Layout location={this.props.location} width={'8xl'} spacing={'12'}>
        <SEO
          title="Adam Amran – Product Designer"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className={'flex flex-col lg:flex-row items-stretch lg:space-x-8 space-y-8 lg:space-y-0'}>

          <div id="column1" className={'flex-col space-y-8'}>
            <div id="intro" className={'flex bg-gradient-to-br from-green-500 to-blue-600 text-white lg:flex-1 rounded-2xl p-6 md:p-12 space-x-4 md:space-x-6'}>
              <div
              className={'w-20 h-20 rounded-full bg-green-800 hidden lg:block'}>
                <StaticImage 
                  src={'../images/portraitSmall.jpg'}
                  alt='Portrait of Adam'
                  loading='eager'
                  style={{
                    justifySelf: 'center',
                    textAlign: 'center',
                    borderRadius: '10rem',
                    overflow: 'hidden',
                    backgroundColor: 'none',
                  }}
                  imgStyle={{
                    borderRadius: '10rem',
                    overflow: 'hidden',
                    backgroundColor: 'none',
                  }}
                ></StaticImage>
              </div>
              <div className={'flex-col space-y-4'}>
                <h2>{`Hi! I'm Adam`}</h2>
                <span className={"leading-10"}>
                  Product designer and maker
                </span>
              </div>
              
            </div>
            <div id="writing" className={'bg-gray-700 lg:flex-1 lg:flex-grow bg-opacity-10 rounded-2xl p-6 md:p-12 space-y-6 last:space-y-0'}>
              <Link to={'/writing'}>
                <h4 className={"text-gray-400 dark:text-gray-600 uppercase hover:text-gray-600 dark:hover:text-gray-400 duration-150"}>Recent writings</h4>
              </Link>
              <div className={'space-y-4 last:space-y-0'}>
                {posts.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug
                  return (
                    <div key={node.fields.slug} className={'pt-2 space-y-1'}>
                      <Link to={`/writing${node.fields.slug}`}>
                        <h4 className={"hover:text-gray-400 rounded-md duration-150"}>
                            {title}
                        </h4>
                      </Link>
                      <p className={"text-gray-600 dark:text-gray-300"}>{node.frontmatter.perex}</p>
                      <p className={"text-gray-400 dark:text-gray-600"}>— {node.frontmatter.date}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div id="column2" className={'flex-col space-y-8'}>
          <div id="now" className={'bg-gray-700 lg:flex-1 lg:flex-grow bg-opacity-10 rounded-2xl p-6 md:p-12 space-y-6 last:space-y-0'}>
              <h4 className={"text-gray-600 dark:text-gray-400 uppercase"}>What I'm up to these days</h4>
              <div>Designing <CustomLink link={'https://www.productboard.com'} target={"_blank"} text={`Productboard`}></CustomLink> <br /></div>
              <div>Working on something new at <CustomLink link={'https://www.untools.co'} target={"_blank"} text={`Untools.co`}></CustomLink> <br /></div>
              <div>Reading TBD <br /></div>
              <div>Listening to TBD <br /></div>

            </div>


            <div id="about" className={'bg-gray-700 lg:flex-1 lg:flex-grow bg-opacity-10 rounded-2xl p-6 md:p-12 space-y-6 last:space-y-0'}>
                <h4>More about me</h4>
                <p>I've been a designer for a decade.</p>
                <Button primary={true} link={'/work'} text={'See my work'} textColor={'gray-900'}></Button>
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
    allMdx(limit:3, filter: {frontmatter: {type: {eq: "blog-post"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
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

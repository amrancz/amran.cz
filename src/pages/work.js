import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Button from '../components/Button'
import SEO from '../components/seo'
import Image from '../components/Image'
class WorkIndex extends React.Component {
  render() {
    const { data, title } = this.props
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} width={'8xl'} spacing={'16'}>
        <SEO
          title="Work / Adam Amran"
          keywords={[`product design`, `case studies`, `ux design`,]}
        />
        <div className={'flex flex-col xl:flex-row xl:items-stretch xl:space-x-8 space-y-8 xl:space-y-0'}>
        {posts.reverse().map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const product = node.frontmatter.product
            const color = node.frontmatter.color
            const thumbnail = node.frontmatter.thumbnail
            return (
              <div className={'w-full relative text-white overflow-hidden rounded-2xl flex shadow-lg'}>
                <div key={node.fields.slug}  className={`w-full flex flex-col md:flex-row xl:flex-col bg-gradient-to-br from-${color}-500 to-${color}-700`}>
                  <div className={'sm:max-w-md sm:flex-none md:w-auto flex flex-col items-start relative z-10 p-8 xl:p-16'}>
                    <span className={`font-medium text-${color}-200 mb-2`}>{product}</span>
                    <h3 className={'mb-8'}>{title}</h3>
                    <Button primary={true} link={`work${node.fields.slug}`} text={'Read case study'} textColor={`${color}-700`}></Button>
                  </div>
                  <div className={'relative pr-6 pt-4 max-h-48 sm:mx-auto sm:block'}>
                    <Image key={`${thumbnail}`} filename={`${thumbnail}.png`} style={'relative mb-4'}></Image>
                  </div>
                </div>
              </div>
            )
          })}
          <div className={'w-full relative text-white overflow-hidden rounded-2xl flex shadow-lg'}>
            <div className={`w-full flex flex-col md:flex-row xl:flex-col bg-opacity-10 bg-purple-600 `}>
              <div className={'sm:max-w-md sm:flex-none md:w-auto flex flex-col items-start relative z-10 p-8 xl:p-16'}>
                <span className={'font-medium text-white opacity-50 mb-2'}>Untools (Side project)</span>
                <h3 className={'mb-8'}>Building a collection of tools for better thinking</h3>
                <Button primary={true} link={'https://untools.co'} target={'_blank'} text={'Visit untools.co'} textColor={'purple-800'}></Button>
              </div>
              <div className={'relative pr-6 pt-4 max-h-48 sm:mx-auto sm:block'}>
                <Image key={'untoolsThumb'} filename={'untoolsThumb.png'} style={'relative mb-4'}></Image>
              </div>
            </div>
          </div>
          
        </div>
      </Layout>
    )
  }
}

export default WorkIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: {frontmatter: {type: {eq: "case-study"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            product
            type
            color
            thumbnail
          }
        }
      }
    }
    file(absolutePath: {
      regex: "/\\/images\\/untools\\.png/"
    }) {
      childImageSharp {
        fixed(width: 924) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

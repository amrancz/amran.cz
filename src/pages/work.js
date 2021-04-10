import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Button from '../components/Button'
import SEO from '../components/seo'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
class Work extends React.Component {
  render() {
    const { data } = this.props
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
            const image = getImage(data[thumbnail])
            return (
              <div className={'w-full relative text-white overflow-hidden rounded-2xl flex'}>
                <div key={node.fields.slug}  className={`w-full flex flex-1 flex-col md:flex-row xl:flex-col bg-gradient-to-br from-${color}-500 to-${color}-700`}>
                  {/* purgecss: from-yellow-500 to-yellow-700 from-blue-500 to-blue-700 */}
                  <div className={'sm:max-w-md sm:flex-none md:w-auto flex flex-col items-start relative p-8 xl:p-12'}>
                    <span className={`font-medium text-${color}-200 mb-2`}>{product}</span>
                    <h3 className={'mb-8'}>{title}</h3>
                    <Button primary={true} link={`work${node.fields.slug}`} text={'Read case study'} textColor={`${color}-700`}></Button>
                  </div>
                  <div className={'relative max-h-48 overflow-visible'}>
                    <GatsbyImage
                      key={product}
                      image={image}
                      loading='eager'
                      alt={`${product} thumbnail`}
                    ></GatsbyImage>
                  </div>
                </div>
              </div>
            )
          })}
          <div className={'w-full relative text-white overflow-hidden rounded-2xl flex shadow-lg'}>
            <div className={`w-full flex flex-col md:flex-row xl:flex-col bg-opacity-10 bg-purple-600 `}>
              <div className={'sm:max-w-md sm:flex-none md:w-auto flex flex-col items-start relative z-10 p-8 xl:p-12'}>
                <span className={'font-medium text-white opacity-50 mb-2'}>Untools (Side project)</span>
                <h3 className={'mb-8'}>Building a collection of tools for better thinking</h3>
                <Button primary={true} link={'https://untools.co'} target={'_blank'} text={'Visit untools.co'} textColor={'purple-800'}></Button>
              </div>
              <div className={'relative max-h-48 overflow-visible'}>
                <StaticImage 
                  src={'../images/untoolsThumb.png'}
                  alt='Untools Thumbnail'
                  key='Untools Thumbnail'
                  loading='eager'
                  width={711}
                  height={400}
                  layout={'constrained'}
                ></StaticImage>
              </div>
            </div>
          </div>
          
        </div>
      </Layout>
    )
  }
}

export default Work

export const pageQuery = graphql`{
  allMdx(
    filter: {frontmatter: {type: {eq: "case-study"}}}
    sort: {fields: [frontmatter___date], order: DESC}
  ) {
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
  grasonThumb: file(relativePath: {eq: "grasonThumb.png"}) {
    childImageSharp {
      gatsbyImageData(
        backgroundColor: "transparent"
        placeholder: BLURRED
        layout: CONSTRAINED
      )
    }
  }
  kontentThumb: file(relativePath: {eq: "kontentThumb.png"}) {
    childImageSharp {
      gatsbyImageData(
        backgroundColor: "transparent"
        placeholder: BLURRED
        layout: CONSTRAINED
      )
    }
  }
}
`

import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Button from '../components/Button'
import SEO from '../components/seo'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
class Work extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} width={'6xl'} spacing={'12'}>
        <SEO
          title="Work / Adam Amran"
          keywords={[`product design`, `case studies`, `ux design`,]}
        />
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
        <h1>Work</h1>
        <div className={'flex flex-wrap gap-4'}>
        <div className={'w-full relative text-white overflow-hidden rounded-2xl flex min-w-min max-w-lg shadow-lg'}>
            <div className={`w-full flex flex-col md:flex-row xl:flex-col border border-solid border-white border-opacity-20`}>
              <div className={'sm:max-w-md sm:flex-none md:w-auto flex flex-col items-start relative z-10 p-8 xl:p-12'}>
                <span className={'font-medium text-white opacity-50 mb-2'}>Productboard (B2B Saas)</span>
                <h3 className={'mb-8'}>Integrating Productboard with Salesforce Opportunities </h3>
                <Button primary={true} link={'https://dribbble.com/shots/15942362-Salesforce-Opportunities-integration'} target={'_blank'} text={'See Dribbble shot'} textColor={'blue-700'}></Button>
              </div>
              <div className={'relative max-h-48 overflow-visible'}>
                <StaticImage 
                  src={'../images/pb-sfdc-opportunities.png'}
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
        {posts.reverse().map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const product = node.frontmatter.product
            const color = node.frontmatter.color
            const thumbnail = node.frontmatter.thumbnail
            const image = getImage(data[thumbnail])
            return (
              <div className={'relative text-white overflow-hidden rounded-2xl min-w-min max-w-lg flex shadow-lg'}>
                <div key={node.fields.slug}  className={`w-full flex flex-1 flex-col md:flex-row xl:flex-col bg-gradient-to-br from-${color}-500 to-${color}-700`}>
                  {/* purgecss: from-yellow-500 to-yellow-700 from-blue-500 to-blue-700 */}
                  <div className={'sm:max-w-md sm:flex-none md:w-auto flex flex-col items-start relative p-8 xl:p-12'}>
                    <span className={`font-medium text-${color}-200 mb-2`}>{product}</span>
                    <h3 className={'mb-8'}>{title}</h3>
                    <Button primary={true} link={`/work${node.fields.slug}`} text={'Read case study'} textColor={`${color}-700`}></Button>
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
          <div className={'w-full relative text-white overflow-hidden rounded-2xl flex min-w-min max-w-lg shadow-lg'}>
            <div className={`w-full flex flex-col md:flex-row xl:flex-col border border-solid border-white border-opacity-20`}>
              <div className={'sm:max-w-md sm:flex-none md:w-auto flex flex-col items-start relative z-10 p-8 xl:p-12'}>
                <span className={'font-medium text-white opacity-50 mb-2'}>Kentico Kontent (B2B Saas)</span>
                <h3 className={'mb-8'}>New commenting experience for Kontent</h3>
                <Button primary={true} link={'https://kontent.ai/blog/improved-commenting-experience'} target={'_blank'} text={'Read release article'} textColor={'yellow-700'}></Button>
              </div>
              <div className={'relative max-h-48 overflow-visible'}>
                <StaticImage 
                  src={'https://cdn.dribbble.com/users/7373/screenshots/10996897/media/ea7ff82de67c5869daad922975792713.png?compress=1&resize=1600x1200'}
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
          <div className={'w-full relative text-white overflow-hidden rounded-2xl flex min-w-min max-w-lg shadow-lg'}>
            <div className={`w-full flex flex-col md:flex-row xl:flex-col bg-gradient-to-br from-purple-700 to-purple-800`}>
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

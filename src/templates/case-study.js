import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer} from "gatsby-plugin-mdx"
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/seo'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'

class CaseStudyTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const image = getImage(this.props.data[post.frontmatter.thumbnail])

    // Custom typography components
    const H2 = props => <h2 className='pt-8 text-center' {...props} />
    const H3 = props => <h3 className='pt-4' {...props} />
    const H4 = props => <h4 className='pt-2' {...props} />
    const P = props => <p className='leading-loose' {...props} />
    const Quote = props => <blockquote className={`bg-${post.frontmatter.color}-200 text-gray-900 tracking-tight leading-tight space-y-4 p-8 rounded-lg`} {...props} />
    {/* purgecss: bg-yellow-200 bg-blue-200 */}
    const Strong = props => <strong className={`tracking-tight`} {...props} />
    const HR = props => <hr className='opacity-10 clear-both mt-8 pb-8' {...props} />
    const A = props => <a className={`bg-gray-500 dark:bg-white bg-opacity-20 py-1 px-1 rounded-md font-medium text-gray-900 dark:text-white hover:text-white hover:bg-black hover:bg-opacity-60 duration-100`} {...props} />
    {/* purgecss: text-yellow-600 text-blue-600 */}
    const Img = props => <img className='rounded-lg' {...props} />

    return (
      
      <div className={'bg-grey-900'}>
        <SEO title={post.frontmatter.title} description={post.frontmatter.tite} />
        <Header></Header>
        <div>
          <div className={'w-full relative text-white overflow-hidden flex'}>
            <div className={`w-full flex flex-1 flex-col bg-gradient-to-t pt-32 px-8 from-${post.frontmatter.color}-500 to-${post.frontmatter.color}-600`}>
             {/* purgecss: from-yellow-500 to-yellow-600 from-blue-500 to-blue-600 */}
              <div className={'flex flex-col items-start relative max-w-4xl mx-auto'}>
                <span className={`font-medium text-${post.frontmatter.color}-200`}>{post.frontmatter.product}</span>
                <span className={`font-medium text-${post.frontmatter.color}-200 pb-4`}>{post.frontmatter.years}</span>
                {/* purgecss: text-yellow-200 text-blue-200 */}
                <h1>{post.frontmatter.title}</h1>
              </div>
              <div className={`bg-transparent pt-12`}>
                <div className={'flex flex-col md:flex-row space-x-0 md:space-x-12 space-y-6 md:space-y-0 relative max-w-4xl mx-auto'}>
                <div className={'space-y-2'}>
                    <h5 className={`font-bold text-${post.frontmatter.color}-900 uppercase`}>Team</h5>
                    <p>{post.frontmatter.team}</p>
                  </div>
                  <div className={'space-y-2'}>
                    <h5 className={`font-bold text-${post.frontmatter.color}-900 uppercase`}>Role</h5>
                    {/* purgecss: text-yellow-900 text-blue-900 */}
                    <p>{post.frontmatter.role}</p>
                  </div>
                  <div className={'space-y-2'}>
                    <h5 className={`font-bold text-${post.frontmatter.color}-900 uppercase`}>Outcome</h5>
                    <p>{post.frontmatter.outcome}</p>
                  </div>
                </div>
              </div>
              <div className={'relative px-4 py-12 mx-auto max-h-68 overflow-visible'}>
                <GatsbyImage
                        image={image}
                        key={post.frontmatter.thumbnail}
                        loading='eager'
                        alt={`${post.frontmatter.thumbnail} thumbnail`}
                        style={{
                          maxWidth: 800,
                        }}
                ></GatsbyImage>
              </div>
            </div>
          </div>
        </div>
        <div className={`relative pb-4 px-6 py-16 md:py-24 md:pb-4 md:px-10 sm:max-w-3xl sm:mx-auto space-y-6`}>
          {/* purgecss: max-w-3xl max-w-4xl max-w-8xl space-y-8 space-y-12 space-y-16 */}
          <MDXProvider
            components={{
              h2: H2,
              h3: H3,
              h4: H4,
              p: P,
              hr: HR,
              blockquote: Quote,
              strong: Strong,
              a: A,
              img: Img,
            }}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default CaseStudyTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        type
        years
        product
        color
        thumbnail
        role
        outcome
        team
        }
      body
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

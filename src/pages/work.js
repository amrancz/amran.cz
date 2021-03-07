import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Image from '../components/Image'
import { StaticImage } from "gatsby-plugin-image"
class WorkIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={"Work"}>
        <SEO
          title="Work"
          keywords={[`product design`, `case studies`, `ux design`,]}
        />
        <h2 className={'my-10'}>Side projects</h2>
        <a href={'https://untools.co'} className={'hover:bg-opacity-20'} target={'blank'}>
          <div className={'bg-pink-700 bg-opacity-10 hover:bg-opacity-20 rounded-xl p-16 w-10xl space-y-4 mb-12'}>
            <div className={'font-bold'}>Untools <span className={'opacity-50'}>2020</span></div>
            <h3>Tools for better thinking</h3>
            <div className={'mt-4'}>
              <div className={'inline px-5 py-3 rounded-4xl font-bold text-pink-500 bg-pink-700 bg-opacity-10'} >Visit untools.co</div>
            </div>
            <Image src={'https://untools.co/untools-worksheets.png'}></Image>
            <StaticImage src={'https://untools.co/untools-worksheets.png'} alt={'Untools preview'}></StaticImage>
          </div>
        </a>
        <h2 className={'my-10'}>Case studies</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const product = node.frontmatter.product
          const color = node.frontmatter.color
          return (
            <div key={node.fields.slug}  className={`bg-${color}-700 bg-opacity-10 hover:bg-opacity-20 rounded-xl p-16 w-10xl space-y-4 mb-12`}>
              <div className={'font-bold'}>{product}  <span className={'opacity-50'}>2020</span></div>
              <h3>
                <Link to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <div className={'mt-4'}>
                <div className={`inline px-5 py-3 rounded-4xl font-bold text-${color}-500 bg-${color}-700 bg-opacity-10`} >Read case study</div>
              </div>
            </div>
          )
        })}
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
            date(formatString: "MMMM DD, YYYY")
            title
            product
            type
            color
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

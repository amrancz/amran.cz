import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Image from '../components/Image'
class WorkIndex extends React.Component {
  render() {
    const { data, title } = this.props
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={"Work"}>
        <SEO
          title="Work"
          keywords={[`product design`, `case studies`, `ux design`,]}
        />
        <h1>{title}</h1>
        <p>
          I'm currently a product designer at Productboard. <br />
          Below is some of my past work.
          </p>
        <div className={'space-y-6'}>
          <h2>Side projects</h2>
          <div><a href={'https://untools.co'} className={'hover:bg-opacity-20'} target={'blank'}>
            <div className={'bg-pink-700 bg-opacity-10 hover:bg-opacity-20 rounded-xl flex w-10xl'}>
              <div className={'p-16 space-y-4'}>
                <div className={'font-bold font-label'}>Untools <span className={'font-label opacity-50'}>2020</span></div>
                <h3>Tools for better thinking</h3>
                <div>
                  <div className={'inline px-5 py-3 rounded-4xl font-label font-bold text-pink-500 bg-pink-700 bg-opacity-10 hover:bg-opacity-20'} >Visit untools.co</div>
                </div>
              </div>
              <div className={'self-end pr-8'}>
                <Image key={'untoolsThumb'} filename={'untoolsThumb.png'} className={'mb-4'}></Image>
              </div>
            </div>
          </a></div>
          
        </div>
        <div className={'space-y-6'}>
          <h2>Case studies</h2>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const product = node.frontmatter.product
            const color = node.frontmatter.color
            const date = node.frontmatter.years
            return (
              <div>
                <a href={node.fields.slug} className={'hover:bg-opacity-20'}>
                  <div key={node.fields.slug}  className={`bg-${color}-700 bg-opacity-10 hover:bg-opacity-20 rounded-xl hover:no-underline  p-16 w-10xl space-y-4`}>
                    <div className={'font-bold font-label'}>{product}  <span className={'font-label opacity-50'}>{date}</span></div>
                    <h3>{title}</h3>
                    <div className={'mt-4'}>
                      <div className={`inline px-5 py-3 rounded-4xl font-label font-bold text-${color}-500 bg-${color}-700 bg-opacity-10 hover:bg-opacity-20`} >Read case study</div>
                    </div>
                  </div>
                </a>
              </div>
            )
          })}
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
            years
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

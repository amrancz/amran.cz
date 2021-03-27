import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import CustomLink from '../components/CustomLink'
import SEO from '../components/seo'
class About extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} width={'8xl'} spacing={'8'}>
        <SEO
          title="About"
          keywords={[`product designer`,]}
        />
        <div className={'flex flex-col lg:flex-row lg:items-stretch lg:space-x-8 space-y-8 lg:space-y-0'}>
          <div className={'bg-gray-700 flex-1 bg-opacity-10 rounded-xl p-12 space-y-8 last:space-y-0'}>
            <h1>Nice to meet you!</h1>
            <p>
            I'm a product designer at <CustomLink link={"https://www.productboard.com"} target={"_blank"} text={"Productboard"}></CustomLink>, based in Brno, Czechia.<br />
            </p>
            <p>
            I've been doing various forms of digital designs since 2010: from web designs, mobile apps to product design. <br />
            Previously, I was a designer at <CustomLink link={"https://www.kontent.ai"} target={"_blank"} text={"Kontent"}></CustomLink> and led the design team at <CustomLink link={"https://www.futured.app"} target={"_blank"} text={"Futured"}></CustomLink>.
            </p>
            <p>
              In my spare time, I'm making <CustomLink link={"https://untools.co"} target={"_blank"} text={"Untools"}></CustomLink> – a collection of thinking tools. I also love to stay active (lift weights, play football or jog), read non-fiction, cook, travel or mix music.
            </p>
            <p>
              You can reach out to me on <CustomLink link={"https://twitter.com/amrancz"} target={"_blank"} text={"Twitter"}></CustomLink>.
            </p>
          </div>
          <div className={'bg-gradient-to-br from-blue-500 to-purple-700 text-white flex-1 rounded-xl p-12 space-y-4'}>
            <h1>Nice to meet you!</h1>
            <p>
            I'm a product designer at <CustomLink link={"https://www.productboard.com"} target={"_blank"} text={"Productboard"}></CustomLink>, based in Brno, Czechia.<br />
            </p>
            <p>
            I've been doing various forms of digital designs since 2010: from web designs, mobile apps to product design. <br />
            Previously, I was a designer at <CustomLink link={"https://www.kontent.ai"} target={"_blank"} text={"Kontent"}></CustomLink> and led the design team at <CustomLink link={"https://www.futured.app"} target={"_blank"} text={"Futured"}></CustomLink>.
            </p>
            <p>
              In my spare time, I'm making <CustomLink link={"https://untools.co"} target={"_blank"} text={"Untools"}></CustomLink> – a collection of thinking tools. I also love to stay active (lift weights, play football or jog), read non-fiction, cook, travel or mix music.
            </p>
            <p>
              You can reach out to me on <CustomLink link={"https://twitter.com/amrancz"} target={"_blank"} text={"Twitter"}></CustomLink>.
            </p>
          </div>
        </div>
        </Layout>
    )
  }
}

export default About

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
            date
            title
            type
          }
        }
      }
    }
  }
`

import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
class About extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={"About"}  width={'4xl'}>
        <SEO
          title="About"
          keywords={[`product designer`,]}
        />
        <h2>My approach to design</h2>
        <p>
        I start every project with learning about the business and its users. I explore the problem thoroughly before designing a solution.

        I value data over opinions and I regard every design as a hypothesis that needs to be tested. I believe designers are facilitators who enable their teams to create good design.

        I like to share my thoughts, knowledge and experience through writing. I publish articles on my blog﻿ from time to time.
        </p>
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

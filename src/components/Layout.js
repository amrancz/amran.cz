import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import Header from './Header'
import Footer from './Footer'
import Image from './Image'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
          <div>
            <Image
                  src={"adam.png"}
                  className={'rounded-10xl w-8 h-8'}
                  alt={"moon"}
                />
          <h1>
            {title}
          </h1>
        </div>
      )
    } else {
      header = (
        <h2>
            {title}
        </h2>
      )
    }
    return (
      <div className={'bg-grey-900'}>
        <Header></Header>
        <div className={'relative py-10 px-10 sm:max-w-4xl sm:mx-auto'}>
        {header}
        {children}
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
/*
const imgQuery = graphql`
  query ImgQuery {
    file: file(relativePath: { eq: "adam.png" })  {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
*/
export default Layout


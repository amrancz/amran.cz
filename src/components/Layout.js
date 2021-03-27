import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import Header from './Header'
import Footer from './Footer'
import Image from './Image'

class Layout extends React.Component {
  render() {
    const { location, title, children, width, spacing } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {

    } else {
      header = (
        <h1>
            {title}
        </h1>
      )
    }
    return (
      <div className={'bg-grey-900'}>
        <Header></Header>
        <div className={`relative py-10 px-10 sm:max-w-${width} sm:mx-auto space-y-${spacing}`}>
          {children}
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

Layout.defaultProps = {
  spacing: '12',
}

const imgQuery = graphql`
  query ImgQuery {
    file: file(relativePath: { eq: "adam.png" })  {
      childImageSharp {
        fixed(width: 160, height: 160) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Layout


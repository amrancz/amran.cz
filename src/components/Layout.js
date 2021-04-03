import React from 'react'
import Header from './Header'
import Footer from './Footer'
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
        <div className={`relative py-4 px-6 md:py-10 md:px-10 sm:max-w-${width} sm:mx-auto space-y-${spacing}`}>
          {/* purgecss: sm:max-w-4xl max-w-8xl space-y-8 space-y-12 space-y-16 */}
          {children}
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

Layout.defaultProps = {
  width: '4xl',
  spacing: '12',
}

export default Layout


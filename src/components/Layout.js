import React from 'react'
import Header from './Header'
import Footer from './Footer'
class Layout extends React.Component {
  render() {
    const { location, title, children, width, spacing } = this.props

    return (
      <div className={'bg-grey-900'}>
        <Header></Header>
        <div className={`relative pb-4 px-6 py-20 md:py-24 md:pb-4 md:px-10 sm:max-w-${width} sm:mx-auto space-y-${spacing}`}>
          {/* purgecss: max-w-3xl max-w-4xl max-w-8xl space-y-8 space-y-12 space-y-16 */}
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


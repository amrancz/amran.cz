import React from 'react'
import Header from './Header'
import Footer from './Footer'
class Layout extends React.Component {
  render() {
    const {children, width, spacing } = this.props

  return (
      <div className={'bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-gray-900'}>
          <div className={`relative pb-4 px-6 py-8 md:py-12 md:pb-4 md:px-10 max-w-${width} flex flex-col justify-center mx-auto space-y-${spacing}`}>
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


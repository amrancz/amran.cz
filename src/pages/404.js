import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} spacing={'12'}>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>If you got there via a link on this page, please let me know.</p>
        <p>Otherwise your best bet is going to the homepage and start from there.</p>
      </Layout>
    )
  }
}

export default NotFoundPage

import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import CustomLink from '../components/CustomLink'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} spacing={'12'}>
        <SEO title="404: Not Found" />
        <h1 className={'flex justify-center'}>This page isn't here</h1>
        <h1 className={'flex justify-center'}>¯\_(ツ)_/¯</h1>
        <p  className={'flex justify-center'}>
          If you got there via a link on this page, <Link to={`https://twitter.com/amrancz`} className={'font-semibold tracking-tighter hover:text-green-400'}>
          please let me know
        </Link>.
          Otherwise, your best bet is going to the <Link to={`/`} className={'font-semibold tracking-tighter hover:text-green-400'}>homepage
        </Link>.
        </p>
        
      </Layout>
    )
  }
}

export default NotFoundPage

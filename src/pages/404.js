import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import CustomLink from '../components/CustomLink'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} spacing={'4'}>
        <SEO title="404: Not Found" />
        <h1 className={'flex justify-center pb-8'}>This page isn't here</h1>
        <h1 className={'flex justify-center pb-12'}>¯\_(ツ)_/¯</h1>
        <p className={'text-center'}>
          If you got there via a link on this page, <CustomLink link={`mailto:adam@amran.cz?subject=Yo, there's a broken link on amran.cz`} target={'_blank'}  text={'let me know'}></CustomLink>
        </p>
        <p className={'text-center'}> 
          Otherwise, your best bet is going to the <CustomLink link={'/'} text={'homepage'}></CustomLink>
        </p>
        
      </Layout>
    )
  }
}

export default NotFoundPage

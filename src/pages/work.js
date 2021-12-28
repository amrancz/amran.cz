import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Button from '../components/Button'
import WorkPreview from '../components/WorkPreview'
import SEO from '../components/seo'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
class Work extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMdx.edges

    function getImg(name) {
      const image = getImage(data[name])
      console.log(image)
      return image
    }

    return (
      <Layout location={this.props.location} width={'6xl'} spacing={'12'}>
        <SEO
          title="Work / Adam Amran"
          keywords={[`product design`, `case studies`, `ux design`,]}
        />
        <Link to={'/'}>
            <div id="intro" className={'flex max-w-[11rem] border border-solid border-slate-300 dark:border-slate-700 text-slate-400 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-400 duration-150 items-center rounded-xl p-2 space-x-2'}>
              <span>←</span>
              <div className={'w-5 h-5 rounded-full bg-slate-800'}>
                <StaticImage 
                  src={'../images/portraitSmall.jpg'}
                  alt='Portrait of Adam'
                  loading='eager'
                  imgStyle={{
                    justifySelf: 'center',
                    textAlign: 'center',
                    borderRadius: '10rem',
                    overflow: 'hidden',
                    backgroundColor: 'none',
                  }}
                ></StaticImage>
              </div>
              <span> Adam Amran</span>
            </div>
        </Link>
        <h1>Work</h1>

        <div className={'grid grid-cols-1 md:grid-cols-2 auto-cols-max gap-6'}>

        {posts.reverse().map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const product = node.frontmatter.product
            const color = node.frontmatter.color
            const thumbnail = node.frontmatter.thumbnail
            const image = getImage(data[thumbnail])
            return (
              <WorkPreview
                type={'caseStudy'}
                slug={node.fields.slug}
                color={color}
                product={product}
                title={title}
                image={image}
              ></WorkPreview>
            )
          })}

          <WorkPreview
          color={'blue'}
          product={'Productboard (B2B Saas)'}
          title={'Integrating Productboard with Salesforce Opportunities'}
          buttonLink={'https://dribbble.com/shots/15942362-Salesforce-Opportunities-integration'}
          buttonText={'See Dribbble shot'}
          image={getImg('pbSalesforceThumb')}
          ></WorkPreview>
          
          <WorkPreview
          color={'yellow'}
          product={'Kentico Kontent (B2B Saas)'}
          title={'New commenting experience for a headless CMS editor'}
          buttonLink={'https://kontent.ai/blog/improved-commenting-experience'}
          buttonText={'Read release article'}
          image={getImg('kontentCommentsThumb')}
          ></WorkPreview>

          <WorkPreview
          color={'purple'}
          product={'Untools (Side project)'}
          title={'Building a collection of tools for better thinking'}
          buttonLink={'https://untools.co'}
          buttonText={'Visit untools.co'}
          image={getImg('untoolsThumb')}
          ></WorkPreview>
          
        </div>
      </Layout>
    )
  }
}

export default Work

export const pageQuery = graphql`{
  allMdx(
    filter: {frontmatter: {type: {eq: "case-study"}}}
    sort: {fields: [frontmatter___date], order: DESC}
  ) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          product
          type
          color
          thumbnail
        }
      }
    }
  }
  grasonThumb: file(relativePath: {eq: "grasonThumb.png"}) {
    childImageSharp {
      gatsbyImageData(
        backgroundColor: "transparent"
        placeholder: BLURRED
        layout: CONSTRAINED
      )
    }
  }
  kontentThumb: file(relativePath: {eq: "kontentThumb.png"}) {
    childImageSharp {
      gatsbyImageData(
        backgroundColor: "transparent"
        placeholder: BLURRED
        layout: CONSTRAINED
      )
    }
  }
  untoolsThumb: file(relativePath: {eq: "untoolsThumb.png"}) {
    childImageSharp {
      gatsbyImageData(
        backgroundColor: "transparent"
        placeholder: BLURRED
        layout: CONSTRAINED
      )
    }
  }
  pbSalesforceThumb: file(relativePath: {eq: "pbSalesforceThumb.png"}) {
    childImageSharp {
      gatsbyImageData(
        backgroundColor: "transparent"
        placeholder: BLURRED
        layout: CONSTRAINED
      )
    }
  }
  kontentCommentsThumb: file(relativePath: {eq: "kontentCommentsThumb.png"}) {
    childImageSharp {
      gatsbyImageData(
        backgroundColor: "transparent"
        placeholder: BLURRED
        layout: CONSTRAINED
      )
    }
  }
}
`

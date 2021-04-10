import React from 'react'
import Layout from '../components/Layout'
import CustomLink from '../components/CustomLink'
import SEO from '../components/seo'
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'
class About extends React.Component {
  render() {

    return (
      <Layout location={this.props.location} width={'8xl'} spacing={'8'}>
        <SEO
          title="About / Adam Amran"
          keywords={[`product designer`]}
        />
          <div className={'flex flex-col xl:flex-row lg:items-stretch lg:space-x-16 space-y-4 md:space-y-12 lg:space-y-0 bg-gradient-to-br from-blue-500 to-purple-700 flex flex-col lg:flex-row text-white flex-1 rounded-2xl p-6 md:p-12 space-y-4'}>
            <div className={'flex-1'}>
            <StaticImage 
                src={'../images/portraitLarge.jpg'}
                alt={'Portrait of Adam'}
                loading='eager'
                imgStyle={{
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}
              ></StaticImage>
            </div>
            <div className={'flex-1 space-y-4 lg:space-y-6 py-4 lg:py-0 last:space-y-0'}>
              <h1>{`Nice to meet you!`}</h1>
              <p>
              I'm a product designer and maker based in Brno 🇨🇿.<br />
              </p>
              <p>
              Currently designing a product management system at <CustomLink link={"https://www.productboard.com"} target={"_blank"} text={`Productboard${'\u00A0'}🚀`}></CustomLink>. <br />
              </p>
              <p>
              Previously, I was a designer at <CustomLink link={"https://www.kontent.ai"} target={"_blank"} text={`Kentico${'\u00A0'}✍️`}></CustomLink> and led the design team at <CustomLink link={"https://www.futured.app"} target={"_blank"} text={`Futured${'\u00A0'}📱`}></CustomLink>.
              More about my work experience on <CustomLink link={'https://www.linkedin.com/in/adam-amran-98950222/'} target={'_blank'} text={'LinkedIn'}></CustomLink>.
              </p>
              <p>
                On the side, I'm building <CustomLink link={"https://untools.co"} target={"_blank"} text={`Untools${'\u00A0'}🧠`}></CustomLink> – a collection of thinking tools.
              </p>
              <p>
                In my spare time I like to stay active (lift weights, play football or jog), read non-fiction, cook, travel or mix music.
              </p>
              <p>
                And I guess you noticed I like emojis ✌️
              </p>
          </div>
        </div>
        </Layout>
    )
  }
}

export default About
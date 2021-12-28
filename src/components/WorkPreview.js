import React from 'react'
import PropTypes from 'prop-types'
import Button from '../components/Button'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

function WorkPreview({ type, slug, color, product, title, buttonLink, buttonText, image, imageLink }) {
  if (type==='caseStudy'){
    return (
        <div className={'relative text-white overflow-hidden rounded-xl flex shadow-lg'}>
            <div key={slug}  className={`w-full flex flex-1 flex-col bg-gradient-to-br from-${color}-500 to-${color}-700`}>
            {/* purgecss: from-yellow-500 to-yellow-700 from-blue-500 to-blue-700 */}
                <div className={'w-auto flex flex-col items-start relative p-8 xl:p-12'}>
                    <span className={`font-medium text-${color}-200 mb-2`}>{product}</span>
                    <h3 className={'mb-8'}>{title}</h3>
                    <Button primary={true} link={`/work${slug}`} text={'Read case study'} textColor={`${color}-700`}></Button>
                </div>
                <div className={'relative max-h-48 overflow-visible'}>
                    <GatsbyImage
                    key={product}
                    image={image}
                    loading='eager'
                    alt={`${product} thumbnail`}
                    ></GatsbyImage>
                </div>
            </div>
        </div>
    )
  } else {
    return (
        <div className={'relative text-slate-900 dark:text-white flex'}>
        <div className={`w-full flex flex-col border bg-gradient-to-br from-${color}-500/10 to-${color}-700/10 border-solid border-${color}-200/20 rounded-xl overflow-visible`}>
          <div className={'w-auto flex flex-col items-start relative z-10 p-8 xl:p-12'}>
            <span className={'font-medium opacity-50 mb-2'}>{product}</span>
            <h3 className={'mb-8'}>{title}</h3>
            <Button primary={true} link={buttonLink} target={'_blank'} text={buttonText} textColor={`${color}-700`}></Button>
            {/* purgecss: text-purple-700 from-purple-500/10 to-purple-500/10 from-blue-500/10 to-blue-500/10 from-yellow-500/10 to-yellow-500/10 border-blue-200/20 border-yellow-200/20 border-purple-200/20 */}
          </div>
          <div className={'relative max-h-48 overflow-hidden'}>
            <GatsbyImage 
              image={image}
              alt={title}
              key={title}
              loading='eager'
              width={711}
              height={400}
              layout={'constrained'}
            ></GatsbyImage>
          </div>
        </div>
      </div> 
    )
  }
}

WorkPreview.defaultProps = {
  slug: '/work',
  color: '',
  product: '',
  title: '',
  buttonLink: '',
  buttonText: '',
  imageLink: ''
}

WorkPreview.propTypes = {
  slug: PropTypes.string,
  color: PropTypes.string,
  product: PropTypes.string,
  title: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
  imageLink: PropTypes.string,
}

export default WorkPreview

import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'

function CustomLink({ link, target, text, style, image }) {
  if (style==='withImage'){
    return (
      <a href={link} target={target} className={"bg-slate-500 dark:bg-slate-700 bg-opacity-20 py-1 px-1 rounded-md font-medium text-slate-900 dark:text-white hover:text-white hover:bg-slate-600 duration-100 flex items-center gap-1"}>
        <span className={'w-6 h-6 rounded-full bg-slate-800'}>
        <GatsbyImage key={text} alt={`Image of ${text}`} image={image} loading='eager'
            imgStyle={{
                justifySelf: 'center',
                textAlign: 'center',
                borderRadius: '10rem',
                overflow: 'hidden',
                backgroundColor: 'none',
              }}
        ></GatsbyImage> 
        </span>
        {text}
      </a>
    )
  } else {
    return (
      <a href={link} target={target} className={"bg-slate-500 dark:bg-slate-700 bg-opacity-20 py-1 px-1 rounded-md font-medium text-slate-900 dark:text-white hover:text-white hover:bg-slate-600 duration-100"}>
      {image} {text}
    </a> 
    )
  }
}

CustomLink.defaultProps = {
  link: '/',
  target: '',
  text: ''
}

CustomLink.propTypes = {
  link: PropTypes.string,
  target: PropTypes.string,
  text: PropTypes.string
}

export default CustomLink

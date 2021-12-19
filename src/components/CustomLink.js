import React from 'react'
import PropTypes from 'prop-types'

function CustomLink({ link, target, text, style }) {
  if (style==='themeable'){
    return (
      <a href={link} target={target} className={"bg-slate-500 dark:bg-slate-800 bg-opacity-20 py-1 px-1 rounded-md font-medium text-slate-900 dark:text-white hover:text-white hover:bg-black hover:bg-opacity-60 duration-100"}>
        {text}
      </a>
    )
  } else {
    return (
      <a href={link} target={target} className={"bg-slate-800 bg-opacity-20 py-1 px-1 rounded-md font-medium text-white hover:text-white hover:bg-black hover:bg-opacity-60 duration-100"}>
      {text}
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

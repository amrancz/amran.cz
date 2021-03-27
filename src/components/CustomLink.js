import React from 'react'
import PropTypes from 'prop-types'

function CustomLink({ link, target, text }) {
    return (
      <a href={link} target={target} className={"bg-opacity-0 border-2 border-gray-700 py-1 px-1 font-medium rounded-lg text-white hover:bg-blue-100 hover:text-gray-900 hover:border-blue-100 duration-100"}>
        {text}
      </a>
    )
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

import React from 'react'
import PropTypes from 'prop-types'

function CustomLink({ link, target, text }) {
    return (
      <a href={link} target={target} className={"bg-opacity-0 border-2 border-white border-opacity-20 py-1 px-1 font-medium rounded-lg text-white hover:bg-white hover:text-gray-900 hover:border-white duration-100"}>
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

import React from 'react'
import PropTypes from 'prop-types'

function Button({ primary, link, target, text, textColor }) {
  if (primary){
    return (
      <a href={link} target={target} className={`bg-white border-4 border-white rounded-xl px-4 py-3 tracking-tighter font-semibold text-center text-${textColor} hover:bg-opacity-0 hover:text-white duration-100`}>
        {text}
      </a>
    )
  } else {
    return (
      <a href={link} target={target} className={`bg-opacity-50 border-4 border-white border-opacity-30 tracking-tighter rounded-xl px-4 py-3 text-white text-center font-semibold hover:bg-white hover:text-gray-900 hover:border-opacity-100 duration-100`}>
        {text}
      </a>
    )
  }
}

Button.defaultProps = {
  primary: false,
  link: '/',
  target: '',
  textColor: 'gray-900',
}

Button.propTypes = {
  type: PropTypes.bool,
  link: PropTypes.string,
  target: PropTypes.string,
  textColor: PropTypes.string
}

export default Button

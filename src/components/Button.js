import React from 'react'
import PropTypes from 'prop-types'

function Button({ primary, link, target, text, textColor }) {
  if (primary){
    return (
      <a href={link} target={target} className={`bg-white rounded-lg px-4 py-3 tracking-tighter font-semibold text-center text-${textColor} hover:text-white hover:bg-${textColor} duration-100`}>
        {/* purgecss: text-green-500 text-green-700 text-yellow-700 text-blue-700 text-purple-800 bg-purple-800 bg-blue-700 bg-green-800 */}
        {text}
      </a>
    )
  } else {
    return (
      <a href={link} target={target} className={`bg-white bg-opacity-20 tracking-tighter rounded-lg px-4 py-3 text-white text-center font-semibold hover:bg-opacity-100 hover:text-gray-900 hover:border-opacity-100 duration-100`}>
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

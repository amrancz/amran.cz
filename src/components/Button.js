import React from 'react'
import PropTypes from 'prop-types'

function Button({ primary, link, target, text, textColor }) {
  if (primary){
    return (
      <a href={link} target={target} className={`bg-white border-4 border-white rounded-xl px-3 py-2 tracking-tighter font-semibold text-center text-${textColor} hover:bg-opacity-0 hover:text-white duration-100`}>
        {/* purgecss: text-green-500 text-green-700 text-yellow-700 text-blue-700 text-purple-800 */}
        {text}
      </a>
    )
  } else {
    return (
      <a href={link} target={target} className={`bg-opacity-50 border-4 border-white border-opacity-30 tracking-tighter rounded-xl px-3 py-2 text-white text-center font-semibold hover:bg-white hover:text-gray-900 hover:border-opacity-100 duration-100`}>
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

import React from 'react'
import PropTypes from 'prop-types'

function Button({ primary, link, target, text }) {
  if (primary=true){
    return (
      <a href={link} target={target} className={'border-4 border-white rounded-xl px-4 py-3 tracking-tight font-semibold bg-white hover:bg-opacity-0 text-gray-900 hover:text-white duration-100'}>
        {text}
      </a>
    )
  } else {
    return (
      <a href={link} target={target} className={'bg-opacity-0 border-2 border-white border-opacity-30 rounded-xl px-5 py-4 text-white font-semibold hover:bg-white hover:text-gray-900 duration-100'}>
        {text}
      </a>
    )
  }
}

Button.defaultProps = {
  primary: true,
  link: '/',
  target: '',
}

Button.propTypes = {
  primary: PropTypes.bool,
  link: PropTypes.string,
  target: PropTypes.string,
}

export default Button

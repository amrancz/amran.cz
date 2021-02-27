import React from 'react'
import PropTypes from 'prop-types'

function Button({ primary, link, target, text }) {
  if (primary=true){
    return (
      <a href={link} target={target} className={'bg-blue-600 rounded-xl px-5 py-4 hover:bg-blue-500 text-white font-bold'}>
        {text}
      </a>
    )
  } else {
    return (
      <a href={link} target={target} className={'bg-grey-200 rounded px-3 py-2'}>
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

import React from 'react'
import PropTypes from 'prop-types'

function Button({ primary, link, target, text }) {
  if (primary=true){
    return (
      <a href={link} target={target}className={'bg-opacity-0 border-2 border-white rounded-xl px-5 py-4 text-white font-bold hover:bg-white hover:text-gray-900 duration-100'}>
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

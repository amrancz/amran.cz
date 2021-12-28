import React from 'react'
import PropTypes from 'prop-types'
// import {ExternalLink} from '@heroicons/react/outline'

function Button({ primary, link, target, text, textColor }) {

  // const externalLink = <ExternalLink className={'h-6 w-6 text-slate-900 dark:text-white'} />

  if (primary){
    return (
      <a href={link} target={target} className={`bg-white dark:bg-${textColor}-100 rounded-lg px-4 py-3 tracking-tighter font-semibold text-center text-${textColor} hover:text-white hover:bg-slate-900 hover:bg-opacity-80 duration-100`}>
        {/* purgecss: text-slate-900 text-yellow-700 text-blue-700 text-purple-800 bg-purple-800 bg-blue-700 bg-green-800 */}
        {text}
      </a>
    )
  } else {
    return (
      <a href={link} target={target} className={`bg-white bg-opacity-20 tracking-tighter rounded-lg px-4 py-3 text-white text-center font-semibold hover:text-white hover:bg-black hover:bg-opacity-60 duration-100`}>
        {text} 
      </a>
    )
  }
}

Button.defaultProps = {
  primary: false,
  link: '/',
  target: '',
  textColor: 'slate-900',
}

Button.propTypes = {
  type: PropTypes.bool,
  link: PropTypes.string,
  target: PropTypes.string,
  textColor: PropTypes.string
}

export default Button

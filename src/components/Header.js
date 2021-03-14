import React from 'react'
import { Link } from 'gatsby'

function Header() {
  return (<div
    className={'bg-gray-900 flex flex-row flex-grow justify-between py-5 px-8'}
  >
      <div className={'font-label'}>
        <Link to={`/`}>
            Adam Amran
        </Link>
      </div>
      <div className={'float-right'}>
        <Link to={`/work`} className={'mr-8'}>
            Work
        </Link>
        <Link to={`/writing`} className={'mr-8'}>
            Writing
        </Link>
        <Link to={`/about`}>
            About
        </Link>
      </div>
  </div>
)
  }

export default Header

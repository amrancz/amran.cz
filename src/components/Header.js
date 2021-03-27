import React from 'react'
import { Link } from 'gatsby'

function Header() {
  return (
  <div className={'bg-gray-900 flex flex-row flex-grow justify-between py-5 px-12'}>
      <div className={'font-label'}>
        <Link to={`/`} className={'font-bold'}>
            Adam Amran
        </Link>
      </div>
      <div className={'float-right duration-150'}>
        <Link to={`/work`} className={'mr-10'}>
            Work
        </Link>
        <Link to={`/writing`} className={'mr-10'}>
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

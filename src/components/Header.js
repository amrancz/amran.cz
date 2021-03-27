import React from 'react'
import { Link } from 'gatsby'

function Header() {
  return (
  <div className={'bg-gray-900 flex flex-row flex-grow justify-between pt-6 px-12'}>
      <div>
        <Link to={`/`} className={'font-semibold tracking-tight hover:text-green-400'}>
            Adam Amran
        </Link>
      </div>
      <div className={'float-right space-x-10 duration-150'}>
        <Link to={`/work`} className={'hover:text-blue-400'}>
            Work
        </Link>
        <Link to={`/writing`} className={'hover:text-blue-400'}>
            Writing
        </Link>
        <Link to={`/about`}className={'hover:text-blue-400'}>
            About
        </Link>
      </div>
  </div>
)
  }

export default Header

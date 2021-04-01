import React from 'react'
import { Link } from 'gatsby'

function Header() {
  const activeStyle = 'font-semibold tracking-tighter text-blue-400'
  return (
  <div className={'bg-gray-900 flex flex-row flex-grow justify-between pt-8 px-10'}>
      <div>
        <Link to={`/`} className={'font-semibold tracking-tighter hover:text-green-400'}>
            Adam Amran
        </Link>
      </div>
      <div className={'float-right space-x-10 duration-150'}>
        <Link to={`/work`} className={'hover:text-blue-400'} activeClassName={activeStyle} partiallyActive={true}>
            Work
        </Link>
        <Link to={`/writing`} className={'hover:text-blue-400'} activeClassName={activeStyle} partiallyActive={true}>
            Writing
        </Link>
        <Link to={`/about`}className={'hover:text-blue-400'} activeClassName={activeStyle} partiallyActive={true}>
            About
        </Link>
      </div>
  </div>
)
  }

export default Header

import React from 'react'
import { Link } from 'gatsby'

function Header() {
  const activeStyle = 'bg-white bg-opacity-20 py-2 px-2 rounded-md font-semibold tracking-tighter text-white'
  return (
  <div className={'fixed top-0 z-10 w-full backdrop-blur bg-gray-900 bg-opacity-0 flex flex-column md:flex-row flex-grow justify-between py-4 md:py-8 px-6 md:px-10'}>
      <div>
        <Link to={`/`} className={'bg-white bg-opacity-0 py-2 px-2 rounded-md font-semibold tracking-tighter hover:bg-opacity-20'}>
            Adam Amran
        </Link>
      </div>
      <div className={'md:float-right space-x-6 md:space-x-8 duration-150'}>
        <Link to={`/work`} className={'bg-white bg-opacity-0 py-2 rounded-md px-2 hover:bg-opacity-20'} activeClassName={activeStyle} partiallyActive={true}>
            Work
        </Link>
        <Link to={`/writing`} className={'bg-white bg-opacity-0 rounded-md py-2 px-2 hover:bg-opacity-20'} activeClassName={activeStyle} partiallyActive={true}>
            Writing
        </Link>
        <Link to={`/about`}className={'bg-white bg-opacity-0 rounded-md py-2 px-2 hover:bg-opacity-20'} activeClassName={activeStyle} partiallyActive={true}>
            About
        </Link>
      </div>
  </div>
)
  }

export default Header

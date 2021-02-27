import React from 'react'
import { StaticQuery, Link } from 'gatsby'
import Image from './Image'

function Header() {
  return (<div
    className={'bg-white dark:bg-black'}
  >
      <div>
        <Link to={`/`} >
            Adam Amran
        </Link>
      </div>
      <div>
        <Link to={`/work`}>
            Work
        </Link>
        <Link to={`/writing`}>
            Writing
        </Link>
        <Link to={`/about`}>
            About
        </Link>
      </div>
      <div>
        <div></div>
        <Image
          src={"moon.svg"}
          className={"mx-auto shadow-xl w-8 h-8"}
          alt={"moon"}
        />
        <Image
          src={"sun.svg"}
          className={"mx-auto shadow-xl w-8 h-8"}
          alt={"sun"}
        />
      </div>
  </div>
)
  }

export default Header

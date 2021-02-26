import React from 'react'
import { Link } from 'gatsby'

function Header() {
  return (
          <div
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
          </div>
        )
}

export default Header

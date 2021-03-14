import React from 'react'
import { Link } from 'gatsby'

function Footer() {
  return (
          <footer className={'p-8 bg-gray-700 bg-opacity-10'}>
          <div className={'relative py-10 px-10 sm:max-w-4xl sm:mx-auto space-y-12'}>
            <ul>
            <Link to={`/work`} className={'mr-8'}>
            Work
        </Link>
        <Link to={`/writing`} className={'mr-8'}>
            Writing
        </Link>
        <Link to={`/about`}>
            About
        </Link>
            </ul>
            <div className={'font-label'}>
              © {new Date().getFullYear()} Adam Amran
            </div>
          </div>  
          </footer>
        )
}

export default Footer

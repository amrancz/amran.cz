import React from 'react'
import { Link } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'


function Header() {
  const activeStyle = 'bg-gray-500 dark:bg-white bg-opacity-20 py-2 px-2 rounded-md font-semibold tracking-tighter text-gray-800 dark:text-white'
  const defaultStyle = 'bg-gray-500 dark:bg-white bg-opacity-0 rounded-md py-2 px-2 hover:bg-opacity-20'
  return (
  <div className={'fixed top-0 z-10 w-full backdrop-blur bg-gray-900 bg-opacity-0 flex flex-column md:flex-row flex-grow justify-between py-4 md:py-8 px-6 md:px-10'}>
      <div>
        <Link to={`/`} className={'bg-gray-900 dark:bg-white bg-opacity-0 py-2 px-2 rounded-md font-semibold tracking-tighter hover:bg-opacity-20'}>
            Adam Amran
        </Link>
      </div>
      <div className={'md:float-right space-x-6 md:space-x-8 duration-150'}>
        <Link to={`/work`} className={defaultStyle} activeClassName={activeStyle} partiallyActive={true}>
            Work
        </Link>
        <Link to={`/writing`} className={defaultStyle} activeClassName={activeStyle} partiallyActive={true}>
            Writing
        </Link>
        <Link to={`/about`}className={defaultStyle} activeClassName={activeStyle} partiallyActive={true}>
            About
        </Link>
        <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>
        )}
      </ThemeToggler>
      </div>
  </div>
)
  }

export default Header

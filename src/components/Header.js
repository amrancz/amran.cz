import React, { useState } from 'react'
import { Link } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { MenuIcon } from '@heroicons/react/outline'
import { SunIcon } from '@heroicons/react/outline'
import { MoonIcon } from '@heroicons/react/solid'
import { XIcon } from '@heroicons/react/outline'

const activeStyle = 'bg-gray-500 dark:bg-white bg-opacity-20 py-2 px-2 inline-block rounded-md font-semibold tracking-tighter text-gray-800 dark:text-white'
const defaultStyle = 'bg-gray-500 dark:bg-white bg-opacity-0 rounded-md py-2 px-2 hover:bg-opacity-20'

export function ToggleButton(){
  return(
    <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <button 
              className={'p-2'} 
              onClick={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
            >
              {theme === 'dark' ? <SunIcon className={'h-6 w-6 text-gray-600 hover:text-gray-200'} />
              : <MoonIcon className={'hidden h-6 w-6 text-gray-600 hover:text-gray-200'} />
              }
            </button>
          )}
        </ThemeToggler>
  )
}

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
  <header className={'fixed top-0 z-10 w-full backdrop-blur bg-gray-900 bg-opacity-0 flex-column  justify-between py-2 md:py-6 px-6 md:px-10 duration-150'}>
      <div className={'flex items-center justify-between px-4 py-2 sm:p-0 relativ'}>
        <Link to={`/`} className={'bg-gray-900 dark:bg-white bg-opacity-0 py-2 px-2 rounded-md font-semibold tracking-tighter hover:bg-opacity-20'}>
            Adam Amran
        </Link>
        {/* Desktop nav */}
      <div className={'hidden md:flex md:flex-row md:float-right space-y-6 md:space-y-0 space-x-0 md:space-x-8 duration-150'}>
        <Link to={`/work`} className={defaultStyle} activeClassName={activeStyle} partiallyActive={true}>
            Work
        </Link>
        <Link to={`/writing`} className={defaultStyle} activeClassName={activeStyle} partiallyActive={true}>
            Writing
        </Link>
        <Link to={`/about`}className={defaultStyle} activeClassName={activeStyle} partiallyActive={true}>
            About
        </Link>
        <ToggleButton></ToggleButton>
      </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={'block float-right md:hidden'}>
          {isMenuOpen ? <XIcon className={'h-6 w-6 text-gray-600 dark:text-gray-400'} />
           : <MenuIcon className={'h-6 w-6 text-gray-600 dark:text-gray-400'} />
          }
        </button>
      </div>
      {/* Mobile nav */}
      {isMenuOpen && (
        <div className={'flex flex-col items-center text-center md:hidden space-y-4 duration-150'}>
        <Link to={`/work`} className={defaultStyle} activeClassName={activeStyle} partiallyActive={true}>
            Work
        </Link>
        <Link to={`/writing`} className={defaultStyle} activeClassName={activeStyle} partiallyActive={true}>
            Writing
        </Link>
        <Link to={`/about`}className={defaultStyle} activeClassName={activeStyle} partiallyActive={true}>
            About
        </Link>
        <ToggleButton></ToggleButton>
      </div>
      )}

      
  </header>
)
  }

export default Header

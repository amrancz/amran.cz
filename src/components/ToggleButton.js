import React from 'react'

import useDarkMode from 'use-dark-mode';

import { SunIcon } from '@heroicons/react/outline'
import { MoonIcon } from '@heroicons/react/solid'

function ToggleButton() {
    const darkMode = useDarkMode(true);

    return (
        <button 
        aria-label={darkMode.value ? "Activate Light Mode" : "Activate Dark Mode"}
        title={darkMode.value ? "Activate Light Mode" : "Activate Dark Mode"}    
        className={'p-1'} 
        onClick={darkMode.enable}
        >
            {darkMode.value ? <SunIcon className={'h-6 w-6 text-gray-900 dark:white hover:text-gray-400'} />
            : <MoonIcon className={'h-6 w-6 text-gray-900 dark:white hover:text-gray-400'} />
            }
        </button>
    )
}

  export default ToggleButton

/* 
function ToggleButton(){
    return(
        <ThemeToggler>
            {({ theme, toggleTheme }) => (
            <button 
            aria-label={theme === 'light' ? "Activate Dark Mode" : "Activate Light Mode"}
            title={theme === 'light' ? "Activate Dark Mode" : "Activate Light Mode"}    
            className={'p-1'} 
                onClick={toggleTheme}
            >
                {theme === 'dark' ? <SunIcon className={'h-6 w-6 text-gray-900 dark:white hover:text-gray-400'} />
                : <MoonIcon className={'h-6 w-6 text-gray-900 dark:white hover:text-gray-400'} />
                }
            </button>
            )}
        </ThemeToggler>
    )
  }

export default ToggleButton

*/
import React from 'react'
import { Link } from 'gatsby'

function Footer() {
  return (
    <footer className={'p-8'}>
      <div className={'relative py-10 px-10 sm:max-w-4xl sm:mx-auto space-y-12'}>
            <div className={'font-label'}>
              {`👋 Come say hi on `}<a href={"https://twitter.com/amrancz"} target={"_blank"}>Twitter</a>
            </div>
          </div>  
          </footer>
        )
}

export default Footer
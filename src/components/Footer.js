import React from 'react'
import { Link } from 'gatsby'
import CustomLink from '../components/CustomLink'


function Footer() {
  return (
    <footer>
      <div className={'relative pb-8 px-12'}>
              {`👋 Come say hi on `}<CustomLink link={'https://twitter.com/amrancz'} target={'_blank'} text={'Twitter'}></CustomLink>
      </div>  
    </footer>
        )
}

export default Footer
import React from 'react'
import { Link } from 'gatsby'
import CustomLink from '../components/CustomLink'


function Footer() {
  return (
    <footer className={'flex justify-center pt-6 pb-8 px-12'}>
      <div>
      {`👉 You can also find me on `}<CustomLink link={'https://twitter.com/amrancz'} target={'_blank'} text={'Twitter'}></CustomLink>  
      </div>
    </footer>
        )
}

export default Footer
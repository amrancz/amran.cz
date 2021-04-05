import React from 'react'
import CustomLink from '../components/CustomLink'


function Footer() {
  return (
    <footer className={'flex justify-center text-center py-8 px-12'}>
      <div>
      © 2021  · <CustomLink link={'https://twitter.com/amrancz'} target={'_blank'} text={'Twitter'}></CustomLink> · <CustomLink link={'mailto:adam@amran.cz'} target={'_blank'} text={'Email'}></CustomLink>  
      </div>
    </footer>
        )
}

export default Footer
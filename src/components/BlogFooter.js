import React from 'react'
import CustomLink from './CustomLink'

function BlogFooter() {
    return (
      <div className={'bg-slate-100 dark:bg-slate-800 dark:highlight-white/5 shadow-md dark:shadow-lg flex flex-col rounded-xl p-12 space-y-4'}>
        <p>
        <CustomLink link={`https://twitter.com/amrancz`} target={'_blank'} style={'themeable'} text={'Follow me on Twitter'}></CustomLink> for updates on new articles and more of my thinking.
        </p>
        <p>
          Do you want to reach out about this article?
          {' '}<CustomLink link={`mailto:adam@amran.cz?subject=Message from amran.cz`} style={'themeable'} target={'_blank'} style={'themeable'} text={'Email me'}></CustomLink>
        </p>
      </div>
    )
}

export default BlogFooter

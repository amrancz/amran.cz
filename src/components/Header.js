import React from 'react'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'

function Header() {
  return (
          <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
        )
}

export default Header

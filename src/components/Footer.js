import React from 'react'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'

function Footer() {
  return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
              <div>
                <Link
                    style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                    }}
                    to={`/`}
                    >
                    Adam Amran
                </Link>
              </div>
              <div
                style={{
                    float: `right`,
                }}
              >
                <Link
                    style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                    marginLeft: `1rem`
                    }}
                    to={`/work`}
                    >
                    Work
                </Link>
                <Link
                    style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                    marginLeft: `1rem`
                    }}
                    to={`/writing`}
                    >
                    Writing
                </Link>
                <Link
                    style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                    marginLeft: `1rem`
                    }}
                    to={`/about`}
                    >
                    About
                </Link>
              </div>
          </div>
        )
}

export default Footer

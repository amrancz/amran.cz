module.exports = {
  siteMetadata: {
    title: ``,
    author: `Adam Amran`,
    description: `Adam Amran's writing and portfolio`,
    siteUrl: `https://amran.cz`,
    email: `adam@amran.cz`,
    social: {
      twitter: `amrancz`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adam Amran`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/writing`,
        name: `writing`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/work`,
        name: `work`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-spotify`,
      options: {
        clientId: `698753a5718b45679931c2fe669574e3`,
        clientSecret: `895126325d2f458dabe442736e04b742`,
        refreshToken: `AQBmirySuZ8GIn3K9ZMuPOkAZlneEqzs-21Chn1ehHjA8H1Hrhx7GHzN8r2IDoIKcRWU_r6gTRMohiLD51JlZYWYp5F8Ukki0epGmCf65m8z20cdTpUBROovOhHOc2cBrkY`,
    
        fetchPlaylists: false, // optional. Set to false to disable fetching of your playlists
        fetchRecent: true, // optional. Set to false to disable fetching of your recently played tracks
        timeRanges: ['short_term', 'medium_term', 'long_term'], // optional. Set time ranges to be fetched
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/fonts/*': [
            'Cache-Control: public',
            'Cache-Control: max-age=365000000',
            'Cache-Control: immutable',
          ],
        },
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1200,
        backgroundColor: 'transparent',
        disableBgImageOnAlpha: true,
        quality: 100,
        wrapperStyle: 'border-radius: 12px; margin-top: 8px; margin-bottom: 8px'
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              backgroundColor: 'transparent',
              disableBgImageOnAlpha: true,
              quality: 100,
              wrapperStyle: 'border-radius: 12px; margin-top: 8px; margin-bottom: 8px'
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        // a workaround to solve mdx-remark plugin compat issue
        // https://github.com/gatsbyjs/gatsby/issues/15486
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              backgroundColor: `transparent`,
            },
          },
          `gatsby-remark-images-medium-zoom`
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
              backgroundColor: `transparent`,
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`, // Important!
            options: {
              background: "#000",
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },

          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: `${__dirname}/src/images/portraitSmall.jpg`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx-embed`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-use-dark-mode`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `amran.cz`,
      },
    },
  ],
}

/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
      siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Press Start 2P`
        ],
        display: 'swap'
      }
    }
  ]
}

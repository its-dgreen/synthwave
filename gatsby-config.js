module.exports = {
  siteMetadata: {
    title: `Synthwave`,
    description: `Fun retro-style site that harkens back to the 1980's`,
    author: `@its-dgreen`,
  },
  pathPrefix: '/synthwave',
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#b967ff`,
        theme_color: `#b967ff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      // Added custom fonts
      // https://dev.to/iangloude/4-steps-to-self-hosted-fonts-in-gatsby-aj2
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Streamster, Atarian System'],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
  ],
};

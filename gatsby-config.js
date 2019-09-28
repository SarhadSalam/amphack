const theme = require('./src/theme');

module.exports = {
  siteMetadata: {
    name: `Housing`,
  },  
  plugins: [
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true
      }
    },
    `gatsby-plugin-typescript`,
    'gatsby-plugin-tslint',
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-less',
      options: {
        javascriptEnabled: true,
        modifyVars: theme
      }
    },
  ],
}

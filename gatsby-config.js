module.exports = {
  siteMetadata: {
    title: 'Fridge App'
  },
  plugins: [
    'gatsby-mdx',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },
    {
      resolve: `@wapps/gatsby-plugin-material-ui`,
      options: {
        theme: {
          primaryColor: '#9c27b0'
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: []
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },

    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ],
  pathPrefix: `/fridge_app`
};

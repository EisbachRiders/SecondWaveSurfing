module.exports = {
  siteMetadata: {
    title: "Second Wave Surfing: Surf Equipment from Munich",
    titleTemplate: "",
    description:
      "Local brand from Munich that offers sustainably packaged surf accessories and equipment for SUP, River Surfing, Ocean Surfing, Kite Surfing and more!",
    url: "https://www.secondwavesurfing.com", // No trailing slash allowed!
    siteUrl: "https://www.secondwavesurfing.com",
    image: "/src/assets/logos/logo.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@SecondSurfing",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/logos`,
        name: `logos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/websiteImages`,
        name: `websiteImages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `shopCategory`,
        path: `${__dirname}/src/assets/shopCategory`,
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
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `https://secondwavesurfing.com/shop/graphql`,
        verbose: true,
        develop: {
          nodeUpdateInterval: 3000,
          hardCacheMediaFiles: true,
        },
        production: {
          hardCacheMediaFiles: false,
        },
        debug: {
          graphql: {
            showQueryOnError: false,
            showQueryVarsOnError: true,
            copyQueryOnError: true,
            panicOnError: true,
            // a critical error is a WPGraphQL query that returns an error and no response data. Currently WPGQL will error if we try to access private posts so if this is false it returns a lot of irrelevant errors.
            onlyReportCriticalErrors: true,
          },
        },
        excludeFieldNames: [`blocksJSON`, `saveContent`],
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `27192288280`,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GA_KEY, // leave empty if you want to disable the tracker
          anonymize: true, // default
        },
        googleTagManager: {
          trackingId: "", // leave empty if you want to disable the tracker
          dataLayerName: "dataLayer", // default
        },
        facebookPixel: {
          pixelId: "", // leave empty if you want to disable the tracker
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production"],
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Second Wave Surfing`,
        short_name: `SecondWaveSurfing`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#FEF9C7`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/assets/logos/logo.png`,
      },
    },
    "gatsby-theme-material-ui",
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}

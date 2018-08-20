import React, { Component } from 'react';

const isProd = process.env.NODE_ENV === 'production';

export default {
  plugins: ['react-static-plugin-sass'],
  siteRoot: isProd ? 'https://www.heardatwork.co/' : 'http://localhost:3000/',
  getSiteData: () => ({
    title: 'Heard at Work',
    description: 'A collection of overheard exclamations that aims to capture what it’s like to work in a New York design studio.',
    type: 'website',
    url: 'https://www.heardatwork.co/',
    site_name: 'Heard at Work',
    imageUrl: 'https://www.heardatwork.co/social-image.png',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/Components/Home',
      },
      {
        path: '/about',
        component: 'src/Components/About',
      },
      {
        path: '/contact',
        component: 'src/Components/Contact',
      },
      {
        path: '404',
        component: 'src/Components/404',
      },
    ]
  },
  Document: class CustomHtml extends Component {
    render () {
      const {
        Html, Head, Body, children, siteData,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-71032587-2"></script>
            <script>
              {
                `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-71032587-2');
                `
              }
            </script>

            <meta name="description" content={`${siteData.description}`} />
            <meta property="og:type" content={`${siteData.type}`} />
            <meta property="og:title" content={`${siteData.title}`} />
            <meta property="og:url" content={`${siteData.url}`} />
            <meta property="og:site_name" content={`${siteData.site_name}`} />
            <meta property="og:description" content={`${siteData.description}`} />
            <meta property="og:image" content={`${siteData.imageUrl}`} />
            <link rel="canonical" href={`${siteData.url}`} />


            <title>{siteData.title}</title>
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}

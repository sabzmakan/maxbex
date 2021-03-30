export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'مکس بکس',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/js/popper.js' },
      { src: '/js/bootstrap.js' },
      { src: '/js/flickity.js' },
      // { src: '/js/select2.js' },
      { src: "https://s3.tradingview.com/tv.js" },
      { src: "https://widgets.coingecko.com/coingecko-coin-heatmap-widget.js" },
      { src: "https://widgets.coingecko.com/coingecko-coin-compare-chart-widget.js" },
      { src: "https://widgets.coingecko.com/coingecko-coin-market-ticker-list-widget.js" },
      //<script  src="https://widgets.coingecko.com/coingecko-coin-heatmap-widget.js"></script>
      //{ src: '/js/socket.js' },
      // { src: '/js/main.js' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/style.css'
  ],
  server: {
    port: 3000, // default: 3000
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@aceforth/nuxt-optimized-images',
  ],

  optimizedImages: {
    optimizeImages: true
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/feed',
    '@nuxtjs/proxy',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'cookie-universal-nuxt',
    // https://go.nuxtjs.dev/bootstrap 
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'https://cryptopanic.com/api/v1/posts/?auth_token=40505ff3bf8c66c74ea0ed05bb755ef00f8700ab&currencies=ETH&filter=rising&format=rss',
      pathRewrite: {
        '^/api': '/'
      }
    },
    '/rss': {
      target: 'https://cryptopanic.com/news/rss',
      pathRewrite: {

      }
    }
  },
  feed: [
    // A default feed configuration object
    {
      path: 'https://cryptopanic.com/api/v1/posts/?auth_token=40505ff3bf8c66c74ea0ed05bb755ef00f8700ab&currencies=ETH&filter=rising&format=rss', // The route to your feed.
      async create(feed) {
        feed.options = {
          title: 'My blog',
          link: 'https://cryptopanic.com/api/v1/posts/?auth_token=40505ff3bf8c66c74ea0ed05bb755ef00f8700ab&currencies=ETH&filter=rising&format=rss',
          description: 'This is my personal feed!'
        }

        const posts = await (axios.get('https://cryptopanic.com/api/v1/posts/?auth_token=40505ff3bf8c66c74ea0ed05bb755ef00f8700ab&currencies=ETH&filter=rising&format=rss')).data
        posts.forEach(post => {
          feed.addItem({
            title: post.title,
            link: post.link,
          })
        })

        feed.addCategory('Nuxt.js')

        feed.addContributor({
          name: 'Alexander Lichter',
          email: 'example@lichter.io',
          link: 'https://lichter.io/'
        })
      },
      cacheTime: 1000 * 60 * 15, // How long should the feed be cached
      type: 'rss2', // Can be: rss2, atom1, json1
      data: ['Some additional data'] // Will be passed as 2nd argument to `create` function
    }
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}

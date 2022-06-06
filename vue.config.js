const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

/**
 * https://cli.vuejs.org/config/#devserver-proxy
 */
 module.exports = {
  devServer: {
    proxy: 'http://wordpress-titre.local'
  }
}
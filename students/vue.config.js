module.exports = {
    devServer: {
        proxy: {
          '/all': {
            target: 'http://192.168.43.239:3000/',
            ws: true,
            changeOrigin: true
          },
        }
    }
}
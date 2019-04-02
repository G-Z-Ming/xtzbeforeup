module.exports = {
    proxy: {
      '/':{
        target: 'http://124.172.243.65:8096',  //开发环境域名
        changeOrigin: true
      }
    }
  }
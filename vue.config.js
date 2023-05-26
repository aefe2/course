const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    // devServer: {
    //     proxy: {
    //         '^/CodingOnSideOfServer': {
    //                 target: 'http://localhost:8080/CodingOnSideOfServer',
    //             changeOrigin: true
    //         }
    //     }
    // }
})
module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: 'http://localhost/CodingOnSideOfServer',
    }
}

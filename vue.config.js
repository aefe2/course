const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
});
module.exports = {
    lintOnSave: false,
    devServer: {
        // В цоппе
        // proxy: 'http://localhost:8080/CodingOnSideOfServer/api',
        // Дома
        proxy: 'http://localhost/CodingOnSideOfServer/api',
    }
};

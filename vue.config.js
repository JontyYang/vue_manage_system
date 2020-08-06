module.exports = {
    devServer: {
        port: 2332,
        open: true
    },
    css:{
        loaderOptions:{
            sass: {
                // 这里data换成 prependData  并且重启vue项目即可
                data: `@import "@/assets/scss/_variable.scss";`
            }
        }
    }
}

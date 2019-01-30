module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/styles/_variables.scss";
                    @import "@/styles/_fonts.scss";
                `
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : './'
};
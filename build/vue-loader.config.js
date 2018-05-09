/*
* @Author: lvyufeng
* @Date:   2018/5/1
*
*/

module.exports = (isDev) => {
    return{
        preserveWhiteSpace:true,
        extractCSS:!isDev,
        cssModules:{
            // modules:true,
            localIdentName: '[local]_[hash:base64:5]',
            camelCase:true,
        },
    }
}

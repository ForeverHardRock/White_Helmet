// module.exports = {
//     entry: '/main/static/main/js/app.js',
//     mode: "development",
//     output: {
//         filename: 'bundle.js',
//         path: __dirname + '/main/static/dist/',
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.s[ac]ss$/i,
//                 use: [
//                     "style-loader",
//                     "css-loader",
//                     {
//                         loader: "sass-loader",
//                         options: {
//                             sourceMap: true
//                         }
//                     }
//                 ],
//             },
//         ],
//     },
// }
//
//
//
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: '/main/static/main/js/app.js',
    mode: "development",
    output: {
        filename: 'bundle.js',
        path: __dirname + '/main/static/dist/',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
}




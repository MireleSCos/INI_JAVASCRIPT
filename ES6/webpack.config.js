module.exports = {
    entry: ['@babel/polyfill','./src/main.js'],                     //Qual o arquivo principal 
    output: {                               // qual o local que deve ser enviado o arquivo convertido no ES4/5, como o babel manda para o bundle
        
        path:__dirname + '/public',                     //Onde o webpack está
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/public',//Caminho onde vai ficar a abertura do servidos, index  com yarn add webpack-dev-server -D

    },
    module:{
        rules: [                            // Como o Webpack deve se comporta quando o usuarios estiver importando novos arquivos JS
            {                               // Definir qual load ele deve usar (babel)
                                            // faz com que o babel execute no arquivo importado automaticamente
                test: /\.js$/,              //buscar por expressão regular
                exclude:/node_modules/,     // O babel não precisa execultar os aquivos dentro do node_modules
                use:{
                    loader: 'babel-loader', //Precisa instalar yarn add babel-loard@8.0.0-beta.0 -D como depedencia
                }
            }
        ]
    }
}
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: 'development', //  기본적으로 product모드 , ==> 모든 변수축약 및 압축
	entry: {
		index: './app/index.js',
		about: './app/about.js'
	}, // 여러 파일을 번들링한다
	output: {
		path: path.resolve(__dirname, 'dist'), //__dirname == webpack.config.js 위치한 경로,
		filename: '[name]_bundle.js' // 대가로 안에 name이 entry에 key 이건 약속임!!
	},
	module: {
		// 공정이라 생각하자 , test조건에 해당되는 파일이 발견되면 use의 공정을 이용해서 한다.
		rules: [
			{
				// 하나당 오브젝 하나 ,
				test: /\.css$/,
				use: ['style-loader', 'css-loader'] // css를 로드해서 style태그로 바꿔주는것 // 순서 중욧함!!!!! // 뒷쪽에 있는애가 먼저실행되므 주의해
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './app/index.html',
			filename: './index.html',
			inject: 'body',
			chunks: ['index'] // 이름은 key 위에 있는거 , 이러면 index.js만 들어감
		})
		// new HtmlWebpackPlugin({ //다른 파일엔 이렇게~~~
		// 	template: './app/index.html',
		// 	filename: './index.html',
		// 	inject: 'body',
		// 	chunks: ['index'] // 이름은 key 위에 있는거 , 이러면 index.js만 들어감
		// })
	]
};

//npx webpack --config webpack.config.prod.js
//기본값 == webpack.config.js
// style-loader , css-loader ==> css하려면 필수

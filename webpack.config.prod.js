var path = require('path');
//방출 모드
module.exports = {
	mode: 'production', //  기본적으로 product모드 , ==> 모든 변수축약 및 압축
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'), //__dirname == webpack.config.js 위치한 경로,
		filename: 'bundle.js'
	}
};

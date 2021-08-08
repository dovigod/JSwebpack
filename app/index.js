import hword from './hello.js';
import wword from './world.js';
import css from './css/style.css';
import _ from 'lodash';

window.onload = () => {
	const target = document.getElementById('root');

	target.innerHTML = _.join([hword, wword], '!!');

	console.log('css', css);
};

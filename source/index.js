import 'regenerator-runtime/runtime';
import DevTools from 'mobx-react-devtools';
import { React } from '@packages';
import ReactDom from 'react-dom';
import Router from './Router';
import '@styles/reset';

ReactDom.render(
	<div data-app-root>
		<DevTools />
		<Router />
  </div>,
  document.getElementById('main')
);

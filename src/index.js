/* global LocalStorage */
import React from 'react';
import ReactDOM from 'react-dom';

import rest from 'app-packages/rest';

import App from './App';

async function main() {
  const type = LocalStorage.get('type');
  const content = await rest.Video.getVideoContent({ type });
  /* init video player */
  ReactDOM.render(<App />, document.getElementById('root'));
}

main();



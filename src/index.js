import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(React.createElement('div', {}, 'app'), document.getElementById('app'));

if (import.meta.hot) {
  import.meta.hot.accept();
}

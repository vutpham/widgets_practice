import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Weather from './weather';

class Root extends React.Component {
  render() {
    return(
      <div className="root-container">
        <h1 id="main-header">Widgets</h1>
        <Clock />
        <Weather />
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});

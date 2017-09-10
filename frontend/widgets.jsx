import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Weather from './weather';
import AutoComplete from './autocomplete';

let NAMES = [
  'Carly',
  'Peter',
  'Anthony',
  'Anna',
  'Teddy',
  'Esther',
  'David',
  'Mandy',
  'Michael',
  'Stewart',
  'Sam',
  'Vincent'
];

class Root extends React.Component {
  render() {
    return(
      <div className="root-container">
        <h1 id="main-header">Widgets</h1>
        <Clock />
        <Weather />
        <AutoComplete names={ NAMES }/>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});

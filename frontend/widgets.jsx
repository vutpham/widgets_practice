import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Weather from './weather';
import AutoComplete from './autocomplete';
import Tabs from './tabs';

const NAMES = [
  'Mario',
  'Luigi',
  'Peach',
  'Bowser',
  'Toad',
  'Kirby',
  'Jigglypuff',
  'Yoshi',
  'Pikachu',
  'Ness',
  'Lucas',
  'Zelda',
  'Link'
];

const TABS = [
  {title: "1", content: "One"},
  {title: "2", content: "Two!"},
  {title: "3", content: "Three"}
];

class Root extends React.Component {
  render() {
    return(
      <div className="root-container">
        <h1 id="main-header">Widgets</h1>
        <Clock />
        <Weather />
        <AutoComplete names={ NAMES }/>
        <Tabs content={ TABS }/>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});

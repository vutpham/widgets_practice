import React, { Component } from 'react';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };

    this.selectTab = this.selectTab.bind(this);
  }

  showTitle() {
    let titles = [];

    this.props.content.forEach(category => {
      titles.push(category.content);
    });

    return titles;
  }

  selectTab(e){
    let tabIndex = e.currentTarget.innerText;

    console.log(tabIndex);
  }

  render() {
    let titles = this.showTitle().map((title, i) => {
      return (
        <h1 key={i} onClick={this.selectTab}>{title}</h1>
      );
    });

    return(
      <div className="tabs-container">
        <ul className="tabs-title">{titles}</ul>
        <article className="tabs-content"></article>
      </div>
    );
  }
}

export default Tabs;

import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AutoComplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.selectName = this.selectName.bind(this);
  }

  handleInput(e) {
    console.log(e.currentTarget.value);
    this.setState({inputVal: e.currentTarget.value});
  }

  matches() {
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return this.props.names;
    }

    this.props.names.forEach(name => {
      let sub = name.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  selectName(event) {
    let name = event.currentTarget.innerText;
    this.setState({inputVal: name});
  }

  render() {

    let results = this.matches().map((result, i) => {
      return (
        <li key={i} onClick={this.selectName}>{result}</li>
      );
    });

    return(
      <div className='autocomplete-widget'>
        <label>
          <h1 className="autocomplete-name">Autocomplete widget</h1>
          <input type="text"
            placeholder="Type something..."
            value={this.state.inputVal}
            onChange={this.handleInput}/>
          <ul id='results'>
            <ReactCSSTransitionGroup
              transitionName='auto'
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
              {results}
            </ReactCSSTransitionGroup>
          </ul>
        </label>
      </div>
    );
  }
}

export default AutoComplete;

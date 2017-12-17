import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, compose } from 'redux';

const todos = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      return state.concat([action.text]);
    default:
      return state;
  }
};

const store = createStore(
  todos,
  undefined,
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
);

class App extends Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

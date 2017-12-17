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

const createTodo = text => {
  return {
    type: 'CREATE_TODO',
    text
  };
};

class App extends Component {
  _handleChange = e => {
    e.preventDefault();
    let item = e.target.querySelector('input').value;
    this.props.createTodo(item);
  };
  render() {
    return (
      <div>
        <form onSubmit={this._handleChange}>
          <input type="text" name="listItem" />
          <button type="submit">button</button>
        </form>
        <br />
        {this.props.todos.map((text, id) => <div key={id}>{text}</div>)}
      </div>
    );
  }
}
const MyApp = connect(
  state => ({
    todos: state
  }),
  { createTodo }
)(App);

ReactDOM.render(
  <Provider store={store}>
    <MyApp />
  </Provider>,
  document.getElementById('root')
);

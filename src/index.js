import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css'

class App extends React.Component {
  render() {

    return (
      <div>
        <Button className="is-danger">
          Button Danger
          </Button>
          <Button className="is-primary">
          Button Primary
          </Button>
          <Button className="is-success">
          Button Success
          </Button>
      </div>
    );
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props)
  }
  getClassName() {
    let res = 'button';
    if (this.props.className)
      res += ' ' + this.props.className;
    let types = {
      isPrimary: 'is-primary',
      isSuccess: 'is-success',
      isDanger: 'is-danger',
    };
    for (const key in types) {
      if (this.props[key]) {
        res += ' ' + types[key];
      }
    }
    return res;
  }
  render() {
    return (
      <button className={this.getClassName()}>
        {this.props.children}
      </button>
    )
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
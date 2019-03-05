import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Redirect,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home/index';
import 'antd/dist/antd.css';

class App extends React.Component {
  shouldComponentUpdate() {
    console.log(111);
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/home" />}
            />
            <Route path="/home" component={Home} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

const dom = document.getElementById('root');

ReactDOM.render(<App />, dom);

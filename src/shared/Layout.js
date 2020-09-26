import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import routes from './routes';

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Welcome to React SSR!',
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </div>
    );
  }
}

export default Layout;

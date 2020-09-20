import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from '../client/Home';
import About from '../client/About';
import Contact from '../client/Contact';

export default class Layout extends React.Component {
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
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
      </div>
    );
  }
}

import Home from '../client/Home';
import About from '../client/About';
import Contact from '../client/Contact';
import Secret from '../client/Secret';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/about',
    component: About,
    exact: true,
  },
  {
    path: '/contact',
    component: Contact,
    exact: true,
  },
  {
    path: '/secret',
    component: Secret,
    exact: true,
  },
];

import React from 'react';
import Helmet from 'react-helmet';

const About = () => {
  return (
    <div className='wrapper'>
      <h2>This is the about page</h2>
      <Helmet>
        <title>About Page</title>
        <meta
          name='description'
          content='This is a proof of concept for React SSR'
        />
      </Helmet>
    </div>
  );
};

export default About;

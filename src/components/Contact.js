import React from 'react';
import Helmet from 'react-helmet';

const Contact = () => {
  return (
    <div>
      <h2>This is the contact page</h2>
      <Helmet>
        <title>Contact Page</title>
        <meta
          name='description'
          content='This is a proof of concept for React SSR'
        />
      </Helmet>
    </div>
  );
};

export default Contact;

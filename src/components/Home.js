import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Helmet from 'react-helmet';

import { fetchData } from '../redux/action';

const Home = () => {
  const circuits = useSelector((state) => state.data);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (circuits.length <= 0) {
      dispatch(fetchData());
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta
          name='description'
          content='This is a proof of concept for React SSR'
        />
      </Helmet>
      <h2>F1 2018 Season Calendar</h2>
      <ul>
        {circuits.map(({ circuitId, circuitName, Location }) => (
          <li key={circuitId}>
            {circuitName} - {Location.locality}, {Location.country}
          </li>
        ))}
      </ul>
    </div>
  );
};

Home.requestInitialData = fetchData; // static declaration of data requirements

export default Home;

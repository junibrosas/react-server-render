import { fetchCircuits } from '../api/api';

const storeData = (data) => {
  return {
    type: 'STORE_DATA',
    data,
  };
};

export const fetchData = () => {
  return (dispatch) => {
    return fetchCircuits().then((res) => dispatch(storeData(res)));
  };
};

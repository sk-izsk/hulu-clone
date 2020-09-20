import axios from 'axios';
import { baseURL } from './endpoints';

const getData = axios.create({
  baseURL: baseURL,
});

const fetchData = async (endpoint: string) => {
  try {
    const result = await getData.get(endpoint);
    return result;
  } catch (err) {
    console.warn(err);
  }
};

export { getData, fetchData };

import axios from 'axios';
import { baseURL } from './endpoints';

const getData = axios.create({
  baseURL: baseURL,
});

export { getData };

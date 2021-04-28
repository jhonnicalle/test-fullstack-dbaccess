import axios from 'axios';
import baseURL from './baseURL'

// Create axios client, pre-configured with baseURL
export default axios.create({
  baseURL: baseURL,
  timeout: 100000,
});
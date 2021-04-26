import axios from 'axios';
import baseURL from './baseURL'

// Create axios client, pre-configured with baseURL
export default axios.create({
  baseURL: 'http://358fd51e5138.ngrok.io/',
  timeout: 100000,
});
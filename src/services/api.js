// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://afc7a104784594208b12c3474fa3c924-1060237241.us-east-2.elb.amazonaws.com:9002',
});

// Define functions to make API requests (e.g., login request)

export default api;

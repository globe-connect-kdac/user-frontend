import axios from 'axios';
import { createUrl } from '../utils'

export const signup = async (firstName, lastName, email, userName, password) => {
  try {
      const url = createUrl('users/add-user');
      const body = { firstName, lastName, email, userName, password };
      const response = await axios.post(url, body);
      return response.data; // Ensure the response contains user details
  } catch (err) {
      return { status: 'error', error: err.response?.data || err.message };
  }
};

  
export const signin = async (email, password) => {
  try {
      const url = createUrl('users/login');
      const body = { email, password };
      const response = await axios.post(url, body);
      return response.data; // Ensure it includes ID, username, etc.
  } catch (err) {
      return { status: 'error', error: err.response?.data || err.message };
  }
};

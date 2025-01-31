import axios from 'axios';
import { createUrl } from '../utils'

export const signup = async(firstName, lastName, email, userName, password)=>{

    try {
      
      const url = createUrl('users/add-user');
      const body = {
          email,
          password,
          firstName,
          lastName,
          userName
      }
      // console.log('Sending request with body:', body);
      const response = await axios.post(url, body);
      return response.data;
    } 
    catch (err) {
      return {
        status: 'error', error: err
      }
    }
  
  }
  
export const signin = async(email, password) =>{

    try
    {
        const body = {email, password}
        const url = createUrl('users/login');
        const response = await axios.post(url, body);
        return response.data;
    }
    catch(err)
    {
        return {status: 'error', error: err}
    }
  }
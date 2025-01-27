import axios from 'axios';
import { createUrl } from '../utils'

export const signup = async(firstName, lastName, password, email)=>{

    try {
      
      const url = createUrl('users/signup');
      const body = {
        firstName, 
        lastName, 
        password,
        email
        
      }
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
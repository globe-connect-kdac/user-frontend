import axios from "axios"
import { toast } from "react-toastify";
import { createUrl } from "../utils"

export const getPosts = async()=>{

    try{
        const url = createUrl('posts/')
        const response = await axios.get(url);
      
        return response.data.data;
    }catch(err){
        toast.warn("Error Occurred");
    }
}


export const addpost = async(content, userId)=>{

    try {
      
      const url = createUrl('posts/add-post');
      const body = {
        content,
        userId
        
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
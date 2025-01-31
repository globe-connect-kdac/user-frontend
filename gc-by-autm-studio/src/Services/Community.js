import axios from "axios"
import { toast } from "react-toastify";
import { createUrl } from "../utils"

/*========== GET ALL COMMUNITIES ROUTE: posts/get-all */

export const getCommunities = async()=>{

    try{
        const url = createUrl('community/get-all')
        const response = await axios.get(url);
        console.log(response.data);
        
        return response.data;

    }catch(err){ 
        toast.warn("Error Occurred");
        return []
    }
}



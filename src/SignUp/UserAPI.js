import axios from "axios";

export const UserAPI =  {
    mobileNumber: (data) => { 
        return axios.post(`/data.json`, data);
    }
 
}

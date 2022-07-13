import axios from "axios";

const baseURL='https://collegeapplication-afd4c-default-rtdb.firebaseio.com/Register.json';
const config = {
   headers: {
     "Access-Control-Allow-Origin": "*",
     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
   }
 };
 

class collegeapplication{

   getAllCollegs(){
      return axios.get(baseURL);
   }

   newCollegeRegistartion(college){
     return axios.post(baseURL,college);
   }
   
   getCollegeById(collegeId){
      return axios.get(baseURL+"/"+collegeId);
   }

   deleteCollege(collegeId){
      return axios.delete('https://collegeapplication-afd4c-default-rtdb.firebaseio.com/Register/'+collegeId,config);
   }

}

export default new collegeapplication()

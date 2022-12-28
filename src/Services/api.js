import axios from "axios";

//API LINK
//ATTENTION: YOUR FIRST REQUEST MAY TAKE FROM 30sec TO 1min TO FINISH
const api = axios.create({
  baseURL:"http://localhost:3001/" ,
});

export default api;


//"https://delfos-api.onrender.com"
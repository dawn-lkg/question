import axios from "axios";

const httpInstance=axios.create({
    baseURL:"",
    timeout:5000,
})

httpInstance.interceptors.request.use(config=>{
   // console.log(config);
    return config;
},e=>Promise.rejecte(e))

httpInstance.interceptors.response.use(res=>res,e=>Promise.rejecte(e));

export default httpInstance;
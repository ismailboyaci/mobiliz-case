import axios from "axios";


/* var username=sessionStorage.getItem("email");
var password=sessionStorage.getItem("password"); */
export default axios.create({
  baseURL: "https://test001.testnet.mobiliz.com.tr/interview",
  headers: {
    "Content-type": "application/json",
    
  },
  auth: {
    username:"ism.byc@hotmail.com",
    password:"12345"
  },
});



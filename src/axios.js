import Axios from "axios";
const corsFix = 'https://cors-anywhere.herokuapp.com/';
const baseURL = "https://www.royaletracker.com/api/";
const localURL = "//localhost:52003/api/"
let headers = {};
if (localStorage.user){
   headers.Authorization = `bearer ${localStorage.user['token']}`;
}
export const axios = Axios.create({baseURL:localURL ,
headers,
});

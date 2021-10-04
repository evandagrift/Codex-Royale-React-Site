
import { axios } from "../axios";

export async function LoginFunctionAsync(username,password){
    try {
        const response = await axios.post('Users/login', {Username: username, Password: password});
        return response.data;
    }
    catch{ return undefined; }
    
}


export async function GetBattlesAsync(){
    try{
        const response = await axios.get("battles");
        return response.data;
    }
    catch {return undefined;}

}


export async function getPlayerDataAsync(tag){
          try { 
              const response = await axios.get("players/full/"+tag);
              return response.data;
          }
          catch{
              return undefined;
          }
  }
import { axios } from "../axios";
import { FormatTag } from "./scripts";

//const configOLD = { headers: { Authorization: `bearer ${user['token']}`}};

export async function LoginFunctionAsync(username, password) {
  try {
    const response = await axios.post("Users/login", {
      Username: username,
      Password: password,
    });
    return response.data;
  } catch {
    return undefined;
  }
}

export async function GetBattlesAsync() {
  try {
    const response = await axios.get("battles");
    return response.data;
  } catch {
    return undefined;
  }
}

export async function GetClanAsync(tag) {
  
  try {
    const searchTag = FormatTag(tag);
    

    const response = await axios.get("clans/" + searchTag);
    return response.data;
  } catch {
    return undefined;
  }
}
export async function GetPlayerBattlesAsync(playerTag) {
  if (playerTag) {
    try {
      let response = [];

      while (response.length == 0) {
        //times out to give the data feeder to catch up with the registered player
        await new Promise((r) => setTimeout(r, 2000));
        const responseBattles = await axios.get(
          "battles/player/" + FormatTag(playerTag)
        );

        if (responseBattles.data != null) return responseBattles.data;
      }
    } catch {
      return undefined;
    }
  }
}

export async function GetChestsAsync(playerTag) {
  try {
    const response = await axios.get(
      "players/chests/" + FormatTag(playerTag),
      {}
    );
    return response.data;
  } catch {
    return undefined;
  }
}

export async function updateUserSettings(user, tag, password, newPassword) {
  const config = {
    headers: { Authorization: `bearer ${user["bearerToken"]}` },
  };
  try {
    const response = await axios.post(
      "Users/Update",
      {
        user: {
          Username: user.username,
          Password: password,
          Tag: tag,
          BearerToken: user.bearerToken,
        },
        newPassword: newPassword,
      },
      config
    );

    return response.data;
  } catch {
    return undefined;
  }
}

export async function getPlayerDataAsync(tag) {
  try {
    const response = await axios.get("players/" + FormatTag(tag));
    return response.data;
  } catch {
    return undefined;
  }
}

/*


  async function getCard(id) {
    const response = axios.get("cards/" + id, config);
    return response.data;
  }

  */

// const getBattles = async (e) => {
//     let fetchedBattles = await GetBattlesAsync();
//     if(fetchedBattles != null)
//     {
//         setBattles(fetchedBattles);

//     setBattlesFetched(true);
//     }
// }

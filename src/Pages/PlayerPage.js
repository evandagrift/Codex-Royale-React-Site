import React, { useState, useContext } from "react";
import { Redirect, useParams } from 'react-router-dom';

import { UserContext } from "../UserContext";
import { axios } from "../axios";
    
import Battle from "../components/Battle";
import Player from "../components/Player";
import ChestCollection from "../components/ChestCollection";
import BattleCollection from "../components/BattleCollection";
import { FormatTag } from "../Utilities/scripts";


const PlayerPage = () => {

    const { user, setUser } = useContext(UserContext);
    
    const [player, setPlayer] = useState([]);
    const [deck, setDeck] = useState([]);
    const { playerTag } = useParams();
    //const configOLD = { headers: { Authorization: `bearer ${user['token']}`}};

    const config = { headers: { }};

    async function getCard(id)
    {
        const response = axios.get("cards/"+id,config);
        return response.data;
    }
    async function getPlayer()
    {
        let tag ='';
        let formattedTag = '';
        if((!playerTag) && (user)) { tag = FormatTag(user.tag); }
        else if(playerTag) {tag = FormatTag(playerTag); }

        if(tag)
{
        try{
        const response = await axios.get("players/full/"+tag,config);
        setPlayer(response.data);
    }
    catch{}
    }
    }

    let getBattlesButton = (<button onClick={getPlayer}>playerpage</button>);
    let draw = '';

    let drawChests = '';
    let drawPlayer = '';
    let drawBattles = '';
if(player != null)
{
    if(player["Name"])
    {
        drawPlayer = (<div><Player player={player}/></div>);
    if(player["Chests"])
    {
        drawChests = (<div><div className="container d-inline-block text-center">
        <ChestCollection chestCollection={player.Chests}/></div></div>);
    }
    console.log(player);
    if(player["Battles"]) { 
    drawBattles = (<div>
        <h1>Recent Battles</h1>
          <BattleCollection battleCollection={player.Battles} /></div>)}
          
          draw = (<div>
            {drawChests}
            {drawPlayer}
            {drawBattles}
        </div>);

    }
    else getPlayer();
}
else 
draw = (<Redirect to="/"/>);
        
    return (<div>
        {draw}
    </div>
    );

};


export default PlayerPage;
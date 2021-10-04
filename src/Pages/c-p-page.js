import React, { useState, useContext, useEffect } from "react";
import { Redirect, useParams } from 'react-router-dom';

import { UserContext } from "../UserContext";
    
import Battle from "../components/Battle";
import Player from "../components/Player";
import ChestCollection from "../components/ChestCollection";
import BattleCollection from "../components/BattleCollection";
import { FormatTag } from "../Utilities/scripts";
import { getPlayerDataAsync } from "../Utilities/axios-functions";


/**
 * Has info about the player
 */
export default function PlayerPage(){

    const { user, setUser } = useContext(UserContext);
    const [player, setPlayer] = useState();
    const { playerTag } = useParams();

    useEffect( async ()=>{
        // this code is called when the component first mounts
        // analogous to componentDidMount

        if(!playerTag)
        {
            if(user.tag) playerTag = user.tag;
        }
         
        let tagToUse = playerTag ? FormatTag(playerTag) : user ? FormatTag(user.tag) : undefined;

        let fetchedPlayer = await getPlayerDataAsync(playerTag);


        if(fetchedPlayer) setPlayer(fetchedPlayer);
    }, [] );
    

    if( !player ){
        return <div>Loading...</div>;
        // return <Redirect to="/"/>;
    }

    console.log(player);

    return <div>
        <Player player={player}/>
        {
            player.Chests &&
            <div>
                <div className="container d-inline-block text-center">
                    <ChestCollection chestCollection={player.Chests}/>
                </div>
            </div>
        }
        {
            player.Battles &&
            <div>
                <h1>Recent Battles</h1>
                <BattleCollection battleCollection={player.Battles} />
            </div>
        }
    </div>;
    
};








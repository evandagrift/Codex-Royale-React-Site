import React, { useState, useContext, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";

import { UserContext } from "../UserContext";
import { axios } from "../axios";

import Battle from "../components/Battle";
import Player from "../components/Player";
import ChestCollection from "../components/ChestCollection";
import BattleCollection from "../components/BattleCollection";
import { FormatTag } from "../Utilities/scripts";

const PlayerPage = () => {
  const { playerTag } = useParams();
  const { user, setUser } = useContext(UserContext);

  const [tag, setTag] = useState('');
  const [redirect, setRedirect] = useState(false);

  //same as componentDidMount
  useEffect( () => {
    if(playerTag != undefined) { setTag(playerTag) }
    else if(user && user.tag != "") { setTag(user.tag) }
    else setRedirect(true);
  }, [] );

let chestsCollection = '';
let playerData = '';
let playerBattles = '';

if(tag) 
{
  chestsCollection = <ChestCollection playerTag={tag} />;
  playerData = <Player playerTag={tag} />;
  playerBattles = <BattleCollection playerTag={tag} />;
}
if(!redirect)
{
  return <div>{chestsCollection}{playerData}{playerBattles}</div>;
}
else {return <Redirect to="/" />}
  
}

export default PlayerPage;

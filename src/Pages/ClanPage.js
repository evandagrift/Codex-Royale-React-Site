import React, { useState, useContext } from "react";
import { Redirect } from 'react-router-dom';

import { UserContext } from "../UserContext";
import Clan from "../components/Clan";
import { GetClanAsync } from "../Utilities/scripts";

const ClanPage = () => {

    const { user, setUser } = useContext(UserContext);
    
    const [clan, setClan] = useState([]);

    async function getClan()
    {
        const modifiedTag = "%23" + user.clanTag.substring(1);
        const returnClan = await GetClanAsync(modifiedTag);
       console.log(returnClan);
        setClan(returnClan);

    }

    let getBattlesButton = (<button onClick={getClan}>click</button>);
    let draw ='';
    if(clan["Name"])
    {
        draw = <div className="container d-inline-block text-center"><Clan clan={clan} /></div>
    }
    else
    draw=(getBattlesButton);


        
    return (
        <div>
            {draw}
        </div>
    );

};


export default ClanPage;
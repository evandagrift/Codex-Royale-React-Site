import React, {useState, useContext} from "react";

import {Redirect} from 'react-router-dom';
import { UserContext } from "../UserContext";
import { FormatTag } from "../Utilities/scripts";
import { GetBattlesAsync } from "../Utilities/axios-functions";
import BattleCollection from "../components/BattleCollection";
import PlayerPage from "./PlayerPage";

const HomePage = () => {

    const {user, setUser} = useContext(UserContext);
    const [battles, setBattles] = useState();
    const [playerSelected, setPlayerSelected] = useState(true);
    const [battlesFetched, setBattlesFetched] = useState(false);

    const [redirect, setRedirect] = useState(false);
    let searchString = '';
    const [redirectUrl, setRedirectUrl] = useState('');

    const getBattles = async (e) => {
        setBattlesFetched(true);
        let fetchedBattles = await GetBattlesAsync();
        if(fetchedBattles != null)
        {
            setBattles(fetchedBattles);
        }
    }    
    const submitSearch = (e) => {
        e.preventDefault();
        if(playerSelected)
        {
            setRedirectUrl("/player/" + FormatTag(searchString));
        }
        else{
            
            setRedirectUrl("/Clan/" + FormatTag(searchString));
        }
        setRedirect(true);
    }
    function handleChange(e) {
        searchString = e.target.value;
      }
    const clickPlayer = (e) => {

        e.preventDefault();
        setPlayerSelected(true);


    }

    const clickClan = (e) => {
        e.preventDefault();
        console.log("click clan");
        setPlayerSelected(false);
    }
    
    // if(!battles.length)
    // {getBattles()}
    
    let homeSplash = '';

    let tabs = ''
    let search = ''
    let drawBattles = '';

    if(playerSelected == true)
    {
        tabs = (<ul className="nav nav-tabs">
    
        <li className="nav-item">
            <button className="nav-link active" onClick={clickPlayer}>Player</button>
        </li>

        <li className="nav-item">
            <button key="$clanButton" className="nav-link" onClick={clickClan}>Clan</button>
        </li>
    </ul>);
search = (<div className="form-group d-inline"> <form key="$playerForm">
    
<input key="$user-input" onChange={handleChange} className="form-control"  placeholder="Example:#29PGJURQL" />
<button key="$player-submit-button" className="btn-primary" onClick={submitSearch}>Get Player Data</button>
</form></div>);

    }
    else{
        tabs = (<ul className="nav nav-tabs">
    
        <li className="nav-item">
            <button key="$playerButton" className="nav-link" type="button" onClick={clickPlayer}>Player</button>
        </li>

        <li className="nav-item">
            <button key="$clanButton" className="nav-link active" type="submit" onClick={clickClan}>Clan</button>
        </li>
    </ul>);
    search = (
        <div className="form-group"><form key="$playerForm">
    
    <input key="$clanInput" onChange={handleChange} className="form-control"placeholder="Example:#8CYPL8R" />
    <button key="$clanSubmitButton"  className="btn-primary float-right"  onClick={submitSearch}>Get Clan Data</button>
</form></div>);
    

    }
    




        homeSplash = (<div className="text-center"><div className="text-center">   
        <h1>Search for a Player or Clan</h1>
         
        <div className="text-center">
            <div className="col-2"></div>
            <div className="col-8">
                    <div>{tabs}</div><div>{search}</div>
    
                       
            </div>
            <div class="col-2"></div>
        </div>
    </div>
            </div>);
    

    if(redirect)
    {
        console.log(redirectUrl);
         homeSplash = (<Redirect push to={redirectUrl}/>);
    }


    if(battlesFetched == false)
    {
        getBattles();
    }


    
    if(battles != undefined)
    {
        console.log(battles);
        drawBattles = (<div>
            <h1>Recently Recorded Battles</h1>
            
            <div><BattleCollection battleCollection={battles}/></div>
        </div>);
    }
    if(user)
    {
    console.log(user);

    }


    return (
        <div>{homeSplash}{drawBattles}</div>
    );
};

export default HomePage;
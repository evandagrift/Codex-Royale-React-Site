import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import BattleCollection from "../components/BattleCollection";
import SearchBox from "../components/SearchBox";
import ChestCollection from "../components/ChestCollection";

const HomePage = () => {
  const { user, setUser } = useContext(UserContext);

  let upcomingChests = '';
  let drawBattles = <BattleCollection />;
  let searchBox = <SearchBox/>;
  let greeting = '';

  if(user) 
  { 
    upcomingChests = <ChestCollection playerTag={user.tag} />; 
  greeting = (<div><h1>Welcome {user.username}</h1></div>)
  }

  return (
    <div>
      {greeting}
      {upcomingChests}
      {searchBox}
      {drawBattles}
    </div>
  );
};

export default HomePage;


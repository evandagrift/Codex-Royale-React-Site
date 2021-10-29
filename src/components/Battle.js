import React, { Component } from "react";
import Deck from "./Deck";
import Time from "./Time";

class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { battle } = this.props;
    let draw = "";
    
    //only rendering 1v1 Battles
    if (battle.Team1DeckBId == 0 && battle.Team1DeckAId != 0) {
      let team1Result = "";
      let team2Result = "";

      if (battle.Team1Crowns > battle.Team2Crowns) {
        team1Result = "Winner";
        team2Result = "Loser";
      } else {
        team1Result = "Loser";
        team2Result = "Winner";
      }
      draw = (
        <div className="card container d-inline-block m-1 p-1">
          <div className="col-5 text-center d-inline-block">
                <h1>{battle.Team1Name}</h1>
                  <h6>{team1Result}</h6>
                  <p><b>Trophies:</b>{battle.Team1StartingTrophies}<i>({((team1Result == "Winner") ? "+"+battle.Team1TrophyChange : battle.Team1TrophyChange )})</i></p>
                  <p className="text-center"><b>Crowns:</b>
                  {battle.Team1Crowns}</p>
                  <Deck deck={battle.Team1DeckA} />

              </div>

            <div className="col-2 d-inline-block">
              <h1>VS</h1><Time  time={battle.BattleTime}/>
            </div>

              <div className="col-5 text-center d-inline-block">
                <h1>{battle.Team2Name}</h1>
                  <h6>{team2Result}</h6>
                  <p><b>Trophies:</b>{battle.Team2StartingTrophies}<i>({((team2Result == "Winner") ? "+"+battle.Team2TrophyChange : battle.Team2TrophyChange )})</i></p>
                  <p className="text-center"><b>Crowns:</b> {battle.Team2Crowns}</p>
                  <div>
                  <div className="col-2"/>
                  <Deck className="col-8"deck={battle.Team2DeckA} />
                  <div className="col-2"/>
                  </div>


              </div>
          </div>
      );
    }

    return <div className="text-center">{draw}</div>;
  }
}
export default Battle;

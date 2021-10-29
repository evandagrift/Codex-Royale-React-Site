import React, { Component } from "react";

import Card from "../components/Card";
import Deck from "../components/Deck";
import Time from "./Time";
import { getPlayerDataAsync } from "../Utilities/axios-functions";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: [],
    };
  }

  async componentDidMount() {
    const { playerTag } = this.props;

    //call player at given Tag

    try {
      const responsePlayer = await getPlayerDataAsync(playerTag);
      this.setState({ player: responsePlayer });
      console.log(this.state.player.Name)
    } catch {}
  }

  render() {
    let draw = "";
    
    if(this.state.player && this.state.player.Name)
    {
      draw = (
  <div className="player card">
    <div className="card-body text-center">
      <div className="row d-inline-flex text-center">
        <div className="col">
          <div className="row d-inline-flex">
            <h1 className="d-inline">{this.state.player.Name}</h1>
            <h6 className="d-inline">(Lvl.{this.state.player.ExpLevel})</h6>
            <p className="d-inline">
              <i>Tag:{this.state.player.Tag}</i>
            </p>
          </div>
          <p className="text-center m-0">
            <b>Current Deck</b>
          </p>
          <Deck className="deck" deck={this.state.player.Deck} />

          <p>
            <b>Last Seen:</b>
            <Time time={this.state.player.LastSeen} />
          </p>
        </div>

        <div className="col">
          <div className="text-center">
            <p>
              <b>Trophies:</b>
              {this.state.player.Trophies}
            </p>

            <p>
              <b>Best Trophies:</b>
              {this.state.player.BestTrophies}
            </p>
            <p>
              <b>Wins:</b>
              {this.state.player.Wins}
            </p>
            <p>
              <b>Losses:</b>
              {this.state.player.Losses}
            </p>
            <p>
              <b>Three Crown Wins:</b>
              {this.state.player.ThreeCrownWins}
            </p>

            <p>
              <b>Star Points:</b>
              {this.state.player.StarPoints}
            </p>

            <p>
              <b>Cards Discovered:</b>
              {this.state.player.CardsDiscovered}
            </p>

            <p>
              <b>Total Games:</b>
              {this.state.player.BattleCount}
            </p>
          </div>
        </div>

        <div className="col">
          <p>
            <b>Clan Name:</b>
            {this.state.player.Clan.Name}
          </p>

          <p>
            <b>Clan Tag:</b>
            {this.state.player.ClanTag}
          </p>
          <p>
            <b>Role:</b>
            {this.state.player.Role}
          </p>
          <p>
            <b>Recent Donations:</b>
            {this.state.player.Donations}
          </p>
          <p>
            <b>Recent Donations Recieved:</b>
            {this.state.player.DonationsReceived}
          </p>
          <p>
            <b>Total Donations:</b>
            {this.state.player.TotalDonations}
          </p>
          <p>
            <b>Total Donations Recieved:</b>
            {this.state.player.ClanCardsCollected}
          </p>

          <p>
            <b>War Day Wins:</b>
            {this.state.player.WarDayWins}
          </p>
        </div>
      </div>
    </div>
  </div>
);


    }
    else draw = (<h1>Loading Player Data</h1>)

    return <div>{draw}</div>;
  }
}
export default Player;

    /*
    if (tag != '') {
      try {
        const responsePlayer = await axios.post("players/official/" + FormatTag(tag));
        setPlayer(responsePlayer.data);

        // let response = [];
        
        //   while(response.length == 0)
        //   {
        //     //times out to give the data feeder to catch up with the registered player
        //     await new Promise(r => setTimeout(r, 2000));
        //     const responseBattles = await axios.get("battles/player/" + FormatTag(tag));

        //     if(responseBattles.data != null) response = responseBattles.data;

        //     setBattles(response);
        //   }

      } catch {}
    }
*/
import React, { Component } from "react";

import Card from "../components/Card";
import Deck from "../components/Deck";
import Time from "./Time";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { player } = this.props;
    let draw = "";
    if (player) {
      draw = (
        <div className="player card">
          <div className="card-body text-center">
            <div className="row d-inline-flex text-center">
              <div className="col">
                <div className="row d-inline-flex">
                  <h1 className="d-inline">{player.Name}</h1>
                  <h6 className="d-inline">(Lvl.{player.ExpLevel})</h6>
                  <p className="d-inline">
                    <i>Tag:{player.Tag}</i>
                  </p>
                </div>
                <p className="text-center m-0">
                  <b>Current Deck</b>
                </p>
                <Deck className="deck" deck={player.Deck} />

                <p>
                  <b>Last Seen:</b>
                  <Time time={player.LastSeen} />
                </p>
              </div>

              <div className="col">
                <div className="text-center">
                  <p>
                    <b>Trophies:</b>
                    {player.Trophies}
                  </p>

                  <p>
                    <b>Best Trophies:</b>
                    {player.BestTrophies}
                  </p>
                  <p>
                    <b>Wins:</b>
                    {player.Wins}
                  </p>
                  <p>
                    <b>Losses:</b>
                    {player.Losses}
                  </p>
                  <p>
                    <b>Three Crown Wins:</b>
                    {player.ThreeCrownWins}
                  </p>

                  <p>
                    <b>Star Points:</b>
                    {player.StarPoints}
                  </p>

                  <p>
                    <b>Cards Discovered:</b>
                    {player.CardsDiscovered}
                  </p>

                  <p>
                    <b>Total Games:</b>
                    {player.BattleCount}
                  </p>
                </div>
              </div>

              <div className="col">
                <p>
                  <b>Clan Name:</b>
                  {player.Clan.Name}
                </p>

                <p>
                  <b>Clan Tag:</b>
                  {player.ClanTag}
                </p>
                <p>
                  <b>Role:</b>
                  {player.Role}
                </p>
                <p>
                  <b>Recent Donations:</b>
                  {player.Donations}
                </p>
                <p>
                  <b>Recent Donations Recieved:</b>
                  {player.DonationsReceived}
                </p>
                <p>
                  <b>Total Donations:</b>
                  {player.TotalDonations}
                </p>
                <p>
                  <b>Total Donations Recieved:</b>
                  {player.ClanCardsCollected}
                </p>

                <p>
                  <b>War Day Wins:</b>
                  {player.WarDayWins}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div>{draw}</div>;
  }
}
export default Player;

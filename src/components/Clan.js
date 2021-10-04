import React, { Component } from "react";

import Card from "../components/Card";
import Deck from "../components/Deck";
import ClanPlayer from "./ClanPlayer";
import ClanPlayerCollection from "./ClanPlayerCollection";
import Time from "./Time";

class Clan extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { clan } = this.props;
    let clanDraw = '';
    let membersDraw = '';
    let membersHeader = '';


    clanDraw = (
      <div className="player card">
        <div className="card-body text-center">
          <div className="row d-inline-flex text-center">
                <h1 className="d-inline">{clan.Name}</h1>

                <h6 className="d-inline">
                  <b>Tag:</b>
                  {clan.Tag}
                </h6>
                <p className="d-inline">
                  <b>Members:</b>
                  {clan.Members}/50
                </p>
                <p className="d-inline">
                  <b>{clan.Description}</b>
                </p>

                <p>
                  <b>Required Trophies:</b>
                  {clan.RequiredTrophies}
                </p>


                <div className="col ">

                <p>
                    <b>Donations Per Week:</b>
                    {clan.DonationsPerWeek}
                  </p>
                <p>
                      <b>Clan War Trophies:</b>
                      {clan.ClanWarTrophies}
                    </p>
                    <p>
                      <b>Clan Chest Level:</b>
                      {clan.ClanChestLevel}
                    </p>
                    <p>
                      <b>Clan Chest Status:</b>
                      {clan.ClanChestStatus}
                    </p>
            </div>

                  <div className="col">
                    <p>
                      <b>Type:</b>
                      {clan.Type}
                    </p>
                  <p>
                    <b>Location Code:</b>
                    {clan.LocationCode}
                  </p>

                  <p>
                    <b>Badge Id:</b>
                    {clan.BadgeId}
                  </p>
                  <p>
                    <b>Clan Score:</b>
                    {clan.ClanScore}
                  </p>
                  </div>
                </div>
              </div>
        </div>
    );
if(clan.MemberList)
{      
  membersDraw = (<ClanPlayerCollection clanPlayerCollection={clan.MemberList}/>)
}

    return <div className="container text-center">{clanDraw}{membersDraw}</div>;
  }
}
export default Clan;

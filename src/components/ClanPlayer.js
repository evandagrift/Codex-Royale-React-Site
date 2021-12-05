import React, { Component } from 'react';
import { ConvertTimer,FormatTag } from "../Utilities/scripts";
import $ from "jquery"; 
import  styles from "../cssModules/ClanPlayer.module.css";
import { Redirect } from 'react-router-dom';

class ClanPlayer extends Component{
  constructor(props){
    super(props);
    this.state = {
      redirect:false
    };
  } 

  handleClick()
  {
    this.setState({redirect:true});
  }

  render () {


    const { clanPlayer } = this.props;

    let draw = '';
  
    if(this.state.redirect){ return <Redirect to={"/player/" + FormatTag(clanPlayer.Tag)} /> }

    if(clanPlayer)
    {
      return (<tr className={styles.clickableRow} onClick={this.handleClick.bind(this)} >
      <th scope="row" >{clanPlayer.Name}</th>
      <td>{clanPlayer.Tag}</td>
      <td>{clanPlayer.ExpLevel}</td>
      <td>{clanPlayer.Trophies}</td>
      <td>{clanPlayer.Trophies}</td>
      <td>{clanPlayer.Trophies}</td>
      <td>{clanPlayer.Trophies}</td>
      <td>{clanPlayer.Trophies}</td>  
      </tr>);
    }
    else return (<></>);
  }

}

export default ClanPlayer;   {/* <div className="row text-center d-inline-block">
<div className="col-2 clan-list-item"><b>{clanPlayer.Name}</b></div>
<div className="col-2 clan-list-item"><b>{clanPlayer.Tag}</b></div>
<div className="col-1 clan-list-item"><b>{clanPlayer.ExpLevel}</b></div>
<div className="col-1 clan-list-item"><b>{clanPlayer.Trophies}</b></div>
<div className="col-2 clan-list-item"><b>{clanPlayer.Role}</b></div>
<div className="col-2 clan-list-item"><b>{ConvertTimer(clanPlayer.LastSeen)}</b></div>
<div className="col-1 clan-list-item"><b>{clanPlayer.Donations}</b></div>
<div className="col-1 clan-list-item"><b>{clanPlayer.DonationsReceived}</b></div>
</div> */}
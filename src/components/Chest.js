import React, { Component } from 'react';
import styles from "../cssModules/Chest.module.css";
class Chest extends Component{
  constructor(props){
    super(props);
    this.state = {};
  } 


  
  render () {
          
    const { chest } = this.props;
    let draw = '';
    if(chest.Name)
    {
      draw = (<div  className={styles.chest}><p>{chest.Index+1}</p><img  key={'$id'+chest.Index}  src={chest.Url}/></div>);
    }
    return (
       <div>{draw}</div>
    );
  }

}
export default Chest;  
import React, {Component } from 'react';

class PasswordInputFormControls extends Component{
  constructor(props){
    super(props);
    this.state = {
        passwordA : '',
        passwordB : ''
    };
  } 
  

  render () {

    // let passwordMatchElement = ''

    // if(!passwordMatch)
    // {
    //     passwordMatchElement = 
    //     <p className="warning-text">Passwords are not a match</p>
    // }
    // else passwordMatchElement = '';


    let passwordElements = (
        <div className="card p-2">
          <label><b>Password</b>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password"
            onChange={this.props.passwordChangeValue} required />
          </label>
    
          <label><b>Re-Enter Password</b>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password"
            onChange={this.props.password2ChangeValue} required />
          </label>
        </div>
      );

//     if(this.state.dropDownToggle == false) { draw = (<button onClick={this.handleClick}>reset password</button>);
//  }
//     else {
//         draw = passwordElements;
//     }
    return (
       <div>{passwordElements}</div>
    );
  }

}
export default PasswordInputFormControls;  
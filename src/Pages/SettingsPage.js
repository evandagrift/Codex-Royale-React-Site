import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import PasswordResetForm from "../components/PasswordInputFormControls";


const UserSettingsPage = () => {
  const { user, setUser } = useContext(UserContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [tag, setTag] = useState("");
  const [clanTag, setClanTag] = useState("");

  const UpdateUser = (e) => {
    //check if there is a user
    //use user data to fill the settings
    //create component for the non password settings
    //create component for password reset have it drop down from a <a>
    //when click send push to backend
    //if no user reroute to login
  };

  //username, and validated email remain static
  //
  return (
    <div>
      <PasswordResetForm></PasswordResetForm>
    </div>
  );
};

export default UserSettingsPage;

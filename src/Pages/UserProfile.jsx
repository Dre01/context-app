import { useState } from "react";
import { useContext } from "react";
import { UsernameContext } from "../App";
import UsernameChange from "../Components/UsernameChange";

function UserProfile() {
  const { username, setUsername } = useContext(UsernameContext);

  return (
    <>
      <h1>Welcome to your dashboard, {username}</h1>
      <h4>Feel free to change your name:</h4>
      <UsernameChange />
    </>
  );
}

export default UserProfile;

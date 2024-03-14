import { useContext, useState } from "react";
import { UsernameContext } from "../App";

function UsernameChange() {
  const { username, setUsername } = useContext(UsernameContext);
  const [newUsername, setNewUsername] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder={username}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <button onClick={() => setUsername(newUsername)}>Change</button>
    </>
  );
}

export default UsernameChange;

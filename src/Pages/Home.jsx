import { useContext } from "react";
import { UsernameContext } from "../App";

function Home() {
  const { username, setUsername } = useContext(UsernameContext);

  return (
    <>
      <h1>Welcome to your Homepage, {username}</h1>
    </>
  );
}

export default Home;

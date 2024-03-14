import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/products"}> Produicts</Link>
      <Link to={"/userprofile"}> User Profile</Link>
    </>
  );
}

export default Nav;

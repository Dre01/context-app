import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import UserProfile from "./Pages/UserProfile";
import NotFound from "./Pages/NotFound";
import Nav from "./Components/Nav";
import { createContext, useState } from "react";

export const UsernameContext = createContext();

function App() {
  const [username, setUsername] = useState("Beth");

  return (
    <>
      <UsernameContext.Provider value={{ username, setUsername }}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UsernameContext.Provider>
    </>
  );
}

export default App;

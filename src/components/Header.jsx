import "./Header.css";
import CurrentDay from "./Date";
import Dialog from "./Dialog";
import NavBar from "./NavBar";
import React, { useState } from "react";
import News from "../pages/News.jsx";
import "../pages/News.css";

function Header() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  return (
    <header>
      <div>
        <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
          <div className="flex">
            <News/>
          </div>
          
        </Dialog>
      </div>

      <button className="log-in">Log In</button>

      <div className="title">
        <h1> New York Times</h1>
      </div>

      <div className="navBar">
        <NavBar/>
      </div>

      <hr />

      <CurrentDay className="date" />

      
      
    </header>
  );
}

export default Header;

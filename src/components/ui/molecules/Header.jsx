import React from "react";
import { Button } from "react-bootstrap";
import "./../../../style.css";

const Header = () => {
  return(
      <header className="navbar navbar-default header">
        <div className="container-fluid">
          <h5 className="logo">TAKE<span style={{color: "red"}}>LOOK</span></h5>
          <p className="phone">Телефон:</p>
          <p className="number_phone">8(800)-123-12-12</p>
          <Button variant="danger" className="fake_call_button">Обратный звонок</Button>
        </div>
      </header>
  )
}
export default Header;
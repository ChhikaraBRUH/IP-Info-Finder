import React, { useState } from "react";
import './App.css';

export default function App() {
  const [myIP, setMyIP] = useState(null);
  const [myCountry, setMyCountry] = useState(null);
  const [myCity, setMyCity] = useState(null);
  const [activity, setActivity] = useState("none");
  const [btnActivity, setBtnActivity] = useState("");

  function getIP() {
    fetch("https://api.db-ip.com/v2/free/self")
      .then((response) => response.json())
      .then((json) => {
        setActivity("block");
        setMyIP(json.ipAddress);
        setMyCity(json.city);
        setMyCountry(json.countryName);
      })
      .catch(errorHandler);
  }

  function errorHandler(error) {
    console.log("Error Occured: ", error);
    alert("Error Occured!\n", error);
  }
  return (
    <div className="App">
      <h1 className="heading">IP Information Finder</h1>
      <hr />
      <button
        style={{ display: btnActivity }}
        className="btn"
        onClick={() => {
          setBtnActivity("none");
          getIP();
        }}
      >Find My IP Info!</button>
      <div id="resultBox">
        <h2 style={{ display: activity }}>Your IP: <span className="userInfo">{myIP}</span></h2>
        <h2 style={{ display: activity }}>Your Country: <span className="userInfo">{myCountry}</span></h2>
        <h2 style={{ display: activity }}>Your City: <span className="userInfo">{myCity}</span></h2>
      </div>

      <hr />
      <div>
        Made with{"  "}
        <span role="img" aria-label="Red Heart">
          ❤️{" "}
        </span>
        by <a href="https://bruh.dev">Chaitanya</a>
      </div>
      <a href="https://twitter.com/ChhikaraBRUH">
        <img
          alt="Twitter Icon"
          src="https://image.flaticon.com/icons/png/512/1384/1384017.png"
        />
      </a>
      <a href="https://github.com/ChhikaraBRUH">
        <img
          alt="GitHub Icon"
          src="https://image.flaticon.com/icons/png/512/733/733609.png"
        />
      </a>
      <a href="https://linkedin.com/in/ChaitanyaChhikara">
        <img
          alt="LinkedIn Icon"
          src="https://image.flaticon.com/icons/png/512/1384/1384014.png"
        />
      </a>
    </div>
  );
}

import React from "react";
import "./Weather.css";
import "./icon.png";

export default function Weather() {
  return (
    <div className="container">
      <div className="raw">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a City"
            aria-label="Enter a City"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              Search
            </button>
          </div>
        </div>
      </div>
      <h2>City</h2>
      <div className="row">
        <div className="col-6">
          <img src="icon.png" alt="Main Icon" />
          <p>6°C</p>
        </div>

        <div className="col-6">
          <ul className="weather list-group p-3">
            <li className="list-group-item list-group-item-action list-group-item-light">
              Temperature
            </li>
            <li className="list-group-item list-group-item-action list-group-item-light">
              Wind
            </li>
            <li className="list-group-item list-group-item-action list-group-item-light">
              Humidity
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

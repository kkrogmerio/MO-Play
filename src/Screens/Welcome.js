import React, { useState, useEffect,useCa } from "react";

import axios from "axios";
import cookie from "js-cookie";
import { isAuth, signout } from "../Helpers/auth";
import { Link, Redirect } from "react-router-dom";

import "../Appt.css";

import { getWelcome } from "../Helpers/auth";
const Welcome = () => {
  const [username, setUsername] = useState("");

  setTimeout(()=>{  if (localStorage.getItem("onceWelcome") != null)
    localStorage.removeItem("onceWelcome");},7000)
  

  
  axios
    .post(`${process.env.REACT_APP_API_URL}/getData`, {
      token:cookie.get("token")
    })
    .then((res) => {

      setUsername(res.data.name);
    });

  return (
    <div>
      {!isAuth() ? <Redirect to="/" /> : null}
      {localStorage.getItem("onceWelcome") == 1 ? (
        <div
          style={{
            position: "absolute",
            margin: "0px",
            width: "100%",
            height: "100%",
            backgroundColor: "cornflowerblue",
          }}
          className="transitionnn10"
        >
          <h1
            style={{
              position: "relative",
              top: "30%",
              textAlign: "center",
              fontSize: "100px",
              fontWeight: "2100",
            }}
            className="transitionnn9"
          >
            Welcome,
            <br />
            <br />
            <br />
            {username}
          </h1>
        </div>
      ) : null}

      <nav
        className="navbar navbar-dark bg-dark flex-container"
        style={{
          opacity: "0.8",
          boxShadow: "10px 10px 8px 10px LightSlateGray",
        }}
      >
        <span className="navbar-brand mb-0 h1">
          <h1
            style={{
              color: "DeepSkyBlue",
              position: "relative",
              marginBottom: "0px",
              fontSize: "50px",
              fontWeight: "900",
              fontFamily: "Verdana",
            }}
          >
            <strong className="unselectable">MoPlay</strong>
          </h1>
        </span>

        <div className="dropdown">
          <button
            type="button"
            className="btn btn-info"
            data-toggle="dropdown"
            style={{ display: "flex" }}
          >
            <h1 style={{ fontSize: "30px" }}>{username}</h1>&nbsp;&nbsp;
            <i className="fas fa-user-cog fa-3x" />
          </button>
          <div
            className="dropdown-menu"
            style={{ position: "absolute", width: "100%" }}
          >
            <a
              className="dropdown-item"
              href="#"
              onClick={() => {
                signout();
              }}
            >
              Logout
            </a>
          </div>
        </div>
      </nav>

      <div
        className={getWelcome() ? "transition3" : ""}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Link to="/markdownPreview" title="Get the coded text!">
          <div className="appBox">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAADYklEQVR4nO2cPWsUURSGn91gQBJFIliLhYVRA0IK7S2t/AOK2mgTa39EohKsxAQhIAgWWiVaprGyiIqI4EclWJlEDWQZi7sb18l8nLl3dufCvg+cIplw3rP3TfbmnNm5IIQQQgghhBBCCCGEEEIIIYQQQggrp4EFYAPYAhJFrbHVXduF7lrnMg4sAp0Iih6V2AXud9d+nxmvIihwVONl2pTFCIoa9bgH0MK9j70BxhBN0gFmxoA7wPmGixHQBnZawFvgVMPFCMdGC9gEJpuuRACw2cJtKCIS2k0XIP5HhkSGDIkMGRIZMiQyZEhkyJDIqMOQVkks16DRY9mgVxfD0tlH6JSyjAnceCZU5wNwaAivx/q6BjX1HXjhANPAdoDGb2DGqCVDjNwI0LheQUeGVOCxR/4nFTVkSAUmgfcVcn8EDlfUkCEVOQP8MuT9A5zzyC9DPLhlyHvTM7cM8WSlIOfTgLwyxJMjwKeMfF+AqYC8MqSEiYJrs8BOX66d7vd8cvWQISWslFy/3ZdrruRnlwx6MsRQ+JWC6y3gGfCC4hnR1Qp6MqSk8G3c+CSPKYr3jf7Ri0VPhhgKtw4H06SHk1Y9GWIovGw/yWIpQE+GGAov2k/S9PaNOheq7B+HOpkz1NO4IdZRet7IvqpeOjrAZUOeUC7hnv+I3pCE8v2k6KaWj17WL8UFQy5fZvF/+qwRQxKK95P0vlG3IQnwAzhpyFeVE8D3CnVEY0hC9n6StW8MwpAEN7o5Zshp5Sjurz9oPZs0JL2fWG71huhlxWtsI5kyDgLrHvpRGZLwbz+xfhgiVC8rnhP2BFkbN6EOXcsoDEmAR90Yll5WzBty5zEfoBulIbHo+fQoPr2GDDFG1R7Ft9eQIRXC2qOE9BoypGKU9SihvYYM8Yi8HqWOXkOGeEa6R6mr15AhAdHrUersNXKjjseiyz6aH5q/aT1wRynBEEb3ek49MvQEVWTIkMiQIZEhQyJDhkSGDIkMGRIZbdwBZiIOfraBb01XIfb42gbWmq5C7LGqY2LjoQOcbePOIX/QcDHCHWb9rvfFOO6464GOlhW5sQYcSDs0jjvuuu6b9or82AXu9puRdW9hGrgGXASOozN962YL+AysAg/pe5sSQgghhBBCCCGEEEIIIYQYBf4CVKj2HzwgnpkAAAAASUVORK5CYII=" />
            <h1 style={{ fontWeight: "bold", fontSize: "40px" }}>
              Markdown Preview
            </h1>
          </div>
        </Link>
        <Link to="/calculator" title="Do your calculations!">
          <div className="appBox">
            <img src="https://img.icons8.com/cotton/100/000000/calculator--v2.png" />
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "40px",
                marginTop: "10px",
              }}
            >
              JS Calculator
            </h1>
          </div>
        </Link>
        <Link to="/randomQuote" title="Get your daily motivational quote!">
          <div className="appBox">
            <img src="https://img.icons8.com/doodle/100/000000/quote.png" />
            <h1 style={{ fontWeight: "bold", fontSize: "40px" }}>
              Quote of the day
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Welcome;

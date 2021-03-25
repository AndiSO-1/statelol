import React, { Component } from "react";
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const DivImg = styled.div`
  background: #9152f8; /* For old browsers */
  background: linear-gradient(to bottom,#7579ff,#b224ef);  /* For new browsers */
`;

const BtnState = styled.button`
  background: #9152f8; /* For old browsers */
  background: linear-gradient(to right,#7579ff,#b224ef);  /* For new browsers */
  transition: box-shadow 0.5s ease-out;
  &:hover {
    box-shadow: 0px 0px 15px 0px rgba(34, 35, 58, 1);
  }
`;

export default class Home extends Component {
  render() {
    return (
      <div className="container-xl my-5">
        <div className="row">

          <div className="d-flex flex-column col-sm-6">
            <div className="my-auto">
              <h3 className="lead pb-1">Account name</h3>
              <h1 className="pb-5">ThatWilly</h1>
              <BtnState className="btn text-white px-5 py-3">See all stats</BtnState>
            </div>
          </div>

          <DivImg className="col-sm-6 my-sm-0 my-5">
            <Img src="/assets/images/akali.png" alt="Akali" />
          </DivImg>

          <div className="col-12 my-5">
            <div className="container">
              <div className="row">
                <div className="d-flex flex-column col-sm mx-3 p-4 text-center bg-light border border-dark">
                  <h2>0.5</h2>
                  <h3 className="lead">Average Kills</h3>
                </div>
                <div className="d-flex flex-column col-sm mx-3 p-4 text-center bg-light border border-dark">
                  <h2>20</h2>
                  <h3 className="lead">Average Death</h3>
                </div>
                <div className="d-flex flex-column col-sm mx-3 p-4 text-center bg-light border border-dark">
                  <h2>1000</h2>
                  <h3 className="lead">Numbers of games</h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import styled from 'styled-components';

import Input from "./input";

const Inner = styled.div`
  background: #9152f8; /* For old browsers */
  background: linear-gradient(to bottom,#7579ff,#b224ef);  /* For new browsers */
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  transition: all .3s;
`;

export default class Login extends Component {
  render() {
    return (
      <div id="app" className="d-flex justify-content-center flex-column text-left h-100 w-100">
        <Inner className="m-auto border rounded">
          <form>

            <h3 className="text-white text-center">LOG IN</h3>

            <Input name="Username" type="email" placeholder="Username" color="white" required="required"/>

            <Input name="Password" type="password" placeholder="Password" color="white" required="required"/>

            <div className="form-group text-white">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
              </div>
            </div>
            <div className="text-center">
              <button id="btnLogin" type="submit" className="btn btn-light px-4 py-2 rounded-pill">Login</button>
            </div>
            <p className="forgot-password text-center mt-5">
              <a id="ForgotPassword" href="#" className="text-white">Forgot password?</a>
            </p>
          </form>
        </Inner>
        <label>test</label>
      </div>

    );
  }
}

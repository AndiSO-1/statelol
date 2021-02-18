import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>

                <h3 className="text-white">LOG IN</h3>

                <div className="form-group text-white">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" />
                </div>

                <div className="form-group text-white">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>

                <div className="form-group text-white">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-light px-4 py-2 rounded-pill">Login</button>
                </div>
                <p className="forgot-password text-center mt-5">
                    <a href="#" className="text-white">Forgot password?</a>
                </p>
            </form>
        );
    }
}

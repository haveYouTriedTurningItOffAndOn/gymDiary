import React, { Component } from "react";

class Login extends Component {

    

    state = {
        email: "",
        password: "",
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Login form submitted");
        console.log("email: " + this.state.email);
        console.log("password: " + this.state.password);
        this.setState({ email: "", password: "" });
    };

    render() {
        return (
            <div id="loginModal" className="modal">
                <div className="modal-background"></div>
                <div className="modal-content has-background-white-ter">
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left" action="auth/Login" method="post">
                            <input
                                className="input"
                                type="email"
                                placeholder="Weight@TargetRep.com"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            />
                            <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                            </span>
                            
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control has-icons-left">
                            <input
                                className="input"
                                type="password"
                                placeholder="******"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="control">
                    <button className="button is-primary" onClick={this.handleFormSubmit} value="submit" >Submit</button>
                </div>
                <button id="closeButtonModal" className="modal-close is-large" aria-label="close"></button>
            </div>

        );
    }
}
export default Login;
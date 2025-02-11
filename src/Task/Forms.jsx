import React, { Component } from "react";
class Forms extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            formdata: null
        };
    }
    handlechange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handlesubmit = (e) => {
        e.preventDefault();
        const { username, email, password } = this.state;
        this.setState({ formdata: { username, email, password } });
    };

    render() {
        console.log(this.state);

        return (
            <>
                <h1>Forms:</h1>
                <form onSubmit={this.handlesubmit}>
                    <label htmlFor="username">Name:</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        id="username"
                        // onChange={(e)=> this.setState({username:e.target.value})}/>
                        onChange={this.handlechange}
                    />
                    <br /><br />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        id="email"
                        // onChange={(e)=> this.setState({email:e.target.value})}/>
                        onChange={this.handlechange}
                    />
                    <br /><br />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        id="password"
                        // onChange={(e)=> this.setState({password:e.target.value})}/>
                        onChange={this.handlechange}
                    />
                    <br /><br />

                    <button type="submit">Login</button>
                </form>
                  {/* <div>loading.....</div> */}
                {this.state.formdata?   
                    <div>
                        <h2>Name: {this.state.formdata.username}</h2>
                        <h2>Email: {this.state.formdata.email}</h2>
                        <h2>Password: {this.state.formdata.password}</h2>
                    </div>:"loading..........."}
               
            </>
        );
    }
}

export default Forms;
 

import React from "react";
import "./login.css";
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     Rusername:'salsaal',
     Rpassword:'aalu',
      username: "",
      password: "",
    };
  }
  handleChange = (event) => {
    const input = event.target;
    const value =  input.value;
    this.setState({ [input.name]: value });
      console.log(this.state.username)
      console.log(this.state.password)
  };
  handleSubmit=()=>{
      const { username , password } = this.state
      if(this.state.Rusername===username && this.state.Rpassword===password){
          alert('done')
      localStorage.setItem('username',username)
      localStorage.setItem('password', password)
      this.props.loggedin()
      }
      else
      alert('not done')
  }
  render() {
    return (
      <div className="loginback">
        {" "}
        <div className="loginpage">
          <h3>Login</h3>
          <i
            className="fas fa-plus crossicon"
            onClick={() => {
              this.props.toggle();
            }}
          ></i>
          <h3>Discover Fashion!</h3>
          <p>You're just one step away from signing up</p>
          <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            type="username"
            className="logininput"
            id="username"
            placeholder="username"
            value={this.state.user}
            onChange={this.handleChange}
          />
          <input
            name="password"
            type="password"
            className="logininput"
            id="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

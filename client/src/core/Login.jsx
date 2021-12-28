import React from "react";

const Login = () => {
  return (
    <div className="wrapper">
      <nav>
        <h3>{"<Code-ite />"}</h3>
      </nav>
      <div className="login-container container-fluid">
        <div className="left">
          <form className="LoginForm">
            <h1>Login</h1>
            <div className="form-group-1">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                // ref={email}
              />
            </div>
            <div className="form-group-2">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                // ref={password}
              />
            </div>
            <div className="container m-3 ">
              <input
                type="button"
                value="Login"
                className="btn btn-dark m-4 px-5 py-2 login-button"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

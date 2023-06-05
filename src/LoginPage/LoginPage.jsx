import { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="login-wrapper">
      {toggle ? (
        <div className="sign-in">
          <div>
            <label htmlFor="user-name">User Name</label>
            <input type="text" name="user-name" id="user-name" />
          </div>
          <div>
            <label htmlFor="user-password">Password</label>
            <input type="password" name="user-password" id="user-password" />
          </div>
          <div>
            <button>Login</button>
          </div>
          <div>
            <p>
              Don't have account ? <button onClick={()=>setToggle(false)}>Sign-up</button>
            </p>
          </div>
        </div>
      ) : (
        <div className="sign-up">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="user-name">User Name</label>
            <input type="text" name="user-name" id="user-name" />
          </div>
          <div>
            <label htmlFor="user-password">Password</label>
            <input type="password" name="user-password" id="user-password" />
          </div>
          <div>
            <button>Register</button>
          </div>
          <div>
            <p>
              Already have an account ?{" "}
              <button onClick={() => setToggle(true)}>Sign-in</button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;

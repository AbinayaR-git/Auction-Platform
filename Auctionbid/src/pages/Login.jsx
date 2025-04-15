import { useState, useEffect } from "react";
import { useAuth } from "../contexts/useAuth";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoLockOpen } from "react-icons/io5";

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login_user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login | Auction Platform";  
    const favicon = document.querySelector("link[rel='icon']");
    const originalHref = favicon?.href;

    if (favicon) {
      favicon.href = "/login.svg"; 
    }
 
    return () => {
      if (favicon) {
        favicon.href = originalHref;
      }
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login_user(username, password);
    if (success) {
      navigate("/");
    }
  };

  return (
    <div> 
      <h2 className="h2">Login</h2>
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">
              Username <FaUser />
            </label>
            <input 
              type="text"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Password <IoLockOpen />
            </label>
            <input 
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="login-button">Login</button>

          <button
            type="button"
            className="back-home-button"
            onClick={() => navigate("/")} 
          >
            ← Back to Home
          </button>

          <p
            className="signup-button"
            onClick={() => navigate("/Auction/Signup")}
          >
            Don't have an account? <span className="signup">Signup</span>
          </p>
        </form>
      </div>
    </div>
  );
};

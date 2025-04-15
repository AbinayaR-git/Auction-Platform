import { useState, useEffect} from "react";
import { useAuth } from "../contexts/useAuth"; 
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoLockOpen } from "react-icons/io5";
import { MdOutlineMailLock } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

export const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Cpassword, setCPassword] = useState('');
  const { register_user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Signup | Auction Platform";
    const favicon = document.querySelector("link[rel='icon']");
    const originalHref = favicon?.href;

    if (favicon) {
      favicon.href = "/signup.svg"; 
    }
 
    return () => {
      if (favicon) {
        favicon.href = originalHref;
      }
    };
  }, []);
  

  const handleSignup = (e) => {
    e.preventDefault();
    register_user(username, email, password, Cpassword);
  };

  return (
    
    <div>
      <h2 className="h2">Signup</h2>
    <div className="login-container">
      <form className="login-form" onSubmit={handleSignup}>
        <div className="form-group">
          <label className="form-label">Username <FaUser  /></label>
          <input 
            type="text" 
            className="form-input"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email <MdOutlineMailLock /></label>
          <input 
            type="email" 
            className="form-input"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label className="form-label">Password <RiLockPasswordFill /></label>
          <input 
            type="password" 
            className="form-input"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label className="form-label">Confirm Password <IoLockOpen /></label>
          <input 
            type="password" 
            className="form-input"
            value={Cpassword} 
            onChange={(e) => setCPassword(e.target.value)} 
            required 
          />
        </div>

        <button type="submit" className="login-button">Sign Up</button>
      </form>

      <button
        className="back-home-buttonsignup"
        onClick={() => navigate("/")}
      >
        ← Back to Home
      </button>
    </div>

    </div>
  );
};

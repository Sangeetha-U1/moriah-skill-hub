import { useState } from "react";
import logo from "../assets/moriah-logo.png";

function AuthForm() {
  const [screen, setScreen] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  // LOGIN
  if (screen === "login") {
    return (
      <div className="auth-card">
        <img src={logo} className="form-logo" alt="Moriah Skill Hub" />

        <h2>Welcome Back!</h2>
        <p className="description">
          Login to continue to Moriah Skill Hub
        </p>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="forgot">
          <button onClick={() => setScreen("forgot")}>
            Forgot Password?
          </button>
        </div>

        <button
          className="primary-btn"
          onClick={() => setScreen("twofa")}
        >
          Login
        </button>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="social-btn">
          Continue with Google
        </button>

        <button className="social-btn">
          Continue with GitHub
        </button>

        <p className="bottom-text">
          Don't have an account?
          <button onClick={() => setScreen("register")}>
            Register
          </button>
        </p>
      </div>
    );
  }

  // REGISTER
  if (screen === "register") {
    return (
      <div className="auth-card">
        <img src={logo} className="form-logo" alt="Moriah Skill Hub" />

        <h2>Create Account</h2>

        <p className="description">
          Create your Moriah Skill Hub account
        </p>

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
          />
        </div>

        <button
          className="primary-btn"
          onClick={() => setScreen("twofa")}
        >
          Create Account
        </button>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="social-btn">
          Continue with Google
        </button>

        <button className="social-btn">
          Continue with GitHub
        </button>

        <p className="bottom-text">
          Already have an account?
          <button onClick={() => setScreen("login")}>
            Login
          </button>
        </p>
      </div>
    );
  }

  // FORGOT PASSWORD
  if (screen === "forgot") {
    return (
      <div className="auth-card">
        <img src={logo} className="form-logo" alt="Moriah Skill Hub" />

        <h2>Forgot Password?</h2>

        <p className="description">
          Enter your email and we'll send you a verification code.
        </p>

        <div className="form-group">
          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          className="primary-btn"
          onClick={() => setScreen("otp")}
        >
          Send OTP
        </button>

        <button
          className="back-btn"
          onClick={() => setScreen("login")}
        >
          ← Back to Login
        </button>
      </div>
    );
  }

  // OTP
  if (screen === "otp") {
    return (
      <div className="auth-card">
        <img src={logo} className="form-logo" alt="Moriah Skill Hub" />

        <h2>Verify Your Email</h2>

        <p className="description">
          We've sent a verification code to
          <br />
          <strong>{email || "your email"}</strong>
        </p>

        <div className="form-group">
          <label>Verification Code</label>

          <input
            className="otp-input"
            type="text"
            placeholder="Enter 6-digit OTP"
            maxLength="6"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>

        <button
          className="primary-btn"
          onClick={() => setScreen("reset")}
        >
          Verify OTP
        </button>

        <button className="resend-btn">
          Resend OTP
        </button>
      </div>
    );
  }

  // RESET PASSWORD
  if (screen === "reset") {
    return (
      <div className="auth-card">
        <img src={logo} className="form-logo" alt="Moriah Skill Hub" />

        <h2>Reset Password</h2>

        <p className="description">
          Create a new password for your account.
        </p>

        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm new password"
          />
        </div>

        <button
          className="primary-btn"
          onClick={() => setScreen("login")}
        >
          Reset Password
        </button>
      </div>
    );
  }

  // 2FA
  if (screen === "twofa") {
    return (
      <div className="auth-card">
        <img src={logo} className="form-logo" alt="Moriah Skill Hub" />

        <h2>Two-Factor Authentication</h2>

        <p className="description">
          Enter the verification code to continue.
        </p>

        <div className="form-group">
          <label>Verification Code</label>

          <input
            className="otp-input"
            type="text"
            placeholder="Enter 6-digit code"
            maxLength="6"
          />
        </div>

        <button
          className="primary-btn"
          onClick={() => setScreen("login")}
        >
          Verify & Continue
        </button>

        <button className="resend-btn">
          Resend Code
        </button>
      </div>
    );
  }
}

export default AuthForm;
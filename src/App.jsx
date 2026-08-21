import AuthForm from "./components/AuthForm";
import "./App.css";

function App() {
  return (
    <div className="auth-container">

      {/* LEFT - LOGIN / REGISTER */}
      <div className="auth-left">
        <AuthForm />
      </div>

      {/* RIGHT - IMAGE */}
      <div className="auth-right">
        <div className="image-content">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
            alt="Students learning"
          />

          <h1>Learn. Grow. Succeed.</h1>

          <p>
            Build your skills, improve your knowledge,
            and create a successful future with Moriah Skill Hub.
          </p>
        </div>
      </div>

    </div>
  );
}

export default App;
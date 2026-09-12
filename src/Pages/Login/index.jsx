import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login functionality will be connected once the backend is built.");
  };

  return (
    <div className="container" style={{ padding: "60px 0", maxWidth: "400px" }}>
      <h1 style={{ marginBottom: "20px" }}>Sign in</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: 600 }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", height: "44px", padding: "0 12px", border: "1px solid #ccc", borderRadius: "4px" }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: 600 }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", height: "44px", padding: "0 12px", border: "1px solid #ccc", borderRadius: "4px" }}
          />
        </div>
        <button
          type="submit"
          style={{ height: "44px", background: "#000", color: "#fff", border: "none", borderRadius: "4px", fontWeight: 600, cursor: "pointer" }}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
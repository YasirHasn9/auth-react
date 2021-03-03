import { useState } from "react";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={credentials.username}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={credentials.password}
          placeholder="Password"
        />
        <input type="submit" />
      </form>
    </>
  );
};

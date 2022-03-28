import { useLazyQuery } from "@apollo/client";
import { LOGIN_USER } from "modules/api";
import { routes } from "modules/routes";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signinUser] = useLazyQuery(LOGIN_USER, {
    variables: {
      email,
      password,
    },
  });

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await signinUser();
    console.log(response);

    const { login } = response.data;

    if (login) {
      localStorage.setItem("token", response.data?.login);
      router.push(routes.home);
    } else {
      alert("Something went wrong");
    }
  };
  return (
    <form onSubmit={login}>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button>Submit</button>
    </form>
  );
};

export default Login;

"use client";
import { useContext, useEffect, useState } from "react";
import users from "../data/userDb.json";
import { UserContext } from "./../contexts/UserProvider";

export const Login = () => {
  const [userInput, setUserInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);
  const [succesLogin, setSuccesLogin] = useState(false);

  const { userData, setUserData } = useContext(UserContext);

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handlePasswordInput = (event) => {
    setPasswordInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userExists = users.find(
      (user) => user.username === userInput && user.password === passwordInput
    );

    if (userExists) {
      setErrorLogin(false);
      setSuccesLogin(true);
      console.log("INICIO DE SESIÓN EXITOSO");

      setUserData(() => ({
        username: "a.poloh",
        password: "Ereslamejor$",
        name: "Arantxa",
        lastname: "Polo Huaman",
        email: "arianaarianapolo3@gmail.com",
      }));
    } else {
      console.log("ERROR: Usuario o contraseña incorrectos");
      setErrorLogin(true);
      setSuccesLogin(false);
    }
  };

  return (
    <div
      className={`flex flex-col w-1/6 min-w-[200px] bg-UP-COLOR3 bg-opacity-10 p-4 h-[320px] ${
        userData ? "hidden" : "block"
      }`}
    >
      <form
        className="flex flex-col border-b border-[#888]"
        onSubmit={handleSubmit}
      >
        <h2 className="border px-2 py-1 border-UP-COLOR2  mb-3 text-[#56778e] text-[14px] font-semibold bg-gradient-to-t from-[#a9bacf] to-[#fff]">
          Acceso
        </h2>
        <span className="text-[#56778e] text-xs py-1 font-semibold">
          Usuario
        </span>
        <input
          type="text"
          className="border border-UP-COLOR2 p-1 mb-2 text-[14px] font-medium"
          value={userInput}
          onChange={handleUserInput}
          id="username"
          autoComplete="on"
        />
        <span className="text-[#56778e] text-xs py-1 font-semibold">
          Contraseña
        </span>
        <input
          type="password"
          className="border  border-UP-COLOR2 p-1 mb-2"
          value={passwordInput}
          onChange={handlePasswordInput}
          id="password"
          autoComplete="on"
        />
        <span
          className={`text-xs m-2 text-red-600 text-center font-medium ${
            errorLogin ? "block" : "hidden"
          }`}
        >
          Revise el usuario y contraseña e intente de nuevo.
        </span>
        <button
          type="submit"
          className="border m-auto border-[#556] text-[#556] font-semibold py-1 px-2 mb-2  text-[14px] bg-gradient-to-t from-[#b8b8bc] to-[#ffffff]"
          id="submit"
        >
          Acceso
        </button>
      </form>

      <ul className="list-disc list-inside">
        <li>
          <a
            href=""
            className="text-[#3683ba] text-xs font-semibold hover:underline"
          >
            ¿Olvidó su contraseña?
          </a>
        </li>
        <li>
          <a
            href=""
            className="text-[#3683ba] text-xs font-semibold hover:underline"
          >
            Cambiar Contraseña
          </a>
        </li>
        <li>
          <a
            href=""
            className="text-[#3683ba] text-xs font-semibold hover:underline"
          >
            ¿Olvidó su Usuario?
          </a>
        </li>
      </ul>
    </div>
  );
};

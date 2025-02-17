"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserProvider";
import navData from "./../data/navData.json";
import { validatorUser } from "../hooks/useValidatorUser";
import { usePathname, useRouter } from "next/navigation";

export const Nav = () => {
  const pathname = usePathname();
  const { userData, setUserData } = useContext(UserContext);
  const [navSubOptions, setNavSubOptions] = useState(navData.inicio);

  const isValidate = validatorUser();

  const handleOption = (option) => {
    switch (option) {
      case "Inicio":
        setNavSubOptions(navData.inicio);
        break;
      case "Buscar":
        setNavSubOptions(navData.buscar);
        break;
      case "Inscripciones":
        setNavSubOptions(navData.inscripciones);
        break;
      case "Clases":
        setNavSubOptions(navData.clases);
        break;
      case "Calificaciones":
        setNavSubOptions(navData.calificaciones);
        break;

      case "Mi Perfil":
        setNavSubOptions(navData.miPerfil);
        break;

      case "Trámites":
        setNavSubOptions(navData.tramites);
    }
  };
  const router = useRouter();

  const logout = () => {
    setUserData(null);
    router.push("/ss/Home");
  };

  return (
    <nav className="">
      <div className="bg-UP-COLOR h-20 flex items-center justify-between p-1">
        <Link className="h-3/5 mx-5" href="/ss/Home">
          <img
            src="https://autoservicio2.up.edu.pe/ss/App_Themes/UPResponsive/Images/logo_up.png"
            className="h-full"
          />
        </Link>

        <div
          className={`self-start text-white text-xs font-bold pt-2 ${
            userData != null ? "block" : "hidden"
          }`}
        >
          Bienvenido (
          <span className="font-normal">
            {userData != null ? userData.username : ""}
          </span>
          )
        </div>

        <div className="flex">
          <Link
            className="text-white text-xs font-bold mx-2 hover:underline"
            href="/ErrorSystem=Aplicattion?wa=wsignin1.0&wtrealm=http%3a%2f%2fportalpowercampus.up.edu.pe%2f&wctx=http%3a%2f%2fportalpowercampus.up.edu.pe%2f_layouts%2fAuthenticate.aspx%3fSource%3d%252Fdefault%252Easpx&wreply=http%3a%2f%2fportalpowercampus.up.edu.pe%2f_trust%2fdefault.aspx"
          >
            PORTAL
          </Link>

          <div
            className="text-white text-xs font-bold mx-2 cursor-pointer hover:underline"
            onClick={logout}
          >
            CERRAR SESIÓN
          </div>
        </div>
      </div>

      <div className="bg-UP-COLOR2 text-white flex text-xs">
        {Object.keys(navData).map((key) => {
          const { title, link, needLogin } = navData[key];

          if (needLogin && isValidate == false) {
            return null;
          }

          return (
            <Link
              href={link || "#"}
              key={key}
              className={`p-2 py-3 hover:bg-UP-COLOR3 ${
                navSubOptions.title == title ? "bg-UP-COLOR3" : ""
              }`}
              onClick={() => handleOption(title)}
            >
              {title}
            </Link>
          );
        })}
      </div>

      <div className="flex text-white bg-UP-COLOR3 text-xs pb-[4px]">
        {navSubOptions.options.map((option, index) => {
          const { title, link, needLogin } = option;

          if (needLogin && isValidate == false) {
            return null;
          }

          return (
            <Link
              key={index}
              className={`pt-[10px] px-[10px] pb-[8px] hover:underline ${
                pathname === link
                  ? "border-b-2 border-white font-medium hover:no-underline"
                  : ""
              }`}
              href={option.link || "#"}
            >
              {title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

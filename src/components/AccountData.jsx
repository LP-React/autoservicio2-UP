"use client";
import React from "react";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserProvider";

export const AccountData = () => {
  const { userData } = useContext(UserContext);
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-[#666666] text-[12px] font-medium py-1 px-4">
            Usuario:
          </td>
          <td className="text-[#666666] text-[12px] font-medium py-1 px-4">
            {userData.username}
          </td>
        </tr>
        <tr>
          <td className="text-[#666666] text-[12px] font-medium py-1 px-4">
            ID del SISTEMA:
          </td>
          <td className="text-[#666666] text-[12px] font-medium py-1 px-4">
            000-311-208
          </td>
        </tr>
        <tr>
          <td className="text-[#666666] text-[12px] font-medium py-1 px-4">
            Prefijo:
          </td>
          <td className="text-[#666666] text-[12px] font-medium py-1 px-4"></td>
        </tr>
        <tr>
          <td className="text-[#666666] text-[12px] font-medium py-1 px-4">
            Nombre:
          </td>
          <td className="text-[#666666] text-[12px] font-medium py-1 px-4">
            {userData.name.toUpperCase()}
          </td>
        </tr>
        <tr>
          <td className="text-[#666666] text-[12px] font-medium py-1 px-4">
            Segundo Nombre:
          </td>
          <td className="text-[#666666] text-[12px] font-medium py-1 px-4"></td>
        </tr>
        <tr>
          <td className="text-[#666666] text-[12px] font-medium py-1 px-4">
            Prefijo de Apellido:
          </td>
          <td className="text-[#666666] text-[12px] font-medium py-1 px-4"></td>
        </tr>
        <tr>
          <td className="text-[#666666] text-[12px] font-medium py-1 px-4">
            Apellido:
          </td>
          <td className="text-[#666666] text-[12px] font-medium py-1 px-4">
            {userData.lastname.toUpperCase()}
          </td>
        </tr>
        <tr>
          <td className="text-[#666666] text-[12px] font-medium py-1 px-4">
            Sufijo:
          </td>
          <td className="text-[#666666] text-[12px] font-medium py-1 px-4"></td>
        </tr>
        <tr>
          <td className="text-[#666666] text-[12px] font-medium py-1 px-4">
            Alias:
          </td>
          <td className="text-[#666666] text-[12px] font-medium py-1 px-4"></td>
        </tr>
        <tr>
          <td className="text-[#666666] text-[12px] font-medium py-1 px-4">
            Correo electrónico:
          </td>
          <td className="text-[#666666] text-[12px] font-medium py-1 px-4">
            {userData.email}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

"use client";

import React from "react";

export const MiniTableGrades = ({ cursoNotas }) => {
  return (
    <div className="w-full mt-2 mb-12">
      <table className="w-full">
        <thead className="border-b border-UP-COLOR2">
          <tr>
            <th className="text-[#00355e] py-3 text-[14px] font-semibold text-start">
              Tipo de Evaluación
            </th>
            <th className="text-[#00355e] py-3 text-[14px] font-semibold text-start">
              Peso (%)
            </th>
            <th className="text-[#00355e] py-3 text-[14px] font-semibold text-start">
              Nota
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.values(cursoNotas).map((cursoNota, index) => {
            const { nombre, peso, notas } = cursoNota;

            return (
              <React.Fragment key={index}>
                <tr>
                  <td className="text-[13px] p-[5px] font-semibold border-b text-[#232323]">
                    {nombre.toUpperCase()}
                  </td>
                  <td className="text-[13px] p-[5px] font-normal border-b text-[#232323]">
                    {peso}
                  </td>
                  <td className="text-[13px] p-[5px] font-normal border-b text-[#232323]"></td>
                </tr>
                <tr>
                  <td className="text-[13px] p-[5px] font-normal border-b text-[#232323] pl-10">
                    - {notas.nombre.toUpperCase()}
                  </td>
                  <td className="text-[13px] p-[5px] font-normal border-b text-[#232323]"></td>
                  <td className="text-[13px] p-[5px] font-normal border-b text-[#232323]">
                    {notas.nota}
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

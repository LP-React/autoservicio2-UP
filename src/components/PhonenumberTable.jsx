import React from "react";

export const PhonenumberTable = () => {
  return (
    <div className="w-full mt-2 mb-12">
      <table className="w-full">
        <thead className="border-b border-UP-COLOR2">
          <tr>
            <th className="text-[#00355e] py-3 text-[14px] font-semibold text-start">
              Tipo de Teléfono
            </th>
            <th className="text-[#00355e] py-3 text-[14px] font-semibold text-start">
              Descripción
            </th>
            <th className="text-[#00355e] py-3 text-[14px] font-semibold text-start">
              Teléfono
            </th>
            <th className="text-[#00355e] py-3 text-[14px] font-semibold text-start">
              País
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-[13px] p-[5px] font-semibold border-b text-[#232323]">
              Casa
            </td>
            <td className="text-[13px] p-[5px] font-semibold border-b text-[#232323]">
              (Principal)
            </td>
            <td className="text-[13px] p-[5px] font-semibold border-b text-[#232323]">
              000000000
            </td>
            <td className="text-[13px] p-[5px] font-semibold border-b text-[#232323]">
              Perú
            </td>
          </tr>
          <tr>
            <td className="text-[13px] p-[5px] font-normal border-b text-[#232323]">
              Celular
            </td>
            <td className="text-[13px] p-[5px] font-normal border-b text-[#232323]"></td>
            <td className="text-[13px] p-[5px] font-normal border-b text-[#232323]">
              980212853
            </td>
            <td className="text-[13px] p-[5px] font-normal border-b text-[#232323]">
              Perú
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

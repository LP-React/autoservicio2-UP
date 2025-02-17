import React from "react";

export const DataInformation = () => {
  return (
    <div className="flex justify-evenly">
      <div className="w-2/12 bg-[#4b7756] bg-opacity-10">
        <span className="text-[#4b7756] font-semibold w-full text-center text-[12px] py-1 block bg-[#4b7756] bg-opacity-20">
          Fotografía Actual
        </span>
        <img src="/img/photo.jpg" alt="" className="block m-auto my-2" />
      </div>

      <div className="w-9/12 bg-[#0F4167] bg-opacity-10">
        <span className="text-[#0F4167] font-semibold w-full text-center text-[12px] py-1 block bg-[#0F4167] bg-opacity-20">
          Datos en Uso
        </span>
        <table className="m-auto">
          <thead className="">
            <tr>
              <th className=""></th>
              <th className=""></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-[13px] p-[2px] text-end font-semibold border-b text-[#666666]">
                Género
              </td>
              <td className="text-[13px] p-[2px] pl-2 text-start font-semibold border-b text-[#666666] pr-16">
                Femenino
              </td>
            </tr>
            <tr>
              <td className="text-[13px] p-[2px] text-end font-semibold border-b text-[#666666]">
                Estado Civil
              </td>
              <td className="text-[13px] p-[2px] pl-2 text-start font-semibold border-b text-[#666666] pr-16"></td>
            </tr>
            <tr>
              <td className="text-[13px] p-[2px] text-end font-semibold border-b text-[#666666]">
                Ciudadanía
              </td>
              <td className="text-[13px] p-[2px] pl-2 text-start font-semibold border-b text-[#666666] pr-16]">
                Perú
              </td>
            </tr>
            <tr>
              <td className="text-[13px] p-[2px] text-end font-semibold border-b text-[#666666]">
                País de Nacimiento
              </td>
              <td className="text-[13px] p-[2px] pl-2 text-start font-semibold border-b text-[#666666] pr-16">
                Perú
              </td>
            </tr>
            <tr>
              <td className="text-[13px] p-[2px] text-end font-semibold border-b text-[#666666]">
                DNI
              </td>
              <td className="text-[13px] p-[2px] pl-2 text-start font-semibold border-b text-[#666666] pr-16">
                60420625
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

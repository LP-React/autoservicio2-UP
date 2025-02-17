"use client";
import { MiniTableGrades } from "@/components/MiniTableGrades";
import React, { useEffect, useState } from "react";

export const TableGrades = ({ notas = [] }) => {
  const openSmallWindow = (url) => {
    window.open(url, "_blank", "width=600,height=400");
  };

  const [tablasVistas, setTablasVistas] = useState([]);
  const [promedioG, setPromedioG] = useState({
    reconocidos: 0,
    intentados: 0,
    periodo: 0,
    obtenidos: 0,
    total: 0,
  });

  const verNota = (curso, nombre) => {
    const id = curso + " - " + nombre;

    if (tablasVistas.includes(id)) {
      setTablasVistas(tablasVistas.filter((item) => item !== id));
    } else {
      setTablasVistas([...tablasVistas, id]);
    }
  };

  useEffect(() => {
    if (!notas || notas.length === 0) return;

    const totalIntentados = notas.reduce((acc, item) => acc + item.creditos, 0);
    const totalObtenidos = totalIntentados; // Si siempre es igual, no es necesario recalcularlo
    const totalReconocidos = totalIntentados;
    const promNotas = notas.reduce(
      (acc, nota) => acc + nota.calificacionFinal,
      0
    );
    const totalCursos = notas.length;

    setPromedioG({
      intentados: totalIntentados,
      obtenidos: totalObtenidos,
      reconocidos: totalReconocidos,
      periodo: 0,
      total: promNotas < 0 ? 0 : totalCursos > 0 ? promNotas / totalCursos : 0, // Evita divisiones por cero
    });
  }, [notas]);

  return (
    <div className="w-full">
      <table className="border-collapse w-full">
        <thead className="border-b border-UP-COLOR2">
          <tr>
            <th className="text-[#00355e] py-3 text-[14px] font-semibold text-start">
              Sesión
            </th>
            <th className="text-[#00355e] py-3 text-[14px] font-semibold text-start">
              Curso
            </th>
            <th className="text-[#00355e] py-3 text-[14px] font-semibold text-start">
              Nombre
            </th>
            <th className="text-[#00355e] py-3 text-[14px] font-semibold text-end px-2">
              Créditos
            </th>
            <th className="text-[#00355e] py-3 text-[14px] font-semibold text-end px-2">
              Clases Programadas
            </th>
            <th className="text-[#00355e] py-3 text-[14px] font-semibold text-end px-2">
              Inasistencias (%)
            </th>
            {/* <th className="text-[#00355e] py-3 text-[14px] font-semibold text-end px-2">
              Ficha
            </th> */}
            <th className="text-[#00355e] py-3 text-[14px] font-semibold text-end px-2">
              Calificación de Periodo Final
            </th>
            <th className="text-[#00355e] py-3 text-[14px] font-semibold text-center px-2">
              Detalle de Notas
            </th>
          </tr>
        </thead>

        <tbody className="">
          {notas.map((cursoG, index) => {
            const {
              sesion,
              curso,
              nombre,
              creditos,
              clasesProgramadas,
              inasistencias,
              ficha,
              calificacionFinal,
              detalleNotas,
            } = cursoG;

            const cursoGID = curso + " - " + nombre;

            return (
              <React.Fragment key={index}>
                <tr key={index}>
                  <td className="text-[13px] p-[5px] font-normal border-b text-[#232323]">
                    {sesion}
                  </td>
                  <td className="text-[13px] p-[5px] font-normal border-b text-[#232323]">
                    {curso}
                  </td>
                  <td className="text-[13px] p-[5px] font-normal border-b text-[#232323]">
                    {nombre}
                  </td>
                  <td className="text-[13px] p-[5px] font-normal border-b text-[#232323] text-end">
                    {creditos.toFixed(3)}
                  </td>
                  <td
                    className="text-[13px] p-[5px] font-normal border-b text-UP-COLOR-LINK text-end cursor-pointer hover:underline"
                    onClick={() => openSmallWindow("https://autoservicio.up.edu.pe/ss/pcfichadoc_up/VisualizadorDoc.ashx")}
                  >
                    {clasesProgramadas}
                  </td>
                  <td
                    className="text-[13px] p-[5px]  border-b text-UP-COLOR-LINK font-medium text-end cursor-pointer hover:underline"
                    onClick={() => openSmallWindow("https://autoservicio.up.edu.pe/ss/pcfichadoc_up/VisualizadorDoc.ashx")}
                  >
                    {inasistencias}
                  </td>
                  {/* <td className="text-[13px] p-[5px]  border-b text-UP-COLOR-LINK font-medium text-center cursor-pointer hover:underline">
                    {ficha}
                  </td> */}
                  <td className="text-[13px] p-[5px]  font-normal border-b text-[#232323] text-end">
                    {calificacionFinal == -1
                      ? "RET"
                      : calificacionFinal == -2
                      ? "NCUM"
                      : calificacionFinal == -3
                      ? "ASIS"
                      : calificacionFinal.toFixed(2)}
                  </td>
                  <td
                    className="text-[13px] p-[5px]  border-b text-UP-COLOR-LINK font-medium cursor-pointer text-center hover:underline"
                    onClick={() => verNota(curso, nombre)}
                  >
                    Ver
                  </td>
                </tr>

                <tr>
                  <td colSpan={9}>
                    <div
                      className={
                        tablasVistas.includes(cursoGID)
                          ? "w-11/12 m-auto"
                          : "hidden"
                      }
                    >
                      <MiniTableGrades cursoNotas={detalleNotas} />
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>

      <div className="w-full mt-4 mb-12">
        <table className="w-8/12 m-auto">
          <thead className="border-b border-UP-COLOR2">
            <tr>
              <th className="text-[#00355e] py-3 text-[14px] font-semibold text-center"></th>
              <th className="text-[#00355e] py-3 text-[14px] font-semibold text-center">
                Créditos
              </th>
              <th className="text-[#00355e] py-3 text-[14px] font-semibold text-center"></th>
              <th className="text-[#00355e] py-3 text-[14px] font-semibold text-center">
                PGA
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-[13px] p-[5px] font-semibold border-b text-[#232323] pr-2 text-end">
                Reconocidos:
              </td>
              <td className="text-[13px] p-[5px] font-semibold border-b text-[#232323] text-center">
                {promedioG.reconocidos}
              </td>
              <td className="text-[13px] p-[5px] font-semibold border-b text-[#232323]"></td>
              <td className="text-[13px] p-[5px] font-semibold border-b text-[#232323]"></td>
            </tr>
            <tr>
              <td className="text-[13px] p-[5px] font-semibold border-b text-[#232323] pr-2 text-end">
                Intentados:
              </td>
              <td className="text-[13px] p-[5px] font-semibold border-b text-[#232323] text-center">
                {promedioG.intentados}
              </td>
              <td className="text-[13px] p-[5px] font-semibold border-b text-[#232323] text-end">
                Periodo:
              </td>
              <td className="text-[13px] p-[5px] font-semibold border-b text-[#232323] text-center">
                -
              </td>
            </tr>
            <tr>
              <td className="text-[13px] p-[5px] font-semibold border-b text-[#232323] pr-2 text-end">
                Obtenidos:
              </td>
              <td className="text-[13px] p-[5px] font-semibold border-b text-[#232323] text-center">
                {promedioG.obtenidos}
              </td>
              <td className="text-[13px] p-[5px] font-semibold border-b text-[#232323] text-end">
                Total:
              </td>
              <td className="text-[13px] p-[5px] font-semibold border-b text-[#232323] text-center">
                {promedioG.total}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

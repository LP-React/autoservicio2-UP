"use client";
import { HomeContent } from "@/components/HomeContent";
import { validatorUser } from "../../../../hooks/useValidatorUser";

export default function DegreeRequirements() {
  const title = "Planes de Estudio";
  const content =
    "Puede consultar los requisitos de cursos necesarios para completar el Programa seleccionado y el Grado a obtener en el Periodo especificado.";

  return (
    <div className="w-full flex">
      {validatorUser() ? (
        <div className="flex flex-col w-1/6 min-w-[200px] bg-UP-COLOR3 bg-opacity-10 p-4 ">
          <h2 className="border px-2 py-1 border-UP-COLOR2  mb-3 text-[#56778e] text-[14px] font-semibold bg-gradient-to-t cursor-pointer from-[#a9bacf] to-[#fff]">
            Opciones
          </h2>
          <span className="text-[#56778e] text-xs py-1 font-semibold">
            No hay periodos disponibles para crear Planes ¿Qué pasa si?
          </span>
        </div>
      ) : (
        ""
      )}
      <div className="w-full px-6 py-4">
        <HomeContent title={title} content={content} />
      </div>
    </div>
  );
}

"use client";
import { HomeContent } from "@/components/HomeContent";
import { validatorUser } from "../../../../hooks/useValidatorUser";
import { NeedLoginMessage } from "@/components/NeedLoginMessage";

export default function GradesHome() {
  const title = "Calificaciones";
  const content =
    "Puede consultar su Historial Académico no oficial que incluye los detalles acerca de su historial académico en la institución, ordenado por año y periodo académico. Puede también consultar sus calificaciones y solicitar que le sean enviadas copias de su Historial Académico a cualquier persona en especifico.";

  return validatorUser() ? (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
    </div>
  ) : (
    <NeedLoginMessage />
  );
}

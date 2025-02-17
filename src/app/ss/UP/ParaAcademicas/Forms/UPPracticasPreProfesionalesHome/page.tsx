"use client";

import { HomeContent } from "@/components/HomeContent";
import { validatorUser } from "../../../../../../hooks/useValidatorUser";
import { NeedLoginMessage } from "../../../../../../components/NeedLoginMessage";

export default function UPPracticasPreProfesionalesHome() {
  const title = "Prácticas Pre Profesionales";
  const content =
    "Puede realizar la inscripción de prácticas pre profesionales, consultar información sobre los requisitos para convalidar una práctica pre profesional. Adicionalmente, se podrán cargar los archivos solicitado durante el proceso de calificación de prácticas pre profesionales como informes y documentos proporcionados por la empresa en la que se realiza la práctica.";

  return validatorUser() ? (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
    </div>
  ) : (
    <NeedLoginMessage />
  );
}

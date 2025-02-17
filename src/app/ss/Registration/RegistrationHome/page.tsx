"use client"
import { HomeContent } from "@/components/HomeContent";
import { validatorUser } from "../../../../hooks/useValidatorUser";
import { NeedLoginMessage } from "../../../../components/NeedLoginMessage";

export default function RegistrationHome() {
  const title = "INSCRIPCIONES";
  const content =
    "Puede inscribir cursos de Educación Continua. Después autenticarse en el sistema, puede también inscribirse a cursos Tradicionales, consultar su plan académico y crear planes ¿Qué pasa si? para comparar su trabajo vigente de curso con los requisitos para obtener el grado para una carrera o especialidad diferente.";

  return validatorUser() ? (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
    </div>
  ) : (
    <NeedLoginMessage />
  );
}

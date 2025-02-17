"use client"

import { NeedLoginMessage } from "../../../../components/NeedLoginMessage";
import { validatorUser } from "../../../../hooks/useValidatorUser";
import { HomeContent } from "./../../../../components/HomeContent";

export default function ClassesHome() {
  const title = "Clases";
  const content =
    "La pestaña Clases proporciona opciones para los alumnos y los docentes. El alumno puede consultar su horario de cursos y consultar la lista de sus solicitudes de permiso de inscripción a cursos. Los docentes pueden consultar sus listas de clase, configurar sus secciones del curso, crear sus Páginas de Inicio de Curso, capturar calificaciones del alumno y precisar los datos del curso que pueden acceder sus asistentes.";

  return validatorUser() ? (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
    </div>
  ) : <NeedLoginMessage/>;
}

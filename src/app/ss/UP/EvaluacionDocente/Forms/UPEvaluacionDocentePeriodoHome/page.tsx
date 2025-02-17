"use client"
import { HomeContent } from "@/components/HomeContent";
import { validatorUser } from "@/hooks/useValidatorUser";
import { NeedLoginMessage } from "@/components/NeedLoginMessage";

export default function UPEvaluacionDocentePeriodoHome() {
  const title = "Evaluación docente";
  const content =
    "Los alumnos pueden evaluar a los docentes responsables de los cursos en los que está matriculado.";

  return validatorUser() ? (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
    </div>
  ) : <NeedLoginMessage/>;
}

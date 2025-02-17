"use client"

import { HomeContent } from "@/components/HomeContent";
import { validatorUser } from "../../../../hooks/useValidatorUser";
import { NeedLoginMessage } from "../../../../components/NeedLoginMessage";

export default function Checklist() {
  const title = "Avisos y Pendientes - Tareas Incompletas";
  const content = "No hay elementos en la lista de verificación.";

  return validatorUser() ?  (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
    </div>
  ) : <NeedLoginMessage/>;
}

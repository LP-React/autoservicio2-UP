"use client"

import { HomeContent } from "@/components/HomeContent";
import { validatorUser } from "../../../../hooks/useValidatorUser";
import { NeedLoginMessage } from "../../../../components/NeedLoginMessage";

export default function ScheduleHome() {
  const title = "Horario";
  const content = "No hay horario disponible en el Periodo 2025/CUR VERANO";

  return validatorUser() ? (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
    </div>
  ) : <NeedLoginMessage/>;
}

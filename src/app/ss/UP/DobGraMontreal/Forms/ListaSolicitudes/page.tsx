"use client"

import { HomeContent } from "@/components/HomeContent";
import { Solicitud } from "@/components/Solicitud";
import { validatorUser } from "@/hooks/useValidatorUser";
import { NeedLoginMessage } from "@/components/NeedLoginMessage";
export default function ListaSolicitudes() {
  const title = "Doble Grado - HEC Montreal";
  const content = "";

  return validatorUser() ? (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
      <Solicitud />
    </div>
  ) : <NeedLoginMessage/>;
}

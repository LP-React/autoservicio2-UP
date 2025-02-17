"use client"

import { HomeContent } from "@/components/HomeContent";
import { Solicitud } from "../../../../../../components/Solicitud";
import { validatorUser } from "../../../../../../hooks/useValidatorUser";
import { NeedLoginMessage } from "../../../../../../components/NeedLoginMessage";
export default function ListaSolicitudes() {
  const title = "Doble Grado University of London";
  const content = ""

  return validatorUser() ? (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
      <Solicitud />
    </div>
  ) : <NeedLoginMessage/>;
}

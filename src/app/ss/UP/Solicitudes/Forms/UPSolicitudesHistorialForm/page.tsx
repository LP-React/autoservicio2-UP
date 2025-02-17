"use client";

import { HomeContent } from "@/components/HomeContent";
import { validatorUser } from "../../../../../../hooks/useValidatorUser";
import { NeedLoginMessage } from "../../../../../../components/NeedLoginMessage";

export default function UPSolicitudesHistorialForm() {
  const title = "Mis Solicitudes";
  const content = "";
  return validatorUser() ? (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
      <p className="my-4 text-UP-COLOR-WARN font-medium">
        Las constancias o certificados tramitados por estudiantes o ex alumnos
        de pregrado, estarán disponibles para su recojo según los plazos
        establecidos en Trámites
      </p>
    </div>
  ) : (
    <NeedLoginMessage />
  );
}

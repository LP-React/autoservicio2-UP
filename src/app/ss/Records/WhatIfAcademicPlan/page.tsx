"use client";

import { HomeContent } from "@/components/HomeContent";
import { validatorUser } from "../../../../hooks/useValidatorUser";
import { NeedLoginMessage } from "../../../../components/NeedLoginMessage";

export default function WhatIfAcademicPlan() {
  const title = "Plan ¿Qué pasa si?";
  const content = "";

  return validatorUser() ? (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
      <p className="text-UP-COLOR-WARN text-[13px] font-semibold">
        No se puede crear un nuevo Plan Académico ¿Qué pasa si? debido a que ha
        alcanzado el número máximo permitido. Elimine un Plan Académico ¿Qué
        pasa si? existente e intente nuevamente.
      </p>
    </div>
  ) : (
    <NeedLoginMessage />
  );
}

"use client";

import { HomeContent } from "@/components/HomeContent";
import Link from "next/link";
import { validatorUser } from "../../../../hooks/useValidatorUser";
import { NeedLoginMessage } from "../../../../components/NeedLoginMessage";

export default function AcademicPlan() {
  const title = "Plan Académico";
  const content =
    "Puede consultar los datos sobre su progreso académico para completar el Plan Académico especificado.";

  return validatorUser() ? (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
      <h2 className="mt-3">Planes Académicos</h2>-{" "}
      <Link
        href={"/ss/Home"}
        className="text-UP-COLOR-LINK text-[12px] font-semibold hover:border-b hover:border-b-UP-COLOR2"
      >
        {" "}
        Egresado/Ing. de la Información
      </Link>
    </div>
  ) : (
    <NeedLoginMessage />
  );
}

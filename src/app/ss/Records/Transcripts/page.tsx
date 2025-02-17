"use client"

import { HomeContent } from "@/components/HomeContent";
import { validatorUser } from "../../../../hooks/useValidatorUser";
import { NeedLoginMessage } from "../../../../components/NeedLoginMessage";
import Link from "next/link";

export default function Transcripts() {
  const title = "Historia Académica No Oficial";
  const content =
    "Enseguida se muestra su Historial Académico No Oficial ordenado por año y periodo académico.";

  return validatorUser() ? (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
      <Link href={"/ss/Records/UPGradesAttendance"} className="text-UP-COLOR-LINK font-semibold underline"> VER HISTORIA ACADEMICA</Link>
    </div>
  ) : <NeedLoginMessage/>;
}

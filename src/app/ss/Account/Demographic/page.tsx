"use client";

import { HomeContent } from "@/components/HomeContent";
import { DataInformation } from "@/components/DataInformation";
import { validatorUser } from "../../../../hooks/useValidatorUser";
import { NeedLoginMessage } from "../../../../components/NeedLoginMessage";

export default function Demographic() {
  const title = "Datos Personales";
  const content = "";

  return validatorUser() ? (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
      <DataInformation />
    </div>
  ) : (
    <NeedLoginMessage />
  );
}

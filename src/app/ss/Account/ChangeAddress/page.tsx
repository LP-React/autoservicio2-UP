"use client"

import { HomeContent } from "@/components/HomeContent";
import { validatorUser } from "../../../../hooks/useValidatorUser";
import { NeedLoginMessage } from "../../../../components/NeedLoginMessage";

export default function ChangeAddress() {
  const title = "Mis Direcciones";
  const content = "";

  return validatorUser() ? (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
    </div>
  ) : <NeedLoginMessage/>; 
}

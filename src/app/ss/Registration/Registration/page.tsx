"use client"

import { HomeContent } from "@/components/HomeContent";
import { validatorUser } from "../../../../hooks/useValidatorUser";
import { NeedLoginMessage } from "../../../../components/NeedLoginMessage";

export default function Registration() {
  const title = "Cursos Tradicionales";
  const content = "";
  return  validatorUser() ? (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
      <p className="text-[#FF0000]"> - En este momento no puede inscribirse.</p>
    </div>
  ) : <NeedLoginMessage/>;
}

"use client";

import { HomeContent } from "@/components/HomeContent";
import { validatorUser } from "../../../../hooks/useValidatorUser";
import { NeedLoginMessage } from "../../../../components/NeedLoginMessage";

export default function DirectorySearch() {
  const title = "Directorio";
  const content =
    "Puede buscar personas en cualquiera de los directorios especificados. Seleccione el directorio y capture los datos de la persona que quiere encontrar.";

  return validatorUser() ? (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
    </div>
  ) : (
    <NeedLoginMessage />
  );
}

"use client";

import { HomeContent } from "@/components/HomeContent";
import { PhonenumberTable} from "@/components/PhonenumberTable";
import { validatorUser } from "../../../../hooks/useValidatorUser";
import { NeedLoginMessage } from "../../../../components/NeedLoginMessage";

export default function page() {
  const title = "Teléfonos";
  const content =
    "Liste los teléfonos en los que desee ser contactado(a). Puede agregar un teléfono nuevo, editar o eliminar el teléfono mostrado, o seleccionar su teléfono principal.";

  return validatorUser() ? (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
      <PhonenumberTable />
    </div>
  ) : (
    <NeedLoginMessage />
  );
}

"use client";

import { HomeContent } from "@/components/HomeContent";
import { validatorUser } from "../../../../../hooks/useValidatorUser";
import { NeedLoginMessage } from "../../../../../components/NeedLoginMessage";
import { AccountData } from "../../../../../components/AccountData";
import { PhonenumberTable } from "../../../../../components/PhonenumberTable";
import { DataInformation } from "../../../../../components/DataInformation";

export default function LoginInformation() {
  const title = "Datos de Cuenta";
  const content = "Enseguida se muestran los datos de su cuenta.";

  const title2 = "Datos Personales";
  const content2 = "";

  const title3 = "Teléfonos";
  const content3 =
    "Liste los teléfonos en los que desee ser contactado(a). Puede agregar un teléfono nuevo, editar o eliminar el teléfono mostrado, o seleccionar su teléfono principal.";

  return validatorUser() ? (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
      <AccountData/>
      <div className="h-6"></div>
      <HomeContent title={title2} content={content2}/>
      <DataInformation/>
      <div className="h-6"></div>
      <HomeContent title={title3} content={content3} />
      <PhonenumberTable/>
    </div>
  ) : (
    <NeedLoginMessage />
  );
}

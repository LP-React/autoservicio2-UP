"use client";

import { HomeContent } from "@/components/HomeContent";
import { AccountData } from "@/components/AccountData";
import { validatorUser } from "../../../../hooks/useValidatorUser";
import { NeedLoginMessage } from "../../../../components/NeedLoginMessage";

export default function LoginInformation() {
  const title = "Datos de Cuenta";
  const content = "Enseguida se muestran los datos de su cuenta.";

  return validatorUser() ? (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
      <AccountData />
    </div>
  ) : (
    <NeedLoginMessage />
  );
}

"use client"

import { NeedLoginMessage } from "../../../../components/NeedLoginMessage";
import { validatorUser } from "../../../../hooks/useValidatorUser";
import { HomeContent } from "./../../../../components/HomeContent";

export default function AccountHome() {
  const title = "Mi Perfil";
  const content =
    "Puede consultar y actualizar los datos de su cuenta de usuario, direcciones y datos personales; cambiar su contraseña, actualizar la pregunta de seguridad que usa para comprobar su identidad si olvida su contraseña, o invitar a compartir el acceso a sus datos a un familiar o tutor.";

  return validatorUser() ?  (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
    </div>
  ) : <NeedLoginMessage/>;
}

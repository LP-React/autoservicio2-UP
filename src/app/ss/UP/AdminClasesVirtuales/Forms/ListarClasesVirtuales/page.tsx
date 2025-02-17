"use client";
import { HomeContent } from "@/components/HomeContent";
import { validatorUser } from "../../../../../../hooks/useValidatorUser";
import { NeedLoginMessage } from "../../../../../../components/NeedLoginMessage";

export default function ListarClasesVirtuales() {
  const title = "Clases Virtuales";
  const content =
    "* En caso de no poder visualizar alguna de las grabaciones de la lista, por favor, solicite el acceso en serviciost2d.up.edu.pe, indicando el periodo, nombre y sección del curso, la fecha o el enlace de la grabación que desea revisar.";

  return validatorUser() ? (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={""} />
      <p className="text-UP-COLOR2 text-[16px] font-bold italic">{content}</p>
    </div>
  ) : (
    <NeedLoginMessage />
  );
}

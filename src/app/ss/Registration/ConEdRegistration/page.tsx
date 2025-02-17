"use client"

import { HomeContent } from "@/components/HomeContent";
import Link from "next/link";
import { validatorUser } from "../../../../hooks/useValidatorUser";
import { NeedLoginMessage } from "../../../../components/NeedLoginMessage";

export default function ConEdRegistration() {
  const title = "Educación Continua";
  const content = "";
  return  validatorUser() ? (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
      <p className="text-[16px] text-[#666666] font-semibold">
        Su carrito esta vacío.
      </p>

      <p className="block text-[12px] my-[12px] font-normal">
        -{" "}
        <Link href={"/ss/Home"} className="text-UP-COLOR-LINK">
          Buscar Cursos
        </Link>{" "}
        para agregar al carrito.
      </p>
    </div>
  ) : <NeedLoginMessage/>;
}

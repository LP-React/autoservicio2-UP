"use client";
import { HomeContent } from "@/components/HomeContent";
import Link from "next/link";
import { validatorUser } from "@/hooks/useValidatorUser";

export default function ShoppingCart() {
  const title = "Carrito";

  return (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={""} />
      <p className="text-[16px] text-[#666666] font-semibold">
        Su carrito esta vacío.
      </p>

      <p className="block text-[12px] my-[12px] font-normal">
        -{" "}
        <Link href={"/ss/Search/SectionSearch"} className="text-UP-COLOR-LINK">
          Buscar Cursos
        </Link>{" "}
        para agregar al carrito.
      </p>

      {validatorUser() ? (
        <img
          src={"/img/comprobarCarrito.png"}
          alt="Logo"
          className="w-[200px] my-5"
        />
      ) : (
        ""
      )}
    </div>
  );
}

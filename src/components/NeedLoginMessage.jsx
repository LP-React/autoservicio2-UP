import Link from "next/link";
import React from "react";

export const NeedLoginMessage = () => {
  return (
    <div className="w-full text-center py-16">
      <h1 className="text-UP-COLOR-WARN font-semibold my-5">Necesitas iniciar sesión para ver esta página</h1>

      <Link href={"/ss/Home"} className="text-UP-COLOR-LINK underline">Ir a la pagina de inicio</Link>
    </div>
  );
};

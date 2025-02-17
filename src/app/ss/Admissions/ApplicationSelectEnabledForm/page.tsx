import { HomeContent } from "@/components/HomeContent";
import Link from "next/link";

export default function ApplicationSelectEnabledForm() {
  const title = "Aplicar";
  const content = "Seleccione la solicitud de admisión que desea enviar.";

  const options = [
    {
      title: "INSCRIPCIÓN ALUMNOS UTEC",
      href: "/",
      subtitle: "Inscripción Alumnos UTEC",
    },
    {
      title: "INSCRIPCIÓN PARA DB LUISS UNIVERSITY",
      href: "/",
      subtitle: "Inscripción para DB Luiss University",
    },
    {
      title: "INSCRIPCIÓN PARA DB RENNES SCHOOL OF BUSINESS",
      href: "/",
      subtitle: "Inscripción para DB Rennes School of Business",
    },
    {
      title: "INSCRIPCIÓN PARA DOBLE GRADO",
      href: "/",
      subtitle: "Inscripción para Doble Grado",
    },
    {
      title: "INSCRIPCIÓN PARA HEC MONTREAL",
      href: "/",
      subtitle: "Inscripción para HEC Montreal",
    },
    {
      title: "POSTGRADO - SOLICITUD DE ADMISIÓN",
      href: "/",
      subtitle:
        "Formulario de Solicitud de Admisión para los diversos programas de Maestría de la Escuela de Post-Grado de la Universidad del Pacífico",
    },
    {
      title: "REGISTRO DE PADRES",
      href: "/",
      subtitle: "Registro de Padres y/o Apoderados",
    },
    {
      title: "REGISTRO DE PADRES - PORTAL",
      href: "/",
      subtitle: "Registro de Padres - Portal",
    },
    {
      title: "REGISTRO DE PADRES EXTRANJEROS",
      href: "/",
      subtitle: "Registro de Padres Extranjeros",
    },
    {
      title: "REGISTRO DE PADRES SIMPLIFICADO",
      href: "/",
      subtitle: "Registro de Padres Simplificado",
    },
    {
      title: "SOLICITUD ADMISIÓN CEE",
      href: "/",
      subtitle: "Solicitud Admisión CEE",
    },
    {
      title: "SOLICITUD DE ADMISIÓN - POSTGRADO",
      href: "/",
      subtitle: "Solicitud de Admisión - Postgrado",
    },
    {
      title: "SOLICITUD DE ADMISIÓN - PREGRADO",
      href: "/",
      subtitle: "Solicitud de Admisión - Pregrado",
    },
    {
      title: "SOLICITUD GIIT UP",
      href: "/",
      subtitle: "Solicitud Interna de la GIIT de la Universidad Del Pacífico",
    },
  ];

  return (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
      <ul className="w-full p-4">
        {options.map((option, index) => (
          <li className="text-UP-COLOR2 text-[14.5px] w-full mt-2 mb-6" key={index}>
            <Link
              href={option.href}
              className="border-b w-full block pl-0 hover:border-b-UP-COLOR2 hover:pl-1 ease-linear duration-150"
            >
              {option.title}
            </Link>
            <span className="text-[12px] text-[#666666] block  mt-2">
              {option.subtitle}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

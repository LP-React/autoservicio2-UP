import { HomeContent } from "@/components/HomeContent";
import Link from "next/link";

export default function InquirySelectEnabledForm() {
  const title = "Solicitud de Información";
  const content = "Seleccione la solicitud de información que desea enviar.";

  const options = [
    {
      title: "INSCRIPCIÓN UP",
      href: "/",
      subtitle: "Formulario de Incripción a la Universidad Del Pacífico",
    },
    {
      title: "INSCRIPCIÓN UP - PORTAL",
      href: "/",
      subtitle:
        "Formulario de Incripción a la Universidad Del Pacífico - Portal",
    },
    {
      title: "INSCRIPCIÓN UP EXTRANJEROS",
      href: "/",
      subtitle: "Inscripción UP Extranjeros",
    },
    {
      title: "INSCRIPCIÓN UP SIMPLIFICADA",
      href: "/",
      subtitle: "Inscripción UP Simplificada",
    },
    {
      title: "INSCRIPCIÓN INTERCAMBIO",
      href: "/",
      subtitle: "Inscripción Intercambio y Visitantes",
    },
    {
      title: "REGISTRO DE ORIENTADOR",
      href: "/",
      subtitle: "Registro de Orientador de Alumnos",
    },
    {
      title: "REGISTRO DE ORIENTADOR - PORTAL",
      href: "/",
      subtitle: "Registro de Orientador de Alumnos - Portal",
    },
    {
      title: "REGISTRO ORIENTADOR EXTRANJERO 2",
      href: "/",
      subtitle: "Registro Orientador Extranjero",
    },
  ];

  return (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
      <ul className="w-full p-4">
        {options.map((option, index) => (
          <li className="text-UP-COLOR2 text-[14.5px] w-full mt-2 mb-6" key={index}>
            <Link href={option.href} className="border-b w-full block pl-0 hover:border-b-UP-COLOR2 hover:pl-1 ease-linear duration-150">{option.title}</Link>
            <span className="text-[12px] text-[#666666] block  mt-2">{option.subtitle}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}


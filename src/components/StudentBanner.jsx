"use client";
import Link from "next/link";
import { validatorUser } from "../hooks/useValidatorUser";

const links = [
  {
    text: "Mi Perfil",
    link: "/ss/UP/Account/LoginInformation",
    needLogin: false,
  },
  { text: "Buscar Cursos", link: "/ss/Search/SectionSearch", needLogin: true },
  {
    text: "Matrícula",
    link: "/ss/Registration/RegistrationHome",
    needLogin: true,
  },
  { text: "Ver Horario", link: "/ss/Records/ScheduleHome", needLogin: true },
  {
    text: "Evaluación Docente",
    link: "/ss/UP/EvaluacionDocente/Forms/UPEvaluacionDocenteHome",
    needLogin: true,
  },
  {
    text: "Matrícula CIDUP",
    link: "/ss/UP/MATCID/Forms/UPEvaluacionDocenteSelecExamen",
    needLogin: true,
  },
  {
    text: "Inscripción Congreso Cidup",
    link: "/ss/UP/MatCongresoCID/Forms/UPInscripcionCIDUPCONHome",
    needLogin: false,
  },
  {
    text: "Notas y Asistencia",
    link: "/ss/Records/UPGradesAttendance",
    needLogin: true,
  },
  {
    text: "Sistema de Encargados de Práctica",
    link: "/ss/Home",
    needLogin: false,
  },
];

export const StudentBanner = () => {
  return (
    <div className="pl-3">
      <h1 className="font-bold text my-4">Alumnos</h1>
      <ul>
        {links.map(({ text, link, needLogin }, index) => {
          if (validatorUser()) {
            return (
              <li key={index}>
                <Link
                  className={`text-[#3683ba] font-semibold text-xs hover:underline my-1`}
                  href={link}
                >
                  - {text}
                </Link>
              </li>
            );
          }

          return (
            <li key={index}>
              <Link
                className={`text-[#3683ba] font-semibold text-xs hover:underline my-1 ${
                  needLogin == false ? "block" : "hidden"
                }`}
                href={link}
              >
                - {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

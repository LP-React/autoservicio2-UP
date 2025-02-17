import { HomeContent } from "@/components/HomeContent";

export default function SearchHome() {
  const title = "Buscar";
  const content =
    "Puede buscar los cursos en el catálogo de cursos o buscar las secciones del curso disponibles para un año, periodo y sesión específico. Después autenticarse en el sistema, puede buscar personas en los directorios en línea a los que tiene acceso.";

  return (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
    </div>
  );
}

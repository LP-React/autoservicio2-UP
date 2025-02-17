import { HomeContent } from "@/components/HomeContent";

export default function ViewSharedAccess() {
  const title = "Consultar Datos del Alumno";
  const content = "En este momento, no hay alumnos compartiendo sus datos.";

  return (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
    </div>
  );
}

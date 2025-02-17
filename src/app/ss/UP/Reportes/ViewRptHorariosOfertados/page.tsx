import { HomeContent } from "@/components/HomeContent";

export default function ViewRptHorariosOfertados() {
  const title = "Cursos ofertados";
  const content = "";
  return (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
      <p className="my-4 text-UP-COLOR-WARN font-medium">
        - No hay cursos ofertados fuera del periodo de matrícula.
      </p>
    </div>
  );
}

import { HomeContent } from "@/components/HomeContent";

export default function CatalogSearch() {
  const title = "Catálogo de Cursos";
  const content =
    "Capture los datos de los cursos que busca y seleccione Buscar.";

  return (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
    </div>
  );
}

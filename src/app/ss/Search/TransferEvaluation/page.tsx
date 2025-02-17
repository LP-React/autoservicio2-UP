import { HomeContent } from "@/components/HomeContent";

export default function TransferEvaluation() {
  const title = "Consulta de Convalidaciones";
  const content =
    "Capture al menos una parte del nombre de la institución de la cual se quiere convalidar y seleccione Buscar. Revise la lista de instituciones resultante de la búsqueda. Seleccione el nombre correcto de la institución en caso de que esté incluido en la lista. Si el nombre correcto de la institución no está listado, capture otra vez el nombre y busque de nuevo.";

  return (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
      <p className="my-4 text-UP-COLOR-WARN font-medium">
        - Las convalidaciones de cursos no estan habilitados durante este periodo.
      </p>
    </div>
  );
}

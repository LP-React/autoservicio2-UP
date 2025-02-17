import { HomeContent } from "@/components/HomeContent";

export default function ConfirmRequest() {
  const title = "Confirmar Invitación";
  const content = "";

  return (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
      <p className="my-4 text-UP-COLOR-WARN font-medium">
        - No hay códigos de confirmación habilitados durante este periodo.
      </p>
    </div>
  );
}

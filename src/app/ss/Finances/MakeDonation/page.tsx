import { HomeContent } from "@/components/HomeContent";

export default function MakeDonation() {
  const title = "Donar";
  const content =
    "La institución no puede recibir donaciones en este momento. Si esto continua, contacte al Administrador del Sistema.";

  return (
    <div className="w-full px-6 py-4">
      <HomeContent title={title} content={content} />
    </div>
  );
}

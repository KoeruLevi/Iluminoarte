import ProgramCard from "@/components/ProgramCard";
import programs from "@/data/programs.json";

export const metadata = { title: "Programas · Fundación de Arte Inclusivo" };

export default function ProgramasPage() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Programas</h1>
      <p className="mt-2 text-gray-600">Formación artística inclusiva y circulación de obra.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {programs.map((p) => <ProgramCard key={p.id} program={p} />)}
      </div>
    </section>
  );
}

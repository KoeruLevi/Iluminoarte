import type { Program } from "@/data/types";

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-soft">
      <h3 className="text-lg font-semibold">{program.title}</h3>
      <p className="mt-1 text-sm text-gray-600">{program.description}</p>
      <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
        {program.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <a href="/voluntariado" className="mt-4 inline-flex rounded-md border px-4 py-2 text-sm hover:bg-gray-50">Inscribirse</a>
    </div>
  );
}

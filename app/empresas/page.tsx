export const metadata = { title: "Empresas · Fundación de Arte Inclusivo" };

export default function EmpresasPage() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Empresas</h1>
      <p className="mt-2 text-gray-600">Arte con impacto social para oficinas y cumplimiento de inclusión (Ley 21.015).</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          {t:"Compra de obras", d:"Adquiere obras originales para tus espacios, con curaduría e instalación."},
          {t:"Exposiciones itinerantes", d:"Monta exhibiciones temporales con mediación y charlas de sensibilización."},
          {t:"Talleres creativos inclusivos", d:"Sesiones para equipos que promueven empatía, creatividad y diversidad."},
        ].map((x) => (
          <div key={x.t} className="rounded-xl border p-5">
            <h3 className="font-semibold">{x.t}</h3>
            <p className="mt-1 text-sm text-gray-700">{x.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border p-6">
        <h2 className="text-xl font-semibold">Medidas alternativas y vinculación</h2>
        <p className="mt-2 text-sm text-gray-700">
          Diseñamos proyectos que fortalecen cultura inclusiva en tu organización.
          Solicita un portafolio corporativo y una propuesta a medida.
        </p>
        <a href="/voluntariado" className="mt-4 inline-flex rounded-md border px-4 py-2 text-sm hover:bg-gray-50">Solicitar contacto</a>
      </div>
    </section>
  );
}

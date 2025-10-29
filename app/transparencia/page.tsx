export const metadata = { title: "Transparencia · Fundación de Arte Inclusivo" };

export default function TransparenciaPage() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Transparencia</h1>
      <p className="mt-2 text-gray-600">Publicaremos memorias, estados financieros y reportes de impacto.</p>
      <ul className="mt-6 list-disc pl-6 text-sm text-gray-700">
        <li>Memoria 2024 (próximamente)</li>
        <li>Estados financieros auditados (próximamente)</li>
        <li>Política de donaciones y conflictos de interés (próximamente)</li>
      </ul>
    </section>
  );
}

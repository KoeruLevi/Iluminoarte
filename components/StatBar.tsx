export default function StatBar() {
  const stats = [
    { label: "Años de trabajo", value: "20+" },
    { label: "Artistas activos", value: "40+" },
    { label: "Obras exhibidas", value: "1000+" },
    { label: "Alianzas", value: "50+" },
  ];
  return (
    <section className="border-y bg-white">
      <div className="container grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl font-semibold">{s.value}</div>
            <div className="text-sm text-gray-600">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

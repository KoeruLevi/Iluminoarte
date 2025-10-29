export const metadata = { title: "Prensa · Fundación de Arte Inclusivo" };

export default function PrensaPage() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Prensa</h1>
      <p className="mt-2 text-gray-600">
        Kit de marca, imágenes y contacto para medios. Descargas próximas.
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {[1,2,3].map((i)=> (
          <div key={i} className="rounded-xl border p-5">
            <div className="h-32 rounded-md bg-gray-100" />
            <p className="mt-2 text-sm text-gray-600">Imagen {i} (próximamente)</p>
          </div>
        ))}
      </div>
    </section>
  );
}

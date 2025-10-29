export const metadata = { title: "Voluntariado · Fundación de Arte Inclusivo" };

export default function VoluntariadoPage() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Voluntariado</h1>
      <p className="mt-2 text-gray-600">Completa el formulario y te contactaremos.</p>
      <form className="mt-8 grid max-w-2xl gap-4">
        <div>
          <label className="text-sm">Nombre</label>
          <input className="mt-1 w-full rounded-md border px-3 py-2" required />
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input type="email" className="mt-1 w-full rounded-md border px-3 py-2" required />
        </div>
        <div>
          <label className="text-sm">Mensaje</label>
          <textarea className="mt-1 w-full rounded-md border px-3 py-2" rows={5} />
        </div>
        <button className="rounded-md bg-brand-600 px-4 py-2 text-white hover:bg-brand-700 w-fit">Enviar</button>
      </form>
    </section>
  );
}

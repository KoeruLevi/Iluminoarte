export default function NewsletterForm() {
  return (
    <form className="rounded-xl border bg-white p-5 shadow-soft">
      <h3 className="text-lg font-semibold">Súmate al boletín</h3>
      <p className="mt-1 text-sm text-gray-600">Noticias, exposiciones y campañas solidarias.</p>
      <div className="mt-3 flex gap-2">
        <input type="email" required placeholder="tu@email.com" className="w-full rounded-md border px-3 py-2" />
        <button className="rounded-md bg-brand-600 px-4 py-2 text-white hover:bg-brand-700">Unirme</button>
      </div>
      <p className="mt-2 text-xs text-gray-500">Integra tu servicio de email en /api más adelante.</p>
    </form>
  );
}

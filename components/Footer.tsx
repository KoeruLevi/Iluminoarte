export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="container grid gap-8 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <img src="/logo.svg" className="h-8 w-8" alt="Logo" />
          <p className="text-sm text-gray-600">
            Corporación sin fines de lucro dedicada a la formación, creación y circulación
            de obra artística inclusiva.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/programas" className="hover:text-brand-700">Programas</a></li>
            <li><a href="/artistas" className="hover:text-brand-700">Artistas</a></li>
            <li><a href="/galeria" className="hover:text-brand-700">Galería</a></li>
            <li><a href="/empresas" className="hover:text-brand-700">Empresas</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li>info@fundacionarte.cl</li>
            <li>+56 9 1234 5678</li>
            <li>Santiago, Chile</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Boletín</h4>
          <form className="flex gap-2">
            <input type="email" required placeholder="tu@email.com" className="w-full rounded-md border px-3 py-2" />
            <button className="rounded-md bg-brand-600 px-4 py-2 text-white hover:bg-brand-700">Suscribir</button>
          </form>
          <p className="mt-2 text-xs text-gray-500">Recibe noticias, exposiciones y campañas.</p>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Fundación de Arte Inclusivo. Todos los derechos reservados.
      </div>
    </footer>
  );
}

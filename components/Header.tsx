import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <img src="/logo.svg" alt="Logo" className="h-7 w-7" />
          <span>Fundación de Arte Inclusivo</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/programas" className="hover:text-brand-700">Programas</Link>
          <Link href="/artistas" className="hover:text-brand-700">Artistas</Link>
          <Link href="/galeria" className="hover:text-brand-700">Galería</Link>
          <Link href="/empresas" className="hover:text-brand-700">Empresas</Link>
          <Link href="/agenda" className="hover:text-brand-700">Agenda</Link>
          <Link href="/transparencia" className="hover:text-brand-700">Transparencia</Link>
          <Link href="/donar" className="inline-flex items-center rounded-lg bg-brand-600 px-3 py-2 font-medium text-white hover:bg-brand-700">
            Donar
          </Link>
        </nav>
        <button className="md:hidden inline-flex items-center rounded-lg border px-3 py-2 text-sm" onClick={() => {
          const m = document.getElementById('mobile-menu');
          if (m) m.classList.toggle('hidden');
        }}>Menú</button>
      </div>
      <div id="mobile-menu" className="container pb-4 hidden md:hidden">
        <div className="mt-2 grid gap-2">
          <Link href="/programas" className="rounded-md px-3 py-2 hover:bg-gray-50">Programas</Link>
          <Link href="/artistas" className="rounded-md px-3 py-2 hover:bg-gray-50">Artistas</Link>
          <Link href="/galeria" className="rounded-md px-3 py-2 hover:bg-gray-50">Galería</Link>
          <Link href="/empresas" className="rounded-md px-3 py-2 hover:bg-gray-50">Empresas</Link>
          <Link href="/agenda" className="rounded-md px-3 py-2 hover:bg-gray-50">Agenda</Link>
          <Link href="/transparencia" className="rounded-md px-3 py-2 hover:bg-gray-50">Transparencia</Link>
          <Link href="/donar" className="rounded-md px-3 py-2 bg-brand-600 text-white hover:bg-brand-700">Donar</Link>
        </div>
      </div>
    </header>
  );
}

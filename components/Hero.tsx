import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 to-white">
      <div className="container grid gap-8 py-16 md:grid-cols-2 md:gap-12 md:py-24">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Arte inclusivo que transforma vidas
          </h1>
          <p className="text-lg text-gray-700">
            Formación, creación y exhibición de obras por artistas con discapacidad intelectual.
            Impulsamos autonomía, oficio y vínculos con la comunidad y empresas.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/galeria" className="rounded-lg bg-brand-600 px-5 py-3 text-white hover:bg-brand-700">Ver Galería</Link>
            <Link href="/donar" className="rounded-lg border px-5 py-3 hover:bg-gray-50">Donar</Link>
            <Link href="/empresas" className="rounded-lg border px-5 py-3 hover:bg-gray-50">Empresas</Link>
          </div>
        </div>
        <div className="relative">
          <img src="/og-default.png" alt="Obras y procesos creativos" className="rounded-xl shadow-soft" />
        </div>
      </div>
    </section>
  );
}

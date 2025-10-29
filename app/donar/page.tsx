import DonationWidget from "@/components/DonationWidget";

export const metadata = { title: "Donar · Fundación de Arte Inclusivo" };

export default function DonarPage() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Donar</h1>
      <p className="mt-2 text-gray-600">
        Tu aporte financia materiales, formación y circulación de obras. Integraremos una pasarela de pago local.
      </p>
      <div className="mt-8 max-w-md">
        <DonationWidget />
      </div>
      <div className="mt-10 rounded-xl border p-6">
        <h2 className="text-xl font-semibold">Hazte socio/a</h2>
        <p className="mt-1 text-sm text-gray-700">
          Suma un aporte mensual para sostener el programa de manera permanente.
        </p>
        <a href="#" className="mt-3 inline-flex rounded-md bg-brand-600 px-4 py-2 text-white hover:bg-brand-700">Quiero ser socio/a</a>
      </div>
    </section>
  );
}

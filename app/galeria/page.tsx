import artists from "@/data/artists.json";
import type { Artist, Artwork } from "@/data/types";
import ArtworkCard from "@/components/ArtworkCard";

export const metadata = { title: "Galería · Fundación de Arte Inclusivo" };

export default function GaleriaPage() {
  const all: Artwork[] = (artists as Artist[]).flatMap(a => a.works);
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Galería</h1>
      <p className="mt-2 text-gray-600">Obras disponibles y colección.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {all.map((w) => <ArtworkCard key={w.id} artwork={w} />)}
      </div>
    </section>
  );
}

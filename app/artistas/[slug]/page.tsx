import artists from "@/data/artists.json";
import type { Artist } from "@/data/types";
import ArtworkCard from "@/components/ArtworkCard";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return (artists as Artist[]).map((a) => ({ slug: a.slug }));
}

export default function ArtistDetail({ params }: Props) {
  const artist = (artists as Artist[]).find(a => a.slug === params.slug);
  if (!artist) return notFound();
  return (
    <section className="container py-16">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <img src={artist.cover} alt={`Obra de ${artist.name}`} className="w-full rounded-xl border" />
          <h1 className="mt-4 text-3xl font-bold">{artist.name}</h1>
          <p className="mt-2 text-gray-700">{artist.bio}</p>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold">Obras</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {artist.works.map((w) => <ArtworkCard key={w.id} artwork={w} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

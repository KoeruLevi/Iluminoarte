import Link from "next/link";
import type { Artist } from "@/data/types";

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className="group overflow-hidden rounded-xl border bg-white shadow-soft">
      <img src={artist.cover} alt={`Obra de ${artist.name}`} className="h-48 w-full object-cover transition-transform group-hover:scale-105" />
      <div className="space-y-2 p-4">
        <h3 className="text-lg font-semibold">{artist.name}</h3>
        <p className="line-clamp-2 text-sm text-gray-600">{artist.bio}</p>
        <div className="pt-2">
          <Link href={`/artistas/${artist.slug}`} className="text-sm font-medium text-brand-700 hover:underline">Ver portafolio →</Link>
        </div>
      </div>
    </div>
  );
}

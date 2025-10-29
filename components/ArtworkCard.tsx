import type { Artwork } from "@/data/types";

export default function ArtworkCard({ artwork }: { artwork: Artwork }) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-soft">
      <img src={artwork.image} alt={artwork.title} className="h-56 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-semibold">{artwork.title}</h3>
        <p className="text-sm text-gray-600">{artwork.technique} · {artwork.size}</p>
        <p className="mt-1 text-sm">CLP {artwork.price.toLocaleString()}</p>
        <button className="mt-3 w-full rounded-md bg-brand-600 py-2 text-white hover:bg-brand-700">Agregar al carrito</button>
      </div>
    </div>
  );
}

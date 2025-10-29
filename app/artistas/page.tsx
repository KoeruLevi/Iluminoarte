import ArtistCard from "@/components/ArtistCard";
import artists from "@/data/artists.json";

export const metadata = { title: "Artistas · Fundación de Arte Inclusivo" };

export default function ArtistsPage() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Artistas</h1>
      <p className="mt-2 text-gray-600">Conoce a quienes dan vida a nuestras obras.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {artists.map((a) => <ArtistCard key={a.slug} artist={a} />)}
      </div>
    </section>
  );
}

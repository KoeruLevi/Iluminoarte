import Hero from "@/components/Hero";
import StatBar from "@/components/StatBar";
import ArtistCard from "@/components/ArtistCard";
import ProgramCard from "@/components/ProgramCard";
import EventList from "@/components/EventList";
import NewsletterForm from "@/components/NewsletterForm";

import artists from "@/data/artists.json";
import programs from "@/data/programs.json";
import events from "@/data/events.json";

export default function Page() {
  return (
    <>
      <Hero />
      <StatBar />

      <section className="container py-16">
        <h2 className="text-2xl font-bold">Programas</h2>
        <p className="mt-1 text-gray-600">Formación artística inclusiva y circulación de obra.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {programs.map((p) => <ProgramCard key={p.id} program={p} />)}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-2xl font-bold">Artistas</h2>
          <p className="mt-1 text-gray-600">Historias, procesos y obras.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {artists.map((a) => <ArtistCard key={a.slug} artist={a} />)}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Agenda</h2>
            <p className="mt-1 text-gray-600">Exposiciones y actividades.</p>
            <div className="mt-6">
              <EventList items={events} />
            </div>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}

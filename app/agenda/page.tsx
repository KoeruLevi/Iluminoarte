import events from "@/data/events.json";
import EventList from "@/components/EventList";

export const metadata = { title: "Agenda · Fundación de Arte Inclusivo" };

export default function AgendaPage() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Agenda</h1>
      <p className="mt-2 text-gray-600">Próximas exposiciones y actividades.</p>
      <div className="mt-8">
        <EventList items={events} />
      </div>
    </section>
  );
}

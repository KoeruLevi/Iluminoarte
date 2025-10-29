import type { EventItem } from "@/data/types";

export default function EventList({ items }: { items: EventItem[] }) {
  if (!items?.length) return <p className="text-sm text-gray-600">No hay eventos próximos.</p>;
  return (
    <ul className="space-y-4">
      {items.map((e) => (
        <li key={e.slug} className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">{e.title}</h4>
              <p className="text-sm text-gray-600">{e.date} · {e.location}</p>
            </div>
            <a href="/agenda" className="text-sm font-medium text-brand-700 hover:underline">RSVP →</a>
          </div>
        </li>
      ))}
    </ul>
  );
}

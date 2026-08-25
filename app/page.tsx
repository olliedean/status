import Image from "next/image";
import Card from "./Card";

export default function Home() {
  return (
    <main className="max-w-3xl mt-7 w-full mx-auto">
      <h1 className="text-3xl font-medium tracking-tight leading-snug text-zinc-100">
        All systems operational
      </h1>
      <p className="mt-1 text-zinc-500 text-sm font-light">
        Last updated: 1 minute ago. 
      </p>

      <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Card title="Uptime">
          99.9%
        </Card>
        <Card title="Average Latency">
          120ms
        </Card>
        <Card title="Requests">
          1,234
        </Card>
        <Card title="Active Incidents">
          0
        </Card>
      </div>
    </main>
  );
}

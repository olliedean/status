import Image from "next/image";
import Card from "./Card";
import InfraItem from "./InfraItem";
import { FaDatabase, FaMemory, FaServer } from "react-icons/fa";

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

      <h1 className="font-mono text-sm tracking-tight leading-snug text-zinc-400 mt-9">
        Infrastructure
      </h1>
      <div className="mt-2 bg-zinc-900/50 rounded-lg border-zinc-800 border">
        <InfraItem title="Web Server" icon={<FaServer />}/>
        <InfraItem title="Database" icon={<FaDatabase />}/>
        <InfraItem title="Cache" icon={<FaMemory />}/>
      </div>

      <h1 className="font-mono text-sm tracking-tight leading-snug text-zinc-400 mt-9">
        Incidents
      </h1>
    </main>
  );
}

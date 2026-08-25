export default function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-zinc-800 font-bold bg-zinc-900/50 rounded-lg p-4 mt-4 text-zinc-100 text-lg">
      <h2 className="text-xs font-mono font-medium text-zinc-400">{title}</h2>
      {children}
    </div>
  );
}
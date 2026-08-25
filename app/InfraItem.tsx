type Props = {
    title: string;
    icon: React.ReactNode;
};

export default function Card({ title, icon }: Props) {
    const barsArray = [...Array(30)]

    return (
        <div className="border border-zinc-800 font-bold p-4 text-zinc-100 text-lg flex items-center justify-between hover:bg-zinc-800/30 hover:px-5 transition-all duration-200">
            <div className="flex items-center gap-2 flex-1">
                <div className="text-xs text-zinc-400">{icon}</div>
                <h2 className="text-sm font-sans font-medium text-white">{title}</h2>
            </div>
            <div className="flex gap-0.5">
                {barsArray.map((_, index) => (
                    <div
                        key={index}
                        className={`h-4 w-0.75 ${index > 1 ? 'bg-emerald-400' : 'bg-zinc-800'}`}
                    ></div>
                ))}
            </div>
            <div className="text-xs font-sans text-emerald-400 flex flex-1 items-center gap-1">
                <span className="font-mono text-zinc-400 pr-5 ml-auto">12ms</span>
                Operational
                <div className="h-1.5 w-1.5 bg-emerald-400 rounded-full ml-2 inline-block"></div>
            </div>
        </div>
    );
}
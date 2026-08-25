import { FaHeart } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="flex items-center text-zinc-500 border-t-1 border-white/10 py-5 font-mono text-xs">
            <p className="flex items-center gap-2">
                made with
                <FaHeart />
                by
                <a href="https://olliedean.co.uk" className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200">ollie dean</a>
            </p>
            <p className="ml-auto text-zinc-400 flex items-center gap-3">
                <a href="/api" className="hover:text-zinc-100 transition-colors duration-200">api</a>
                <a href="/subscribe" className="hover:text-zinc-100 transition-colors duration-200">subscribe</a>
                <a href="https://github.com/olliedean/status" className="hover:text-zinc-100 transition-colors duration-200">source</a>
            </p>
        </div>
    );
}
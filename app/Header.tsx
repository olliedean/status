import { FaServer } from "react-icons/fa";
import Clock from "./Clock";

export default function Header() {
    return (
        <div
          className="flex items-center text-zinc-500 border-b-1 border-white/10 py-7 font-mono text-sm"
        >
          <div className="flex items-center gap-2">
            <FaServer />
            <p>Example Org</p>
          </div>
          <div className="ml-auto">
            <Clock />
          </div>
        </div>
    );
}
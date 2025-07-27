import { useState } from "react";
import ToolTip from "../common/ToolTip";

interface TechnoItems {
    id: number;
    image: string;
    name: string;
}

interface TechnosListProps {
    items: TechnoItems[];
}

function TechnosList({ items }: TechnosListProps) {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    return (
        <div className="flex flex-wrap justify-center gap-7">
            {items.map((item) => {
                return (
                    <div 
                        key={item.id} 
                        className="relative flex justify-center items-center w-28 h-28 bg-test rounded-xl border border-zinc-800 shadow-xl shadow-slate-950 transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] hover:shadow-pink-500/50"
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-16 h-16" 
                        />
                        {/* Tooltip */}
                        {hoveredItem === item.id && (
                            <ToolTip name={item.name} />
                        )}
                    </div>
                )
            })
            }
        </div>
    )
}

export default TechnosList;
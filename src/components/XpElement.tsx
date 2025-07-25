import StackList from "./StackList";
import { MapPinIcon } from "@heroicons/react/24/solid";

interface XpElementProps {
  location: string;
  description: string;
  image: string;
  company: string;
  technologies: string[];
  className?: string;
  style?: React.CSSProperties;
}

function XpElement({
  location,
  description,
  image,
  company,
  technologies,
  className = "",
  style = {},
}: XpElementProps) {
  return (
    <div className={`flex flex-col-reverse md:flex-row p-7 bg-zinc-800 rounded gap-4 items-center ${className}`} style={style}>
      <div className="flex flex-col gap-2 h-full justify-center text-left flex-1">
        <div className="flex items-center gap-1 text-purple-600">
          <MapPinIcon className="h-4 w-4" />
          <span>{location}</span>
        </div>

        <p className="text-left md:text-justify text-sm md:text-base text-slate-50">
          {description}
        </p>
        <StackList technologies={technologies} />
      </div>
        <img
          src={image}
          alt={company}
          className="w-40 h-40 object-cover rounded"
        />
    </div>
  );
}

export default XpElement;

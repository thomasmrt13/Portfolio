import { useState } from "react";

interface XpContainerItems {
    id: number;
    date: string;
    title: string;
    company: string;
    description: string;
    technologies: string[];
    image: string;
    location: string;
}

interface XpContainerProps {
    items: XpContainerItems[];
}

function XpContainer({ items }: XpContainerProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-4 font-bold">
      {items.map((item, index) => (
        <div key={item.id} className="flex flex-row justify-between bg-purple-900 border border-zinc-800 rounded-lg p-4">
          <span>{item.company} - {item.title}</span>
          <div className="flex flex-row gap-2 items-center">
            <span>{item.date}</span>
            <button
              onClick={() => toggleIndex(index)}
              className="transition-transform duration-200"
            >
              <span
                className={`inline-block transform transition-transform duration-200 ${openIndexes.includes(index) ? "rotate-90" : ""}`}
              >
                &gt;
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default XpContainer;
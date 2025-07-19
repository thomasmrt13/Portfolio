interface TimelineItem {
  id: number;
  year: string;
  title: string;
  institution: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="w-full">
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="flex justify-between items-stretch space-x-4">
          {items.map((item) => (
            <div key={item.id} className="flex-1 text-center">
              <div className="bg-test border border-zinc-800 rounded-lg p-3 shadow-lg flex flex-col justify-center min-h-20">
                <div className="text-purple-400 font-bold text-xs mb-1">
                  {item.year}
                </div>
                <h3 className="text-slate-50 font-bold text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-purple-300 font-semibold text-xs">
                  {item.institution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="bg-test border border-zinc-800 rounded-lg p-3 shadow-lg">
              <div className="flex justify-between items-center">
                <div className="text-left">
                  <h3 className="text-slate-50 font-bold text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-purple-300 font-semibold text-xs">
                    {item.institution}
                  </p>
                </div>
                <div className="text-purple-400 font-bold text-xs">
                  {item.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline; 
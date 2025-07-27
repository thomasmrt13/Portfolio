interface ToolTipProps {
  name: string;
}

function ToolTip({ name }: ToolTipProps) {
  return (
    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-zinc-800 text-white px-3 py-2 rounded-lg text-sm font-mono whitespace-nowrap z-50 border border-zinc-700 shadow-lg">
      {name}
      {/* Flèche */}
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-400 border-l border-t border-zinc-700 rotate-45" />
    </div>
  );
}

export default ToolTip;

const HalfHighlight = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block">
    <span className="before:content-[''] before:absolute before:inset-x-0 before:top-1/2 before:h-1/2 before:bg-yellow-400 before:-z-10">
      {children}
    </span>
  </span>
);

export default HalfHighlight;
import XpContainer from "../components/xpSection/XpContainer";
import { professionalsData } from "../datas/professionals";

function ProXpSection() {
  return (
    <div id="xp" className="w-full text-center py-10 sm:py-20 px-4 sm:px-10 md:px-20 xl:px-60">
      <h1 className="text-3xl sm:text-5xl md:text-7xl text-slate-50 font-bold">Expériences professionnelles</h1>
      <div className="mt-28">
        <XpContainer items={professionalsData} />
      </div>
    </div>
  );
}

export default ProXpSection;
import XpContainer from "../components/XpContainer";
import { professionalsData } from "../datas/professionals";

function ProXpSection() {
  return (
    <div className="w-full text-center py-10 sm:py-20 px-4 sm:px-10 md:px-20 xl:px-60">
      <h1 className="text-7xl text-slate-50 font-bold">Expériences professionnelles</h1>
      <div className="mt-40">
        <XpContainer items={professionalsData} />
      </div>
    </div>
  );
}

export default ProXpSection;
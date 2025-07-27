import TechnosList from "../components/technoSection/TechnosList";
import { technosData } from "../datas/technos";

function TechnoSection() {
    return (
        <div id="techno" className="w-full text-center py-10 sm:py-20 px-4 sm:px-10 md:px-20 xl:px-60">
            <h1 className="text-5xl sm:text-7xl text-slate-50 font-bold">Technologies</h1>
            <div className="mt-28">
                <TechnosList items={technosData} />
            </div>
        </div>
    )
}

export default TechnoSection;

import { useGetLanConfig, useGetTheme } from "../../customHooks/useGetAppConfig";
import { service, skillSec } from "../../utils/content";
import SectionIntro from "../SectionIntro";

const Skills = () => {

    const lanCode = useGetLanConfig("lanCode");
    const {secHeading, secIntro, skillsData} = skillSec[lanCode]
    const feature = service[lanCode]
    const theme = useGetTheme();

    return <section id="skill" className={`${theme == "dark" && "bg-[#0A1222]" } max-w text-white pb-[3em]`}>

       <SectionIntro heading={secHeading} para={secIntro} />

        <div className={`grid ms:grid-cols-2 md:grid-cols-3 gap-y-[2rem] gap-x-[2rem] px-[1rem] md:px-[3rem] mt-[2rem]`}>
            {
                skillsData.map((section, idx) => {
                    const {iconCs, icon, title, skillSet} = section;

                    return <div key={idx} className={`element ${theme !== "dark" ? "bg-[#ffffff]/90" : "bg-main"}  p-[1.5rem_0.5rem_1.5rem_1rem] rounded-[0.8rem]`}>
                        <h4 className={`${theme == "dark" ? "" : "text-purple-600"} flex items-center text-[1.35rem] md:text-[1.6rem] pl-[0.5rem] capitalize gap-x-[1rem]`}>
                            <span className={`inline-block h-[1.2rem] md:h-[1.5rem] ${iconCs} rounded-[0.5rem] box-content p-[8px]`}>
                                <img src={icon} alt="" className="h-full w-full object-cover" />
                            </span>
                            {title}
                        </h4>
                        <ul className="flex flex-wrap gap-[1rem] pt-[2rem] pl-[0.5rem]">
                            { skillSet.map((skill) => <li key={skill} className={`${theme == "dark" ? "bg-slate-600/40" : "text-blue-600/80 bg-blue-300/30 font-semibold"} text-[0.8rem] ms:text-[1rem] px-[1.12rem] py-[3px] rounded-[1rem]`}> {skill} </li> ) }
                        </ul>
                    </div>
                })
            }
        </div>

        <div className ={`hidden sm:grid ms:grid-cols-2 gap-y-[2rem] md:grid-cols-4 gap-x-[2rem] px-[3rem] pt-[4rem]`}>
            {
                feature.map( (feature) => {
                    const {title, description, icon} = feature;
                    return <div className={`space-y-[1rem] border rounded-[0.8rem] p-[0.8rem] ms:py-[2rem] ms:px-[1rem] ${theme !== "dark" ? "text-[#8754cf] bg-[#ffffff]/90" : "bg-main"} `}>
                        <div className={`h-[3rem] rounded-full aspect-square m-auto`}>
                            <img src={icon} alt="" className ={`h-full w-full object-cover`}/>
                        </div>
                        <h4 className={`text-center text-[1.25rem] font-semibold mt-[1rem]`}>{title}</h4>
                        <p className={`text-center`}>{description}</p>
                    </div>
                } )
            }
        </div>
    </section>
};

export default Skills;
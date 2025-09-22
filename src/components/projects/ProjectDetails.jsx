import { useGetLanConfig } from "../../customHooks/useGetAppConfig";


const ProjectDetails = ({project}) => {
    
    const lanCode = useGetLanConfig("lanCode");

    const {heading, introPoints} = project[lanCode]
    const {techStack} = project

    return <div className={` h-0 w-full overflow-hidden px-[1rem] absolute bottom-0 scale-95 opacity-0 beforeCon before:top-0 before:right-0 transition-all duration-400 ease-in-out  group-hover:h-full group-hover:py-[1rem] group-hover:scale-100 group-hover:opacity-100  `}>
        <div className={`relative h-full flex flex-col justify-around`}>
            <h3 className={`text-[1.6rem] text-white mb-[1rem]`}>{heading}</h3>
            <ul className={`text-white ml-[2rem] list-disc`}>
                { introPoints.map( point => <li className={`py-[4px] text-[1.1rem]`}> {point} </li>) }
            </ul>
            <ul className={`w-[80%] m-auto flex gap-x-[1rem] my-[2rem] items-center justify-around text-[0.9rem] capitalize`}>
                {
                    techStack.map ( ({tech, imgSrc, css} ) =>  <li className={`flex flex-col justify-center items-center ${css} text-slate-200 aspect-square`} > 
                        <img src={imgSrc}    className={`h-full w-full object-contain `} alt="" /> 
                        <span className= {``}>{tech}</span> 
                    </li>)
                }
            </ul>
        </div>
    </div>
};

export default ProjectDetails
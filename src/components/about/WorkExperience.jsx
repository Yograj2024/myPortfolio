import { useGetLanConfig } from '../../customHooks/useGetAppConfig';
import { aboutMeSec } from '../../utils/content';
import { exeprience } from '../../utils/icons';

const WorkExperience = ({theme}) => {

    const lanCode = useGetLanConfig("lanCode");
    const { heading, position, duration, description} = aboutMeSec[lanCode].workExperienceData;
    const { company } = aboutMeSec;
    

    return <div className={` w-full`}>
        <h3 className={`text-[1.875rem] md:text-[2.5rem] font-semibold mb-[2rem] flex items-center gap-x-[1rem]`}>  
            <span className={`h-[2.5rem] md:h-[3rem] aspect-square inline-flex  bg-gradient-to-l from-blue-200 to-purple-400 rounded-full p-[10px] mt-[0.5rem]`}> 
                <img src={exeprience} alt=""  className={`h-full w-full object-cover inline-block`}/>
            </span> 
            <span className={`text-gradient-p`}>
                {heading}
            </span> 
        </h3>

        <div className ={`relative md:w-[95%] ${theme == "dark" ? "text-white bg-[var(--secondry-bg)]" : "bg-[#ffffff]"} rounded-[1rem] py-[1rem] px-[1rem] md:px-[1.5rem]`}>
            
            <h2 className={`text-[1.5rem] ${theme !== "dark" && "text-[#8754cf]"}  capitalize font-semibold mb-[1rem]`}>{position}</h2>
            <strong className ={`w-full flex justify-between items-center text-[var(--main-text)]`}> 
                <span className={`inline-block text-[0.9rem] text-yellow-600/90 ms:text-[1.12rem] border-b-[1px] px-[2px]`}>{company}</span> 
                <span className={`font-semibold inline-block text-[0.8rem] ms:text-[0.9rem] bg-[#9A5AF2] text-white rounded-[0.5rem] px-[1rem] py-[4px]`}>{duration}</span> 
            </strong>

            <ul className ={`mt-[1rem] ms:text-[1rem] text-[0.85rem] ${theme == "dark" ? "text-[var(--main-text)]" : ""}`} > 
                {
                    description.map( (points, index) =>  <li key={index} className={`py-[0.8rem]`}>{points}</li> )
                }
            </ul>
        </div>
        
    </div>
};

export default WorkExperience;
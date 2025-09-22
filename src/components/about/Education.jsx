import { useGetLanConfig } from '../../customHooks/useGetAppConfig';
import { aboutMeSec } from '../../utils/content';
import { calendar, educationIcon, locaionIcon } from '../../utils/icons';

const Education = ({theme}) => {

    const lanCode = useGetLanConfig("lanCode");
    const {educationHistory, heading} = aboutMeSec[lanCode].education 

    const getTimeData = (id) => {
        const {duration, grade} = aboutMeSec.educationMeta[id]

        return {duration, grade}
    }

    return <div className={`w-full mt-[2rem] md:mt-0`}>
        <h3 className={`text-[1.875rem] md:text-[2.5rem] font-semibold flex items-center gap-x-[1rem] `}>  
            <span className={`h-[2.5rem] md:h-[3rem] aspect-square inline-flex items-center bg-gradient-to-l from-blue-200 to-purple-400 rounded-full p-[6px] mt-[0.5rem]`}> 
                <img src={educationIcon} alt=""  className={`h-full w-full object-cover inline-block`}/>
            </span>  
            <span className={`text-gradient-p`}>
                {heading}
            </span>
        </h3>

        <div className={`relative w-full pt-[2rem] space-y-[2rem]`}>
            <div className= {`h-[90%] bg-pink-950 w-[2px] 
                absolute left-[-rem] top-[2.4rem] flex flex-col 
                items-center justify-between pb-[21%] pt-[1.2rem] `} 
            />
            {
                educationHistory.map( ({ id, institution, degree, university, location}) => {
                    const {duration, grade} = getTimeData(id);

                    return <div key={id} className ={`text-white ${theme == "dark" ? "bg-[var(--secondry-bg)]" : "bg-[#ffffff]"}   ml-[1.5rem] w-[95%] bg-red-00 rounded-[1rem] p-[1rem] `}>
                        <h4 className ={`flex justify-between items-center font-semibold ms:pr-[1rem] mb-[0.8rem] relative before:content-[""] before:absolute before:h-[1rem] before:aspect-square before:rounded-full  before:bg-[var(--about-focus)] before:left-[-2.92rem]`}> 
                            <span className={`inline-block ${theme !== "dark" && "text-[#8754cf]"}  flex-[30%] text-[1rem] ms:text-[1.35rem]`}>{degree}</span> 
                            <span className={`inline-block bg-[#9A5AF2]/80 rounded-[0.5rem] text-[0.9rem] px-[12px] py-[1px] ms:py-[3px]`}> {grade} </span> 
                        </h4>

                        <h3 className ={`text-[0.9rem] ms:text-[1.125rem] ${theme == "dark" ? "text-[var(--main-text)]" : "text-black"} mb-[5px]`}>{institution}</h3>
                        <h3 className ={`text-[0.9rem] ms:text-[1.125rem] ${theme == "dark" ? "text-[var(--main-text)]" : "text-black"}`}>{university}</h3>

                        <p className ={`text-[0.9rem] ms:text-[1.1rem] mt-[1rem] flex flex-col ms:flex-row gap-y-[1rem] ms:items-center gap-x-[1rem] text-[var(--main-text)]`}>
                            <span className={`inline-flex items-center gap-x-[0.7rem]`}> 
                                <span className={`h-[1.25rem] ms:h-[1.6rem] aspect-square inline-block`}> 
                                    <img src={calendar} alt=""  className ={`h-full w-full object-cover`}/>
                                </span> 
                                <time dateTime={duration}>{duration}</time>
                            </span>
                            <a href='https://en.wikipedia.org/wiki/Kashipur,_Uttarakhand' target='_blank' className={`inline-flex items-center gap-x-[0.7rem]`}> 
                                <span className={`h-[1.25rem] ms:h-[1.6rem] aspect-square inline-block`}> 
                                    <img src={locaionIcon} alt="" className={`h-full w-full object-cover`}/>
                                </span> 
                                {location}
                            </a>
                        </p>
                    </div>
                } )
            }
        </div>
    </div>
};

export default Education;
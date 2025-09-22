import { useGetLanConfig, useGetTheme } from "../../customHooks/useGetAppConfig";
import { aboutMeSec } from "../../utils/content";
import SectionIntro from "../SectionIntro";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

const AboutMe = () => {
  
  const lanCode = useGetLanConfig("lanCode");
  const theme = useGetTheme();

  const {secTitle, secIntro} = aboutMeSec[lanCode]

  return <section id="aboutMe" className ={`max-w`}>

    <SectionIntro heading={secTitle} para={secIntro} />

    <div  className ="pb-[3rem] px-[1rem] md:px-[2rem] md:flex gap-x-[2rem] mt-[3rem] sm:mt-[5rem]">
      <WorkExperience theme={theme}/>
      <Education theme={theme}/>
    </div>
    
  </section>
};

export default AboutMe;
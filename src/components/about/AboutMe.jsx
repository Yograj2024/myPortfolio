import { getLanConfig, getTheme } from "../../utils/getAppConfig";
import { aboutMeSec } from "../../utils/languageConstent";
import SectionIntro from "../SectionIntro";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

const AboutMe = () => {
  
  const lanCode = getLanConfig("lanCode");
   const theme = getTheme();

  return <section id="aboutMe" className ={`max-w`}>

    <SectionIntro heading={aboutMeSec.title[lanCode]} para={aboutMeSec.aboutMePara[lanCode]} />

    <div  className ="pb-[3rem] px-[1rem] md:px-[2rem] md:flex gap-x-[2rem] mt-[3rem] sm:mt-[5rem]">
      <WorkExperience theme={theme}/>
      <Education theme={theme}/>
    </div>
    
  </section>
};

export default AboutMe;
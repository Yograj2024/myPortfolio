import { getLanConfig, getTheme } from "../../utils/getAppConfig";
import { gitHub, goTo } from "../../utils/icons";
import { gptDetail, projectSec } from "../../utils/languageConstent";
import SectionIntro from "../SectionIntro";
import NetflixGPT from "./NetflixGPT";
import ProjectDetails from "./ProjectDetails";

const projects = [
  {
    projectName : "movie recommendation app",
    project : <NetflixGPT/>,
    projectDetail : <ProjectDetails project = {gptDetail} />,
    css : ` bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg')] bg-center bg-cover`,
    btns : [
      {
        text : "live demo",
        icon : "goTo",
        css : "h-[0.9rem]",
        link: "https://netflixgpt-356b2.web.app/"
      },
      {
        text : "source code",
        icon : "gitHub",
        css : "h-[1.3rem]",
        link: "https://github.com/Yograj2024/netflix-gpt"
      }
    ]
  }
]

const Projects = () => {

  const lanCode = getLanConfig("lanCode");
  const theme = getTheme();
  const {title, projectPara} = projectSec;
  const icons = {goTo, gitHub}

  return <section id="projects" className ={`bg-mai h-fit`}>

    <SectionIntro heading={title[lanCode]} para={projectPara[lanCode]} />
  
    <div className ={`max-w h-fit grid md:grid-cols-2 sm:px-[3rem] gap-y-[2rem] gap-x-[5rem] py-[3rem_2rem]`}>
      {
        projects.map( (pro) => {
          const {project, projectDetail, css, btns, projectName} = pro;
          return <div className = {`mt-[1rem] md:mt-0`}>
              {/* <h3 className = {`pl-[1rem] mb-[1rem] text-[1.28rem] md:text-[1.8rem] capitalize font-medium `}>{projectName}</h3> */}
              <div className ={`relative rounded-[1.5rem] h-[25rem] border border-red-600
                w-[95%] m-auto group ${css} beforeCon overflow-hidden transition-all duration-300
                  ease-in-out  hover:before:backdrop-blur-[3px]  ${theme == "dark" ? "before:bg-black/60" : "before:bg-black/40"} before:rounded-[1.5rem] 
                `}>
                {project}
                {projectDetail}
              </div>
              <div className ={` flex justify-around w-full sm:w-[80%] m-auto pt-[1rem]`}>
                {
                  btns.map( ({text, icon, css, link}) =>  <a href={link} target="_blank" rel="noopener noreferrer" className ={`bg-gradient-to-r 
                  ${theme == "dark" ? "from-purple-500  to-pink-300 " : " from-purple-400 to-pink-300"} transition-all duration-100 ease-in px-[1rem] py-[4px] rounded-[8px] flex items-center justify-center gap-x-[1rem]`}>
                    <span className ={`inline-block ${css}`}> <img src={icons[icon]} alt="" className ={`h-full w-full object-cover`}/></span>
                    {text}
                  </a>)
                }
              </div>
          </div>
        })
      }
    </div>
  </section>
};

export default Projects;
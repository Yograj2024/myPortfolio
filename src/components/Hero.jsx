import { useGetLanConfig, useGetTheme } from "../customHooks/useGetAppConfig";
import { socialLinks } from "../utils/constent";
import { heroSection } from "../utils/content";
import CodeEditor from "./CodeEditor";

const Hero = () => {

    const lanCode = useGetLanConfig("lanCode");

    const handleDownLoad = () => {
        const link = document.createElement("a");
        
        window.open("public/yograjResume.pdf", "_blank")
        link.href = "public/yograjResume.pdf";   // public folder ke andar file ka path
        link.download = "YograjResume.pdf";     // rename bhi kar sakte ho
        link.click();
    }

    const theme = useGetTheme();

    const { firstName, lastName, greeting, role, currentWork, viewResume } = heroSection[lanCode];

    return (
        <section className  ={`flex items-center justify-between py-[7rem_1rem] text-[var(--main-text)] px-[1rem] lg:pl-[3rem] `}>
            <div className ="max-w-[1440px] m-auto w-full grid md:grid-cols-[55%_auto] gap-y-[3rem] items-center">
                {/* Left Content */}
                <div className ="zoomIn space-y-[2rem]">
                    <div className ="space-y-[1rem] lg:space-y-[2rem]">
                        <p className ={`${theme == "dark" ? "text-white" : "text-purple-500"} font-medium text-[1rem] lg:text-[1.5rem] flex items-center gap-[1rem] `}>{greeting}</p>
                        <h1 className ={`text-[2.25rem] ani-smooth lg:text-[4rem] font-bold leading-tight text-white`}>
                            <span className ={`${theme == "dark" ? "text-white" : "text-black/90"} text-foreground`}>{firstName} </span>
                            <span className ={`${theme == "dark" ? "text-white" : "text-purple-500"} relative`}> {lastName}
                                <div className ={`absolute -bottom-2 left-0 w-full h-[2px] ${theme == "dark" ? "bg-white" : "bg-purple-600"} rounded-full`}></div>
                            </span>
                        </h1>
                        
                        <p className ={`text-[1.05rem] lg:text-2xl font-medium ${theme == "dark" ? "text-slate-400" : "text-slate-600"}`}> {role} </p>
                        <p className ={`text-[0.85rem] lg:text-[1.12rem]       ${theme == "dark" ? "text-slate-400" : "text-slate-600"} font-semibold lg:pr-[6rem]`}> {currentWork} </p>
                    </div>

                    <div className  ="h-[2rem] md:h-auto md:gap-x-[1rem] grid place-items-center grid-cols-[15%_15%_15%_32%] md:grid-cols-[7%_7%_7%_20%] ">
                        {
                            socialLinks.map( link => {
                                const {href, icon, css} = link;

                                return <a href={href} target="_blank" 
                                className  ={`${css} ${theme == "dark" 
                                ? `w-full text-[1.8rem] inset-shadow-sm hover:text-white hover:text-[1.5rem] hover:inset-shadow-purple-400`
                                : `w-[90%] text-[1.5rem] shadow-inset-lg bg-[#AA60C8]/30 text-purple-600 ` } `}>
                                    <i className  ={icon}></i>
                                </a>
                            })
                        }
                        
                        <button onClick={ handleDownLoad } 
                        className ={`flex justify-around px-[8px] items-center ani-smooth h-[85%] 
                        w-full ml-[6rem] md:ml-[8rem] rounded-[0.5rem] 
                        bg-gradient-to-tr from-purple-500 to-pink-500 
                      text-white md:text-[1.25rem] `}> 
                            <i className ="text-orange-400 mt-[5px] animate-bounce fa-solid fa-arrow-down"></i>
                            {viewResume} 
                        </button>
                    </div>
                </div>

                {/* Right Content - Code Editor */}
                <div className  ={`h-full w-full m-auto relative`}>
                    <CodeEditor />
                </div>
            </div>
        </section>
    );
};

export default Hero;
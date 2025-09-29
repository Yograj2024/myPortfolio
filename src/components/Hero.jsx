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
        <section className ={`overflow-hidden flex items-center justify-between py-[7rem_1rem] text-[var(--main-text)] px-[1rem] lg:pl-[3rem] `}>
            <div className="max-w-[1440px] m-auto w-full ms:grid md:grid-cols-[55%_auto] gap-y-[3rem] items-center">
                {/* Left Content */}
                <div className="space-y-[2rem]">
                    <div className="space-y-[1rem] lg:space-y-[2rem]">
                        <p className={`autoShow ${theme == "dark" ? "text-white" : "text-purple-500"} font-medium text-[1rem] lg:text-[1.5rem] flex items-center gap-[1rem] `}>{greeting}</p>
                        <h1 className={` text-[2.25rem] ani-smooth lg:text-[4rem] font-bold leading-tight text-white`}>
                            <span className={`${theme == "dark" ? "text-white" : "text-black/90"} text-foreground`}>{firstName} </span>
                            <span className={`${theme == "dark" ? "text-white" : "text-purple-500"} relative`}> {lastName}
                                <div className={`absolute -bottom-2 left-0 w-full h-[2px] ${theme == "dark" ? "bg-white" : "bg-purple-600"} rounded-full`}></div>
                            </span>
                        </h1>
                        
                        <p className={`lg:text-2xl font-medium ${theme == "dark" ? "text-slate-400" : "text-slate-600"}`}> {role} </p>
                        <p className={` lg:text-[1.12rem]       ${theme == "dark" ? "text-slate-400" : "text-slate-600"} font-semibold lg:pr-[6rem]`}> {currentWork} </p>
                    </div>
                    

                    <div className =" flex flex-col ms:flex-row ms:justify-between gap-y-[1.5rem] items-center ms:pr-[6rem]">
                        <div className ={`flex`}>
                            {
                                socialLinks.map( link => {
                                    const {href, icon, css} = link;

                                    return <a href={href} target="_blank" 
                                    className ={`rotate-zoom-in h-[3rem] aspect-square ${css} ${theme == "dark" 
                                    ? `w-full hover:translate-y-[-0.6rem] hover:shadow-[0px_0px_12px_2px_rgba(147,51,234,0.6)] inset-shadow-sm text-white text-[1.25rem] inset-shadow-purple-400`
                                    : `text-[1.5rem] shadow-inset-lg bg-[#AA60C8]/30 text-purple-600 ` } `}>
                                        <i className ={icon}></i>
                                    </a>
                                })
                            }
                        </div>
                        
                        <button onClick={ handleDownLoad } 
                        className ={`flex justify-around  mt-[1rem] ms:mt-0 px-[1rem] gap-x-[0.8rem] items-center ani-smooth h-[2rem] ms:h-[2.5rem] hover:shadow-[0px_0px_12px_2px_rgba(147,51,234,0.6)] hover:scale-95
                        rounded-[0.5rem] bg-gradient-to-tr from-purple-500 to-pink-500 text-white md:text-[1.25rem] `}> 
                            <i className ="text-orange-400 mt-[5px] animate-bounce fa-solid fa-arrow-down"></i>
                            {viewResume} 
                        </button>
                    </div>
                </div>

                {/* Right Content - Code Editor */}
                <div className ={`h-full w-full m-auto relative slide-in-right`}>
                    <CodeEditor />
                </div>
            </div>
        </section>
    );
};

export default Hero;
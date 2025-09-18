import { heroSection } from "../utils/content";
import { getLanConfig, getTheme } from "../utils/getAppConfig";
import CodeEditor from "./CodeEditor";

const Hero = () => {

    const lanCode = getLanConfig("lanCode");

    const handleDownLoad = () => {
        const link = document.createElement("a");
        
        window.open("public/yograjResume.pdf", "_blank")
        link.href = "public/yograjResume.pdf";   // public folder ke andar file ka path
        link.download = "YograjResume.pdf"; // rename bhi kar sakte ho
        link.click();
    }

    const theme = getTheme();

    const { firstName, lastName, greeting, role, currentWork, viewResume } = heroSection[lanCode];

    return (
        <section className ={`flex items-center justify-between py-[7rem_1rem] text-[var(--main-text)] px-[1rem] lg:pl-[3rem] `}>
            <div className="max-w-[1440px] m-auto w-full grid md:grid-cols-[55%_auto] gap-y-[3rem] items-center">
                {/* Left Content */}
                <div className="zoomIn space-y-[2rem]">
                    <div className="space-y-[1rem] lg:space-y-[2rem]">
                        <p className={`${theme == "dark" ? "text-white" : "text-purple-500"} font-medium text-[1rem] lg:text-[1.5rem] flex items-center gap-[1rem] `}>{greeting}</p>
                        <h1 className={`text-[2.25rem] ani-smooth lg:text-[4rem] font-bold leading-tight text-white`}>
                            <span className={`${theme == "dark" ? "text-white" : "text-black/90"} text-foreground`}>{firstName} </span>
                            <span className={`${theme == "dark" ? "text-white" : "text-purple-500"} relative`}> {lastName}
                                <div className={`absolute -bottom-2 left-0 w-full h-[2px] ${theme == "dark" ? "bg-white" : "bg-purple-600"} rounded-full`}></div>
                            </span>
                        </h1>
                        
                        <p className={`text-[1.05rem] lg:text-2xl font-medium ${theme == "dark" ? "text-slate-400" : "text-slate-600"}`}> {role} </p>
                        <p className={`text-[0.85rem] lg:text-[1.12rem]       ${theme == "dark" ? "text-slate-400" : "text-slate-600"} font-semibold lg:pr-[6rem]`}> {currentWork} </p>
                    </div>

                    <div className="flex  gap-4">
                        <button onClick={ handleDownLoad } className="px-[0.7rem] py-[4px] md:px-[1.25rem] rounded-[0.5rem] border-2 hover:bg-[var(--main-text)] hover:text-black md:text-[1.25rem] hover:font-semibold  "> {viewResume} </button>
                    </div>
                </div>

                {/* Right Content - Code Editor */}
                <div className={`h-full w-full m-auto`}>
                    <CodeEditor />
                </div>
            </div>
        </section>
    );
};

export default Hero;
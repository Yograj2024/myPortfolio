import { getTheme } from "../utils/getAppConfig";

const CodeEditor = () => {

    const theme = getTheme();
    return (
        <div className ={`hidden md:block w-[90%]  rounded-[1rem] ${theme == "dark" ? "" : "bg-[#ffffff]"} ani-smooth p-[1rem] mx-auto relative`}>
            <div className ={`h-full w-full rounded-[1rem] shadow-[0_0_4px_3px_rgba(255,0,0,0.5)] absolute top-0 right-0 z-[0] rotatePendulum  shadowPuls`}></div>
            <div className ={`h-full w-full rounded-[1rem] shadow-[0_0_4px_3px_rgba(225,0,0,0.5)] absolute top-0 right-0 z-[0] rotatePendulumr  shadowPuls`}></div>

            {/* Browser Header */}
            <div className ="flex items-center gap-2 mb-4 pb-3 border-b border-[#1E293B]">
                <div className ="flex gap-2">
                <div className ="w-3 h-3 rounded-full bg-red-400"></div>
                <div className ="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className ="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className ="ml-auto text-sm text-slate-400 font-mono">developer.js</span>
            </div>

            {/* Code Content */}
            <div className ="font-mono text-sm leading-relaxed">
                <div className ="text-muted-foreground mb-2">// Software Engineer</div>
                
                <div className ="mb-4">
                    <span className ="text-purple-600">const</span>{" "}
                    <span className ="text-blue-600">developer</span>{" "}
                    <span className ="text-gray-600">=</span>{" "}
                    <span className ="text-yellow-600">{"{"}</span>
                </div>

                <div className ="ml-4 space-y-1">
                    <div>
                        <span className ="text-red-500">skills:</span>{" "}
                        <span className ="text-yellow-600">[</span>
                        <span className ="text-green-600">'React'</span>
                        <span className ="text-gray-600">,</span>{" "}
                        <span className ="text-green-600">'TailwindCss'</span>
                        <span className ="text-gray-600">,</span>{" "}
                        <span className ="text-green-600">'JavaScript'</span>
                        <span className ="text-yellow-600">]</span>
                        <span className ="text-gray-600">,</span>
                    </div>

                    <div>
                        <span className ="text-red-500">socials:</span>{" "}
                        <span className ="text-yellow-600">{"{"}</span>
                        <div className={`pl-[2rem]`}>
                            <span className ="text-red-500">email &nbsp;&nbsp;&nbsp;:</span>{" "}
                            <span className ="text-green-600">'ryog7910@gmail.com'</span> <br />
                            <span className ="text-red-500">github &nbsp;&nbsp;:</span>{" "}
                            <span className ="text-green-600">'https://github.com/Yograj2024'</span> <br />
                            {/* <span className ="text-red-500">linkedin&nbsp;:</span>{" "} */}
                            {/* <span className ="text-green-600">'https://www.linkedin.com/in/yograj-singh-750a07315'</span> <br /> */}
                        </div>
                        <span className ="text-yellow-600">{"}"}</span>
                        <span className ="text-gray-600">,</span>
                    </div>
                    
                    <div>
                        <span className ="text-red-500">focuses:</span>{" "}
                        <span className ="text-yellow-600">[</span>
                        <span className ="text-green-600">'Full-Stack'</span>
                        <span className ="text-gray-600">,</span>{" "}
                        <span className ="text-green-600">'UI/UX'</span>
                        <span className ="text-yellow-600">]</span>
                        <span className ="text-gray-600">,</span>
                    </div>
                    
                    <div>
                        <span className ="text-red-500">learning:</span>{" "}
                        <span className ="text-yellow-600">[</span>
                        <span className ="text-green-600">'SQL'</span>
                        <span className ="text-gray-600">,</span>
                        <span className ="text-green-600">'Laravel'</span>
                        <span className ="text-yellow-600">]</span>
                    </div>
                </div>

                <div className ="mt-2">
                    <span className ="text-yellow-600">{"}"}</span>
                    <span className ="text-gray-600">;</span>
                </div>
            </div>
        </div>
    );
};

export default CodeEditor;  
import { getTheme } from "../utils/getAppConfig";

const SectionIntro = (props) => {

    const {heading, para, css} = props;
     const theme = getTheme();

    return  <div className ={`max-w ${theme == "dark" ? "text-white" : "text-black font-semibold"}`}> 
        <h2 className  ={`py-[1rem] text-[2.5rem] md:text-[4rem] font-semibold text-center capitalize `}> 
            <span className  ={`text-gradient-p`}>{heading}</span>
        </h2>
        <p className ={` font-normal line-clamp-4 text-center px-[1rem] lg:px-[10rem] text-[0.9rem] md:text-[1.12rem] md:leading-[1.85rem]`}> {para} </p>
    </div>
};

export default SectionIntro;
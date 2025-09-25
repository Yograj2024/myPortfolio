import { useGetLanConfig, useGetTheme } from "../../customHooks/useGetAppConfig";
import { contact } from "../../utils/constent";
import { HireMeMess } from "../../utils/content";

const SocialDetails = () => {

  const theme = useGetTheme();
  const lanCode = useGetLanConfig("lanCode");

  return <>
    <div className="space-y-8 pt-[1rem] h-full">
      <address className="space-y-4 ms:grid grid-cols-2 md:block">
        {
          contact.map( ({type, value, href, icon}) => <div key={type} className="flex items-start space-x-3">
            {
              type != "phone" ? 
              <i className={`text-[1.5rem] text-purple-700 ${icon}`} />
              :<svg className={`h-[2rem] aspect-square text-purple-800`} fill="none" stroke="currentColor"  >
                <path d={icon} /> 
              </svg>
            }
            <div className={`${theme == "dark" ? "text-slate-200" : "text-blue-600"}`}>
              <span className={`${theme == "dark" ? "" : "text-purple-800"} font-semibold`}>{type}</span> <br /> 
              {
                href != null ? 
                <a href={href + value} 
                className={` hover:underline ${theme == "dark" ? "hover:text-purple-400" : "hover:text-purple-800"}  hover:underline-offset-3 `}>{value}</a> : 
                <span>{value}</span>
              }
            </div>
          </div>)
        }
      </address>

      <hr className="border-purple-700" />

      <div className={` ${theme == "dark" ? "bg-[#0A1222]" : "bg-[#ffffff] text-purple-600"} ani-smooth p-4 rounded-lg shadow-lg`}>
        <h3 className={`text-[1.75rem] pl-[2rem] font-semibold mb-2 relative`}>
          <span className={`absolute top-[55%] shadow-[0_0_5px_3px_rgba(0,0,0,0.6)] shadow-red-400 -translate-y-[50%] left-0 inline-block h-[0.8rem] aspect-square bg-yellow-400 rounded-full animate-pulse`}></span>
          {HireMeMess[lanCode].secHeading}
        </h3>
        <p className={`text-gray-500 text-[1.12rem] md:text-[1rem]`}>
          {HireMeMess[lanCode].para}
        </p>
      </div>

    </div>

  </>
};

export default SocialDetails;
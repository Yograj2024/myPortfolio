import { getLanConfig, getTheme } from "../../utils/getAppConfig";
import { contactSec } from "../../utils/languageConstent";

const Form = () => {

  const theme = getTheme();
  const inputClasses = `w-full px-4 py-2 ${theme == "dark" ? "bg-[#1a1a1a] border-gray-700" : "placeholder-slate-400 bg-slate-50 text-slate-700 border-gray-300"} border rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600`;

  const lanCode = getLanConfig("lanCode");

  const {formTitle, placeHolders, submitBtn } = contactSec[lanCode].formContent
  const { name, email, subject, message } = placeHolders; 


  return (
    <div className ={`${theme == "dark" ? "bg-[#111]/80" : "bg-[#ffffff]"} ani-smooth rounded-xl p-6 shadow-lg ms:w-[90%] m-auto h-full`}>
      <h2 className ={`${theme == "dark" ? "" : "text-purple-500"} text-2xl font-bold mb-6 `}>{formTitle}</h2>
      <form className ="space-y-6 ">
        <div className ="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem]">
          <input type="text" placeholder={name} className={inputClasses} />
          <input type="email" placeholder={email} className={inputClasses} />
        </div>
        <input type="text" placeholder={subject} className={inputClasses} />
        <textarea rows="5" placeholder={message} className ={`min-h-[4rem] max-h-[6rem] ${inputClasses}`} />
        <button type="submit" className ="w-full py-3 bg-[#6B26D9] hover:bg-purple-700 rounded-lg font-semibold transition" >
          {submitBtn}
        </button>
      </form>
    </div>
  );
};

export default Form;
import { useRef } from "react";
import { useGetLanConfig, useGetTheme } from "../../customHooks/useGetAppConfig";
import { inputClasses } from "../../utils/constent";
import { contactSec } from "../../utils/content";

const Form = () => {

  const theme = useGetTheme();
  const css = `${theme == "dark" ? "bg-[#1a1a1a] border-gray-700" : "placeholder-slate-400 bg-slate-50 text-slate-700 border-gray-300"}`

  const lanCode = useGetLanConfig("lanCode");
  const {title, btn} = contactSec[lanCode]?.formContent
  const { name, email, message, subject} = contactSec[lanCode]?.formContent?.placeHolders

  const userName = useRef(), userEmail = useRef(), mailSub = useRef(), userMess = useRef() 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await fetch("https://portfolio-backend-nfi6.onrender.com/api/message", {
        method  : "POST",
        headers : { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: userName.current.value,
          email: userEmail.current.value,
          mailSub: mailSub.current.value,
          message: userMess.current.value,
        }),
      });

      const response = await result.json();
      response.status == 200 && alert(json.reply)
      
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={`${theme == "dark" ? "bg-[#111]/80" : "bg-[#ffffff]"} ani-smooth rounded-xl p-6 shadow-lg ms:w-[90%] m-auto h-full`}>
      <h2 className={`${theme == "dark" ? "" : "text-purple-500"} text-2xl font-bold mb-6`}>{title}</h2>
      <form onSubmit={handleSubmit}  className="space-y-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem]">
          <input ref={userName} type="text"   placeholder={name}   className={`${inputClasses} ${css}`} />
          <input ref={userEmail} type="email" placeholder={email}  className={`${inputClasses} ${css}`} />
        </div>
        <input ref={mailSub} type="text" placeholder={subject} className={`${inputClasses} ${css}`} />
        <textarea ref={userMess} rows="5" placeholder={message} className={`${css} min-h-[4rem] max-h-[6rem] ${inputClasses}`} />
        <button type="submit" className="w-full py-3 bg-[#6B26D9] hover:bg-purple-700 rounded-lg font-semibold transition" >
          {btn}
        </button>
      </form>
    </div>
  );
};

export default Form;
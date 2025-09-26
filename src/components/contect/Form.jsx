import { useRef } from "react";
import { useGetLanConfig, useGetTheme } from "../../customHooks/useGetAppConfig";
import { inputClasses, postUrl } from "../../utils/constent";
import { contactSec } from "../../utils/content";

const Form = () => {

  const theme = useGetTheme();
  const lanCode = useGetLanConfig("lanCode");
  const css = `${theme == "dark" ? "bg-[#1a1a1a] border-gray-700" : "placeholder-slate-400 bg-slate-50 text-slate-700 border-gray-300"}`

  const {title, btn} = contactSec[lanCode]?.formContent
  const { name, email, message, subject} = contactSec[lanCode]?.formContent?.placeHolders

  const formRef = useRef(), userName = useRef(), userEmail = useRef(), mailSub = useRef(), userMess = useRef() 

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: userName.current?.value.trim(),
      email: userEmail.current?.value.trim(),
      mailSub: mailSub.current?.value.trim(),
      message: userMess.current?.value.trim(),
    };
    
    try {
      const result = await fetch(postUrl, {
        method  : "POST",
        headers : { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });


      const response = await result.json();
      if (result.status === 200) {  // ya response.status, jo API return kare
        formRef.current.reset();
        alert(response.reply);
      }
      
    } catch (error) {
      alert("some thing went wrong...!\n"+error)
    }
  }

  return (
    <div className={`${theme == "dark" ? "bg-[#111]/80" : "bg-[#ffffff]"} ani-smooth rounded-xl p-6 shadow-lg ms:w-[90%] m-auto h-full`}>
      <h2 className={`${theme == "dark" ? "" : "text-purple-500"} text-2xl font-bold mb-6`}>{title}</h2>
      <form ref={formRef} onSubmit={handleSubmit}  className="space-y-6 ">
        <div className="grid grid-cols-1 ms:grid-cols-2 gap-[1.5rem]">
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





import { useGetLanConfig } from "../../customHooks/useGetAppConfig";
import { contactSec } from "../../utils/content";
import SectionIntro from "../SectionIntro";
import Form from "./Form";
import SocialDetails from "./SocialDetails";

const ContectSec = () => {

  const lanCode = useGetLanConfig("lanCode");
  const {secHeading, secIntro} = contactSec[lanCode]

  return <section id="contact" className ={`contactSec max-w text-slate-200 py-[2rem]`}>

    <SectionIntro heading={secHeading} para={secIntro} />

    <div className ="grid md:grid-cols-2 gap-y-[2rem] ms:gap-[5rem] max-w mx-auto px-[1rem] ms:px-[2rem] pt-[2rem] ms:py-[5rem_3rem]">
      <Form/>
      <SocialDetails/>
    </div>
  </section>
};

export default ContectSec;


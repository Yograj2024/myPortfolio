import { netflixLogo } from "../../utils/constent";
import { userLogedInIcon } from "../../utils/icons";

export default function NetflixGPT ({project}) {

  const categories = [
    "Romantic comedy",
    "Feel-good drama",
    "Mystery series",
    "Horror",
    "Mind-bending ",
    "thriller",
  ];

  return (
    <div className ={`scroll-ZoomIn absolute bottom-0 w-full text-white 
      rounded-[1.5rem] beforeCon overflow-hidden max-h-[25rem]
      transition-all duration-500 ease-in-out group-hover:max-h-0 h-full group-hover:opacity-0        
    `}>

      <nav className ="flex justify-between items-centerpx-[1rem] py-5 rounded-[1.5rem] ">
        <div className ="h-[2rem]">
          <img src={netflixLogo} alt="" className ={`h-full w-full object-cover`}/>
        </div>
        <div className ="hidden sm:flex items-center gap-3 text-[0.6rem]">
            <button className ={ `bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500  text-[0.7rem] capitalize rounded-[5px] text-white px-[8px] py-[1px] tracking-[1px]`}> home </button>
            <button className = { ` bg-red-500 text-[0.6rem] capitalize  rounded-[5px] text-white px-[8px] py-[2px] tracking-[1px]`}> sign out </button>

            <div className ={`h-[1.7rem] aspect-square`}> 
              <img src={userLogedInIcon} alt="user-img" loading='lazy' className ={`h-full w-full object-cover rounded-[1rem]`} /> 
            </div>
        </div>
      </nav>

      <div className ="flex flex-col justify-center items-center text-center ms:px-6 py-[1rem] rounded-[1.5rem] ">
        <h1 className ="text-[1.25rem] ms:text-[1.5rem] font-bold leading-snug px-[2rem] sm:px-[4rem] ">
          Describe What You Want To{" "}
          <span className ="text-red-500">Watch</span>, We’ll Suggest…
        </h1>
        <p className ="text-gray-300 text-[1rem] mt-3">Let Us Know Your Mood</p>
        <p className ="text-[0.8rem] mt-2 mb-[1rem] max-w-2xl text-gray-300">
          Skip The Endless Scrolling, Find And Watch Something You’ll Love
        </p>

        {/* Search Box */}
        <div className ="flex items-center justify-between rounded-md w-full h-[2rem] px-3 my-[1rem]">
          <input type="text"  placeholder="something funny and heartwarming..."
            className ="h-full border w-[70%] px-[0.8rem] bg-slate-100 rounded-[8px] text-white placeholder-gray-600 outline-none text-[0.7rem]" />
            <button className ="py-[8px] bg-red-600 px-2  rounded-md text-[0.6rem] font-semibold">
                Get Started →
            </button>
        </div>


        <div className ="flex flex-wrap justify-center gap-3 mt-6 rounded-[1.5rem] ">
          {
            categories.map((cat, i) => (
                <button key={i} className ="bg-slate-600/60 px-[6px] md:px-[12px] text-[0.7rem] py-[3px] rounded-md" >
                {cat}
                </button>
            ))      
          }
        </div>
      </div>
    </div>
  );
}

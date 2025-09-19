import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { navBar } from '../utils/content';
import { getLanConfig, getTheme } from '../utils/getAppConfig';
import { codingIcon, darkMode, lightMode } from '../utils/icons';
import { supportedLanguage } from '../utils/languageConstent';
import { setLanguage, setTheme } from '../utils/store/slices/appConfigSlice';

const NavBar = () => {

  const {lanName, lanCode, flag}  = getLanConfig(["lanName", "lanCode", "flag"]);

  const theme = getTheme();
  const dispatch = useDispatch();
  const handleThemeChange = () => dispatch(setTheme()) 

  const updateLanguage = (e) => {
    const dataSet = JSON.parse(e.target.dataset.lang)
    dispatch(setLanguage(dataSet))
  }

  const {siteTitle, navItems} = navBar

  return <nav className={`max-w h-full w-full flex items-center justify-between px-[1rem] lg:px-[1.5rem]`}>
    <div className={`h-[2rem] md:h-[2.5rem] gap-x-[1rem] flex items-center md:gap-[1.5rem]`}>
      <img src={codingIcon} alt="" className={`h-full w-full object-cover`}/>
      <span className={`text-gradient-p text-[1.5rem] lg:text-[2rem] capitalize font-semibold`}>{siteTitle[lanCode]}</span>
    </div>
    
    <div className={`hidden lg:flex gap-x-[2rem] `}>
      
      <ul className={`flex items-center ${theme == "dark" ? "text-slate-200 " : "text-[#7C3BED]"} gap-x-[2rem] capitalize text-[1.25rem] font-semibold`}>
        {
          navItems[lanCode].map( ({label, type, to}) =>  <li key={label} className='group relative hover:text-purple-500'> 
            {
              type != "hash" ? 
              <Link to={to}> {label} </Link> :
              <HashLink smooth to={to}> {label} </HashLink> 
            }
            <span
              className="absolute left-0 -bottom-1 h-0.5 w-[calc(100%+5px)] bg-current origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100">
            </span>
          </li>)
        }
      </ul>

      <div className={`flex items-center gap-[1rem]`}>
        
        <button onClick = { handleThemeChange }  className={`${theme != "dark" && "bg-purple-200 p-[4px]"} rounded-full text-white h-[2rem] aspect-square`}>
          <img src={theme == "dark" ? lightMode : darkMode} alt="" className={`h-full w-full object-cover`}/> 
        </button>

        <button className={`group relative text-white flex justify-center items-center gap-[0.5rem] bg-gradient-to-l from-purple-400  to-pink-400 w-[7rem] py-[4px] hover:rounded-b-[0px] rounded-[6px] `}>
          <span className={`h-[1.3rem] `}> <img src={flag} alt="" className={`h-full w-full object-cover`}/></span>
          <span className={`capitalize font-semibold`}>{lanName}</span>
          <ul onClick = { updateLanguage } className={`absolute z-[2] top-[2rem] right-0 text-black bg-purple-50 border border-slate-300 w-[7rem] overflow-auto rounded-b-[12px] hide-scrollbar max-h-0  opacity-0 ani-smooth group-hover:max-h-[10rem] group-hover:opacity-100`}>
            {
              supportedLanguage.map( (language,index) => {
                const {liLanCode, lanName : liLanName} = language
                return <li key={index} 
                  data-lang={JSON.stringify(language)} 
                  className={`grid grid-cols-[auto_90%] items-center px-[1.5rem] gap-x-[8px] hover:bg-purple-200 py-[5px] capitalize `}>
                  <span className ={`inline-block h-[8px] aspect-square ${liLanName == lanName && "bg-green-600"} rounded-full`}></span>
                  {liLanName}
                </li>
              })
            }
          </ul>
        </button>
      </div>
    </div>
  </nav>
};

export default NavBar;
import { contactIcon } from '../utils/constent';

const ContectIcons = () => {
    
    return  <div className ="flex space-x-3">
        {
            contactIcon.map( ({reDirectPath, iconClass}) => 
            <a href={reDirectPath} target="_blank" rel = "noopener noreferrer"
            className ={`hover:-translate-y-[0.5rem] transition-all duration-200 ease-in 
            px-[3px] py-[5px] grid place-items-center box-content rounded-lg hover:bg-purple-900/80`} >

                <i className = {`${iconClass}`}></i>

            </a>)
        }
    </div>
};

export default ContectIcons;
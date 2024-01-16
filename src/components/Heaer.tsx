import { Search } from "./Search";
import {useNavigate, useLocation} from "react-router-dom"
/**
 * Nav 컴포넌트
 * @returns 
 */
const Header = () =>{

    const navigate = useNavigate();
    const loaction = useLocation().pathname;
    /**
     * main 이동
     */
    const moveMain = () => {
        if(loaction !== '/'){
            navigate('/');
        }
    }

    return(
        <div>
            <div>
                <h1>
                    <a onClick={()=>moveMain()}>
                        <span > 웹툰</span>
                    </a>
                    
                </h1>
            </div>
            
            <Search/>
        </div>
    )
}

export default Header;
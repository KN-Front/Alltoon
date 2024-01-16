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
        <header className="mainHeader">
            <div>
                <h2>
                    <a onClick={()=>moveMain()}>
                        <span > Webtoon</span>
                    </a>
                </h2>
            </div>
            <Search/>
        </header>
    )
}

export default Header;
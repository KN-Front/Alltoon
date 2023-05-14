import { Search } from "./Search";
import {useNavigate, useLocation} from "react-router-dom"
import '../styles/Nav.css'
/**
 * Nav 컴포넌트
 * @returns 
 */
const Nav = () =>{

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
        <div className="BrandBar__gnb_wrap--Nh2jt">
            <h1 className="BrandBar__logo_area--Y_7dM">
                <a className="BrandBar__logo_naver--srvE0" onClick={()=>moveMain()}>
                    <span className="blind"> 웹툰</span>
                </a>
                <div >
                </div>
            </h1>
            
            <Search/>
        </div>
    )
}

export default Nav;
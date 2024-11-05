import { useNavigate } from 'react-router-dom';
import MotionIcon from '../assets/images/Mahindra-icon.png';

function NavBar() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

function Nav() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/login");
    };

    return (
        <>
            <header>
                <div className="navbar" id="myNavbar">
                    <a href="/">Inicio</a>
                    <a href="/mascote">Motion IA</a>
                    <a href="javascript:void(0);" className="icon" onClick={NavBar}>
                        <b><i className="bi bi-list"></i></b>
                    </a>
                    <button onClick={handleClick}>Login</button>
                </div>
                <a href="/"><img src={MotionIcon} alt="Motion Icon" /></a>
            </header>
        </>
    );
}

export default Nav;

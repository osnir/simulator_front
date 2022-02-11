import "./styles.css";
import logoImg from '../../assets/images/logo.png';

const Header: React.FC = () => {
    return (
        <div>
            <header>
                <div>
                    <img src={logoImg} alt="logo"/>
                </div>
            </header>
  
            <nav className="navbar">
                <div>
                    <p>Informe seu faturamento e obtenha as melhores taxas do mercado</p>
                </div>
            </nav>
        </div>
    );
}

export default Header;
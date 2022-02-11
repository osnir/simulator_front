import logoPagazul from '../../assets/images/pagazul-logo.png';
import logoSafrapay from '../../assets/images/safrapay-logo.svg';
import logoTomatico from '../../assets/images/tomatico-logo.png';
import logoCappta from '../../assets/images/cappta-logo.png';
import "./styles.css";

const Partner: React.FC = () => {
    return(
        <div>            
            <div>
                <img src={logoPagazul} alt="PagAzul" className='logo' /> 
                <h3 className='pagAzul-title'>A vida pode ser mais azul</h3> 
                <p className='pagAzul-text'>
                    A PagAzul tem as melhores taxas para a quitação da sua dívida e suas contas ficarem no azul.
                    Pertinho de você com diversos pontos credenciados.
                    Transações feitas em nossos postos em terminais seguros (Totens e Maquininhas)
                </p>
            </div>            
            
            <div>
                <img src={logoTomatico} alt="Tomatico" className='logo'/>
                <h3 className='tomatico-title'>O crédito com muitas vantagens e zero burocracia.</h3>
                <p className='tomatico-text'>
                    A vida de empreendedor já é complicada demais. Por isso, nosso crédito é simples em tudo. 
                    Tanto na contratação quanto nos pagamentos. 
                    Conheça nossas vantagens e seja nosso parceiro. Seu negócio só tem a ganhar.                  
                </p>
            </div>
           
            <div>
                <img src={logoCappta} alt="Cappta" className='logo'/>  
                <h3 className='cappta-title'>Seu dinheiro é sempre pra já!</h3>  
                <p className='cappta-text'>
                    Parcele a venda de seus produtos e serviços em até 12x no cartão e receba à vista, sem descontos.
                    Com o Parcele Já, a Cappta foi uma das empresas selecionadas pela Prefeitura de São Paulo para ajudar a combater 
                    os impactos da pandemia da Covid-19, na economia e nos negócios!                  
                </p>
            </div>
            
            <div>
                <img src={logoSafrapay} alt="Safrapay" className='logo'/>   
                <h3 className='safrapay-title'>Venda e receba seu dinheiro em 1 dia</h3>  
                <p className='safrapay-text'>
                    Aluguel grátis disponível para clientes que atingirem o limite mínimo de vendas na máquina escolhida no mês. 
                    Consulte o regulamento Válido para Pessoa Física, MEI ou Pessoa Jurídica com faturamento até R$ 1 milhão no ano. 
                    Empréstimo sujeito à análise.                  
                </p>
            </div> 
        </div>         
    )
}

export default Partner;
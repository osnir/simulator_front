import "./styles.css";

const Footer: React.FC = () => {
    return (
        <div>
            <footer>
                <div className="footer-content">
                    <h5>Sobre o Simulador de Taxas</h5>
                    <p className="text-footer">
                        Este site fornece uma ferramenta gratuita para análise das principais maquininhas de cartão do mercado, permitindo que você simule transações, analise taxas, valores e planos de recebimento.
                        Nosso intuito é, para aquele que já tem sua solução definida, ajudar no dia-a-dia facilitando a elobração do preço final de venda dos seus produtos, e para aquele que está analisando as opções de maquininhas do mercado,
                        encontrar a que melhor se adeque ao seu negócio. Como objetivo final, este site existe para trazer concorrência e transparência ao mercado.            
                    </p>
                </div>
                <hr/>
                <div className="footer-content">
                    <h5>Privacidade</h5>
                    <li>Todas simulações e cálculos são realizados no navegador, as informações são armazenadas apenas na memória do dispositivo do usuário;</li>
                    <li>Nós não guardamos nenhuma informação em nossos servidores;</li>
                    <li>Se o usuário fechar a página, todas informações serão perdidas;</li>
                </div>
                <div className="footer-copyright">
                    <p>© 2022 Simulador de Taxas - Atualizada em 01/02/2022</p>
                </div>
            </footer>             
        </div>
    );
}
export default Footer;
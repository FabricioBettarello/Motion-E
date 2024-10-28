import Logo from '../assets/images/logo.png'

function Footer() {
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="section">
                        <a href="/"><img src={Logo} alt=""/></a>
                        <p>Venha conhecer mais sobre nós!</p>
                    </div>
                    <div className="section">
                        <h3>Links úteis</h3>
                        <a href="/">Inicio</a>
                        <a href="/ticket">Ingressos</a>
                        <a href="/login">Login</a>
                    </div>
                    <div className="section">
                        <h3>Contato</h3>
                        <p>Email: info@motione.com</p>
                        <p>Telefone: (11) 99350-5614</p>
                    </div>
                    <div className="section">
                        <h3>Copyright &copy; 2024</h3>
                        <p>Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
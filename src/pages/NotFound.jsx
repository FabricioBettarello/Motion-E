import Logo from '../assets/images/notfound.png'

const NotFound = () => {
    return (
        <>
            <div class="notfound">
                <h1>404</h1>
                <img src={Logo} alt="Mahindro" className='img-notfound'/>
                <p>Página Não Encontrada!</p>
                <a href="/">Voltar para a Página Inicial</a>
            </div>
        </>
    )
};

export default NotFound;
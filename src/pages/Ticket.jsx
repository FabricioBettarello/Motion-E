import Image from '../assets/images/image-ticket.png'
const Ticket = () => {
    return (
        <>
            <section>
                <div class="container">
                    <img src={Image} alt="" />
                    <h2>2024 FOMULA E SP AUTODROMO DE INTERLAGOS</h2>
                    <h3>Informações gerais:</h3>
                    <p>Você é um entusiasta da Fórmula E e está ansioso para assistir às corridas ao vivo? Temos uma ótima notícia para você! Em nosso site, você pode adquirir seus ingressos agora mesmo. O valor do ingresso inteiro é de apenas <b>R$320,00</b>, enquanto a meia entrada está disponível por <b>R$160,00</b>. Não perca esta oportunidade incrível de vivenciar a emoção da Fórmula E em tempo real!</p>
                    <div class="comprar">
                        <hr class="divisoria2" />
                        <button type="submit" class="btn2" onclick="comprar()">Comprar ingresso</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ticket
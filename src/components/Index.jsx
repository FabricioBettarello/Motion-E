import Tigrinho from '../assets/images/tigrinho.png';

function Index() {
    return (
        <>
            <section className="principal">
                <div>
                    <h1>CONHEÇA NOSSO<br />NOVO MASCOTE!</h1>
                    <p>O novo mascote tigre da Motion E simboliza força, agilidade e paixão pela excelência. Ele representa a determinação da equipe e sua busca constante por velocidade e desempenho superior. Ele é mais do que um mascote, é o coração rugindo da Motion E.</p>
                    <br />
                    <a href="/mascote">Conheça agora!</a>
                </div>
                <img src={Tigrinho} alt="" />
            </section>
            <hr className="divisoria"></hr>
        </>
    )
}

export default Index

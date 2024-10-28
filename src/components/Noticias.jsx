import Anuncio1 from '../assets/images/anuncio1.webp'
import Anuncio2 from '../assets/images/anuncio2.png'

function Noticias() {
    return (
        <>
            <section className="terciária" id="noticias">
                <br />
                <div>
                    <h2>NEWS</h2>
                </div>
                <br />
                <div className="novidades">
                    <div className="publica1">
                        <img src={Anuncio1} alt="" />
                        <div className="conteudo">
                            <h2>Formula E And FIA Unveil</h2>
                            <p>Leveraging a roster of innovative technical upgrades, the GEN3 Evo unveiled at H.S.H Prince Albert II’s Private Car Collection will debut in Season 11 of the ABB FIA Formula E World Championship where some of the world’s greatest manufacturers and drivers race wheel-to-wheel in iconic locations around the globe.</p>
                        </div>
                    </div>
                    <div className="publica2">
                        <img src={Anuncio2} alt="" />
                        <div className="conteudo">
                            <h2>Velocidade Do Samba: A Brilhante Herança Do Automobilismo Brasileiro</h2>
                            <p>Era só uma questão de tempo até que a Fórmula E encontrasse uma casa no Brasil. Talvez não haja outro país com tanta paixão pelo automobilismo, ou tantos ícones do automobilismo, quanto a maior nação da América do Sul. Aqui, revisitamos alguns dos maiores pilotos de todos os tempos do Brasil, inclusive da Classe de 2023 da Fórmula E.</p>
                        </div>
                    </div>
                    <div className="publica3">
                        <h2>Campeonato:<br />Melhores pilotos</h2>

                        <ul>
                            <li><span>1</span>Jake Dennis</li>
                            <li><span>2</span>Stoffel Vandoorne</li>
                            <li><span>3</span>Sergio Camara</li>
                            <li><span>4</span>Robin Frijns</li>
                            <li><span>5</span>Jake Hughes</li>
                        </ul>

                        <button onclick="Fontes3()">Fontes</button>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
            </section>
        </>
    )
}

export default Noticias
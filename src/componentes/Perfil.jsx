import Imagem from "./images/Imagem.jpeg"
import './Perfil.css'

function Perfil() {
    return (
        <div className="apresentacao">
            <img src={Imagem} />
            <div className="textos">
                <h2>Olá, eu sou Mariana Orico</h2>
                <p>Aluna da reprograma, em transição de carreira vindo da área da Psicologia. Desenvolvedora Front-End Júnior.</p>
                <p>Possuo habilidades em HTML, CSS, JavaScript, Git, Github e React.</p>
            </div>
        </div>
    )
}

export default Perfil
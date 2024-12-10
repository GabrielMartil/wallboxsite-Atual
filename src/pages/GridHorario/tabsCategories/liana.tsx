import "./styles/stylesCoach.css"
import img from '../../../assets/img/liana01.jpg';

export function Liana(){
    return(
        <div>
            <header className="header-top">
                <div className="fotoPerfil">
                    <img src={img} alt="foto-perfil" />
                </div>
                <div>
                    <h1> Coach: Liana Fernandes </h1>
                </div>
            </header>
        </div>
    );
};
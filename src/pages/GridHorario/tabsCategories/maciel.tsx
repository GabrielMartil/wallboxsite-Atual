import "./styles/stylesCoach.css"
import img from '../../../assets/img/marciel.jpg';

export function Maciel() {
    return (
        <div>
            <div>
                <header className="header-top">
                    <div className="fotoPerfil">
                        <img src={img} alt="foto-perfil" />
                    </div>
                    <div>
                        <h1> Coach: Maciel </h1>
                    </div>
                </header>
            </div>
        </div>
    );
};
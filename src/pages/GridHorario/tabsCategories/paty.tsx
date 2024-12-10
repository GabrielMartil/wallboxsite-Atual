import "./styles/stylesCoach.css"
import img from '../../../assets/img/paty.jpg';

export function Paty(){
    return(
        <div>
                        <div>
                <header className="header-top">
                    <div className="fotoPerfil">
                        <img src={img} alt="foto-perfil" />
                    </div>
                    <div>
                        <h1> Coach: Paty Alcantara </h1>
                    </div>
                </header>
            </div>
        </div>
    );
};
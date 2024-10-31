import { Form } from 'react-bootstrap';
import { IoIosAddCircle } from "react-icons/io";
import "./styles/stylesCoach.css"
import img from '../../../assets/img/pedri-05.jpg';

export function Pedro() {
    return (
        <div>
            <header className="header-top">
                <div className="fotoPerfil">
                    <img src={img} alt="foto-perfil" />
                </div>
                <div>
                    <h1> Coach: Pedro Yago </h1>
                </div>
            </header>

            <section style={{flexDirection:"row", display:"flex", gap:"50px"}}>
                <div className="gridhorario">
                    <div className="horarios">
                        <Form.Select aria-label="Default select example" className="select-horario">
                            <option> Turnos </option>
                            <option value="manha"> Manhã </option>
                            <option value="tarde"> Tarde </option>
                            <option value="noite"> Noite </option>
                        </Form.Select>
                        <input type="text" placeholder="Horário" className="input-horario" />
                    </div>
                    <div>
                        <IoIosAddCircle
                            size={30}
                            style={{ cursor: 'pointer', color: "#03a12b" }}
                            onClick={() => alert('Adicionar horário')}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

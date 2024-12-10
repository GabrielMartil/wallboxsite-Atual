import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { IoIosAddCircle } from "react-icons/io";
import "./styles/stylesCoach.css"
import img from '../../../assets/img/paty.jpg';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

type Horario = {
    turno: string;
    horario: string;
};

export function Paty() {
    const [horarios, setHorarios] = useState<Horario[]>([]); // Lista de horários
    const [turno, setTurno] = useState(''); // Turno selecionado
    const [horario, setHorario] = useState(''); // Horário digitado

    const adicionarHorario = () => {
        if (!turno || !horario) {
            alert("Por favor, preencha o turno e o horário!");
            return;
        }

        const novoHorario = { turno, horario };

        setHorarios((prevHorarios) => {
            const novosHorarios = [...prevHorarios, novoHorario];
            // Ordenar os horários em ordem crescente
            return novosHorarios.sort((a, b) => a.horario.localeCompare(b.horario));
        });

        setTurno('');
        setHorario('');
    };

    const deletarHorario = (indexToDelete: number) => {
        setHorarios((prevHorarios) =>
            prevHorarios.filter((_, index) => index !== indexToDelete)
        );
    };
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

            <section style={{ flexDirection: "row", display: "flex", gap: "50px" }}>
                <div className="gridhorario">
                    <div className="horarios">
                        {/* Dropdown para selecionar Turno */}
                        <Form.Select
                            aria-label="Default select example"
                            className="select-horario"
                            value={turno}
                            onChange={(e) => setTurno(e.target.value)}
                        >
                            <option value="">Turnos</option>
                            <option value="Manhã">Manhã</option>
                            <option value="Tarde">Tarde</option>
                            <option value="Noite">Noite</option>
                        </Form.Select>

                        {/* Input para digitar Horário */}
                        <input
                            type="text"
                            placeholder="Horário"
                            className="input-horario"
                            value={horario}
                            onChange={(e) => setHorario(e.target.value)}
                        />
                        {/* Botão para adicionar horário */}
                        <div>
                            <IoIosAddCircle
                                size={30}
                                style={{ cursor: 'pointer', color: "#03a12b" }}
                                onClick={adicionarHorario}
                            />
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            gap: "10px",
                            alignItems: "center",
                            marginTop: 20,
                        }}
                    >
                        {horarios.map((item, index) => (
                            <div
                                className="exercicio"
                                key={index}
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    width: "280px",
                                    padding: "10px",
                                    border: "1px solid #ddd",
                                    borderRadius: "5px",
                                    background: "#f9f9f9",
                                }}
                            >
                                <div>
                                    <p><strong> Turno: </strong> {item.turno}</p>
                                    <p><strong>Horário: </strong> {item.horario}</p>
                                </div>
                                <div>
                                    <IconButton
                                        style={{ color: "red", padding: 0 }}
                                        onClick={() => deletarHorario(index)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
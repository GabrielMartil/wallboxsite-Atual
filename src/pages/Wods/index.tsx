import { useState } from "react";
import './wods.css';
import { Autocomplete, TextField } from "@mui/material";

type Exercicio = {
    nome: string;
    repeticoes: string;
    observacao: string;
};

export function Wods() {

    const opcoesTipo = [
        { label: 'Aquecimento' },
        { label: 'Técnica' },
        { label: 'Wod' },
    ];

    const [exercicios, setExercicios] = useState<Exercicio[]>([
        { nome: '', repeticoes: '', observacao: '' }
    ]);

    const adicionarNovoExercicio = () => {
        setExercicios([
            ...exercicios,
            { nome: '', repeticoes: '', observacao: '' }
        ]);
    };

    const atualizarExercicio = (index: number, campo: keyof Exercicio, valor: string) => {
        const novosExercicios = [...exercicios];
        novosExercicios[index][campo] = valor;
        setExercicios(novosExercicios);
    };

    const excluirExercicio = (index: number) => {
        const novosExercicios = exercicios.filter((_, i) => i !== index);
        setExercicios(novosExercicios);
    };

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "30px" }}>
                <div className="header-a">
                    <h1 className="titulo">Treino do dia</h1>
                </div>
            </div>

            <section style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "30px" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="inputcadastro">
                        <div className="inputText">
                            <TextField
                                id="data-nascimento"
                                label="Data de Nascimento"
                                variant="outlined"
                                fullWidth
                                placeholder="00/00/0000"
                                InputProps={{ style: { height: '2.5rem', width: '10rem' } }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </div>
                        <div className="inputForm">
                            <Autocomplete
                                options={opcoesTipo}
                                getOptionLabel={(option) => option.label}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Tipo"
                                        variant="outlined"
                                        fullWidth
                                        placeholder="Tipo"
                                        InputLabelProps={{ shrink: true }}
                                    />
                                )}
                                onChange={(_event, value) => {
                                    console.log(value); // Você pode armazenar o valor selecionado aqui
                                }}
                                sx={{
                                    width: '12rem',
                                    '& .MuiOutlinedInput-root': { height: '2.5rem' }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                {exercicios.map((exercicio, index) => (
                    <div key={index} className="exercicio">
                        <div className="inputcadastro">
                            <div className="inputText">
                                <TextField
                                    label="Exercício"
                                    placeholder="Nome do Exercício"
                                    value={exercicio.nome}
                                    onChange={(e) => atualizarExercicio(index, 'nome', e.target.value)}
                                    fullWidth
                                    InputProps={{ style: { height: '2.5rem', width: '20rem' } }}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </div>
                            <div className="inputText">
                                <TextField
                                    label="Repetições / Duração"
                                    placeholder="Repetições ou Duração"
                                    value={exercicio.repeticoes}
                                    onChange={(e) => atualizarExercicio(index, 'repeticoes', e.target.value)}
                                    fullWidth
                                    InputProps={{ style: { height: '2.5rem', width: '20rem' } }}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </div>
                            <div className="inputText">
                                <TextField
                                    label="Observação"
                                    placeholder="Observação do movimento"
                                    value={exercicio.observacao}
                                    onChange={(e) => atualizarExercicio(index, 'observacao', e.target.value)}
                                    fullWidth
                                    InputProps={{ style: { height: '2.5rem', width: '20rem' } }}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </div>

                            <div style={{ display: "flex", justifyContent: "center", marginTop: 17, gap: 20, marginBottom: 20 }}>
                                <button
                                    type="submit"
                                    style={{
                                        backgroundColor: "#F2B705",
                                        color:"#000",
                                        border: "none",
                                        padding: "5px 10px",
                                        borderRadius: "8px",
                                    }}
                                    onClick={() => excluirExercicio(index)}>
                                    Excluir
                                </button>
                            </div>
                        </div>
                    </div>

                ))}
            </section>
            <section style={{ display: "flex", justifyContent: "center", marginTop: 50, gap: 20, marginBottom: 20 }}>
                <div className="actions">
                    <button onClick={adicionarNovoExercicio} className="addButton">
                        Adicionar novo Formulário
                    </button>
                    <button className="addButton">
                        Salvar Treino
                    </button>
                </div>
            </section>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "30px" }}>
                <div className="header-a">
                    <h1 className="titulo">Treinos Criados</h1>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "30px" }}>
                <div className="exercisesList">
                    <div className="exercicio">
                        <span>Aquecimento - 10/11/2024</span>
                        <button className="deleteButton">Excluir</button>
                    </div>
                    <div className="exercicio">
                        <span>Técnica - 10/11/2024</span>
                        <button className="deleteButton">Excluir</button>
                    </div>
                    <div className="exercicio">
                        <span>WOD - 10/11/2024</span>
                        <button className="deleteButton">Excluir</button>
                    </div>
                </div>
            </div>
        </div >
    );
}

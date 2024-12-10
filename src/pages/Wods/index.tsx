import './wods.css';
import { useState } from 'react';
import { TextField } from "@mui/material";

interface Treino {
    tipo: string;
    conteudo: string;
    data: string;
}

export function Wods() {
    const [treinos, setTreinos] = useState<Treino[]>([]);
    const [aquecimento, setAquecimento] = useState("");
    const [tecnica, setTecnica] = useState("");
    const [wod, setWod] = useState("");
    const [dataTreino, setDataTreino] = useState("");

    const salvarTreino = async () => {
        if (!dataTreino) {
            alert("Por favor, insira a data do treino!");
            return;
        }
    
        const novoTreino = {
            aquecimento,
            tecnica,
            wod,
            data: dataTreino,
        };
    
        try {
            const response = await fetch("https://api-wallbox.onrender.com/Wods", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(novoTreino), // Envia como um único objeto
            });
    
            if (!response.ok) {
                throw new Error("Erro ao salvar treino");
            }
    
            // Adiciona o novo treino localmente
            const savedTreino = await response.json();
            setTreinos((prev) => [
                ...prev,
                { tipo: 'Aquecimento', conteudo: savedTreino.data.aquecimento, data: savedTreino.data.data },
                { tipo: 'Técnica', conteudo: savedTreino.data.tecnica, data: savedTreino.data.data },
                { tipo: 'WOD', conteudo: savedTreino.data.wod, data: savedTreino.data.data },
            ]);
    
            // Limpa os campos
            setAquecimento('');
            setTecnica('');
            setWod('');
            setDataTreino('');
        } catch (error) {
            console.error("Erro ao salvar treino:", error);
            alert("Erro ao salvar treino. Tente novamente.");
        }
    };

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "30px" }}>
                <div className="header-a">
                    <h1 className="titulo">Treino do dia</h1>
                </div>
            </div>
            <section style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
                <TextField
                    type="date"
                    value={dataTreino}
                    onChange={(e) => setDataTreino(e.target.value)}
                    label="Data do Treino"
                    InputProps={{ style: { height: '2.5rem', width: '10rem' } }}
                    InputLabelProps={{ shrink: true }}
                    style={{ width: "200px"}}
                />
            </section>
            <section style={{ display: "flex", flexDirection: "column", backgroundColor: "#FFF", padding: "20px" }}>
                <div style={{ marginBottom: "20px" }}>
                    <h1>Aquecimento</h1>
                    <TextField
                        value={aquecimento}
                        onChange={(e) => setAquecimento(e.target.value)}
                        placeholder="Digite o Aquecimento..."
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={3}
                    />
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <h1>Técnica</h1>
                    <TextField
                        value={tecnica}
                        onChange={(e) => setTecnica(e.target.value)}
                        placeholder="Digite a Técnica..."
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={3}
                    />
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <h1>WOD</h1>
                    <TextField
                        value={wod}
                        onChange={(e) => setWod(e.target.value)}
                        placeholder="Digite o WOD..."
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={3}
                    />
                </div>
            </section>
            <section style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
                <button className="addButton" onClick={salvarTreino}>
                    Salvar Treino
                </button>
            </section>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "30px" }}>
                <div className="header-a">
                    <h1 className="titulo">Treinos Criados</h1>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    whiteSpace: "pre-wrap",
                    flexDirection: "row",
                    gap: "30px",
                    alignItems: "center",
                    marginBottom: 100,
                }}
            >
                {treinos.map((treino, index) => (
                    <div
                        className="exercicio"
                        key={index}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "330px",
                            height: "400px",
                            padding: "10px",
                            border: "1px solid #ddd",
                            borderRadius: "10px",
                            background: "#f9f9f9",
                        }}
                    >
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "30px",
                            marginTop: "20px",
                            margin: "10px"
                        }}>
                            <div>
                                <h3>{treino.tipo}</h3>
                                <p>
                                    <strong>Data:</strong> {treino.data}
                                </p>

                            </div>
                            <div>
                                <p style={{ margin: "0", lineHeight: "1.5"}}>
                                    {treino.conteudo}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

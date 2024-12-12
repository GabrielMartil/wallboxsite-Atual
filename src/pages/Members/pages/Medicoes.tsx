import React, { useEffect, useState } from "react";
import { Divider, TextField, IconButton, CircularProgress } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import axios, { AxiosError } from 'axios';



export function MedicoesAlunos() {
    const [cpf, setCpf] = useState('');
    const [nomeAluno, setNomeAluno] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // Função para consultar o aluno pelo CPF
    const consultarAluno = async () => {
        if (!cpf) {
            setError('CPF é obrigatório!');
            return;
        }

        setIsLoading(true);
        setError('');
        try {
            const response = await axios.get(`https://api-wallbox.onrender.com/Members?cpf=${cpf.replace(/\D/g, '')}`);

            if (response.data && response.data.nome) {
                setNomeAluno(response.data.nome);
            } else {
                setNomeAluno('');
                setError('Aluno não encontrado!');
            }
        } catch (err) {
            if (err instanceof AxiosError) {
                if (err.response && err.response.status === 404) {
                    setError('Aluno não encontrado!');
                    setNomeAluno('');
                } else {
                    setError('Erro ao consultar o aluno!');
                }
            } else {
                setError('Erro desconhecido');
            }
            setNomeAluno('');
        } finally {
            setIsLoading(false);
        }
    };

    // Função para formatar o CPF
    function formatCPF(cpf: string) {
        return cpf
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1-$2')
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }

    useEffect(() => {
        const cpfElement = document.getElementById('cpfaluno') as HTMLInputElement;
        if (cpfElement) {
            cpfElement.addEventListener('input', (event) => {
                const target = event.target as HTMLInputElement;
                if (target) {
                    let value = target.value;
                    value = formatCPF(value);
                    target.value = value;
                    setCpf(value);  // Atualizando o estado com o CPF formatado
                }
            });
        }

        return () => {
            if (cpfElement) {
                cpfElement.removeEventListener('input', () => { });
            }
        };
    }, []);

    const handleSubmit = async () => {
        if (!nomeAluno) {
            alert('Por favor, consulte um aluno antes de registrar as medições.');
            return;
        }

        const cpfElement = document.getElementById("cpfaluno") as HTMLInputElement;
        if (!cpfElement) {
            alert("Erro: Campo CPF não encontrado.");
            return;
        }

        let cpfLimpo = cpfElement.value.replace(/\D/g, '');

        if (cpfLimpo.length !== 11) {
            alert('Por favor, insira um CPF válido.');
            return;
        }

        const pesoElement = document.getElementById("peso") as HTMLInputElement;
        const alturaElement = document.getElementById("altura") as HTMLInputElement;
        const peitoElement = document.getElementById("peito") as HTMLInputElement;
        const abdomenElement = document.getElementById("abdomen") as HTMLInputElement;
        const quadrilElement = document.getElementById("quadril") as HTMLInputElement;
        const bracoEsquerdoElement = document.getElementById("braco_esquerdo") as HTMLInputElement;
        const bracoDireitoElement = document.getElementById("braco_direito") as HTMLInputElement;
        const coxaEsquerdaElement = document.getElementById("coxa_esquerda") as HTMLInputElement;
        const coxaDireitaElement = document.getElementById("coxa_direita") as HTMLInputElement;
        const panturrilhaEsquerdaElement = document.getElementById("panturrilha_esquerda") as HTMLInputElement;
        const panturrilhaDireitaElement = document.getElementById("panturrilha_direita") as HTMLInputElement;

        if (!pesoElement.value || !alturaElement.value) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        const formData = {
            cpf: cpfLimpo,
            peso: pesoElement.value,
            altura: alturaElement.value,
            peito: peitoElement.value,
            abdomen: abdomenElement.value,
            quadril: quadrilElement.value,
            braco_esquerdo: bracoEsquerdoElement.value,
            braco_direito: bracoDireitoElement.value,
            coxa_esquerda: coxaEsquerdaElement.value,
            coxa_direita: coxaDireitaElement.value,
            panturrilha_esquerda: panturrilhaEsquerdaElement.value,
            panturrilha_direita: panturrilhaDireitaElement.value,
        };

        try {
            const response = await axios.post("https://api-wallbox.onrender.com/medicoes", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 200 || response.status === 201) {
                alert("Dados cadastrados com sucesso!");
                // Limpeza dos campos
                cpfElement.value = '';
                pesoElement.value = '';
                alturaElement.value = '';
                peitoElement.value = '';
                abdomenElement.value = '';
                quadrilElement.value = '';
                bracoEsquerdoElement.value = '';
                bracoDireitoElement.value = '';
                coxaEsquerdaElement.value = '';
                coxaDireitaElement.value = '';
                panturrilhaEsquerdaElement.value = '';
                panturrilhaDireitaElement.value = '';
            } else {
                alert("Erro ao cadastrar os dados!");
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Erro Axios:", error.response?.data || error.message);
                alert(`Erro na comunicação com o servidor: ${error.response?.status || "Desconhecido"}`);
            } else {
                console.error("Erro inesperado:", error);
                alert("Erro inesperado ao enviar os dados.");
            }
        }
    };


    return (
        <div>
<header>
    <div
        style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "30px",
            width: "100%", // Garante que ocupe a tela inteira
        }}
    >
        <div
            className="header-a"
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height:"3.6rem"
            }}
        >
            {/* Coluna esquerda com o campo CPF e ícone */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start", // Fica alinhado à esquerda
                    flex: 1,
                }}
            >
                <TextField
                    id="cpfaluno"
                    label="CPF"
                    variant="outlined"
                    margin="normal"
                    placeholder="Digite o CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ maxLength: 14 }}
                    InputProps={{
                        style: { height: "2rem", width: "10rem", paddingRight: 0 },
                    }}
                />
                <IconButton onClick={consultarAluno} color="primary" disabled={isLoading} style={{ gap: 5, alignItems: "center"}}>
                    {isLoading ? <CircularProgress size={20} /> : <SearchIcon />}
                </IconButton>
            </div>

            {/* Título centralizado */}
            <div
                style={{
                    flex: 2, // O flex: 2 permite que o título ocupe mais espaço
                    textAlign: "center", // Centraliza o texto
                }}
            >
                <h1 className="titulo" style={{ fontSize: 25 }}>
                    Medições do Aluno
                </h1>
            </div>

            {/* Coluna direita vazia para equilibrar o layout */}
            <div style={{ flex: 1 }}></div>
        </div>
    </div>
</header>



            <section style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <h1 style={{ textAlign: "center", fontSize: 18 }}>
                    {nomeAluno ? nomeAluno : "ALuno"}
                </h1>
                <div style={{ display: "flex" }}>
                    <div className="inputcadastro">
                        <div className="inputText">
                            <TextField
                                id="peso"
                                label="Peso (kg)"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                placeholder="Digite seu peso"
                                InputProps={{ style: { height: '2.5rem', width: '10rem' } }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </div>
                        <div className="inputText">
                            <TextField
                                id="altura"
                                label="Altura (cm)"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                placeholder="Digite sua altura"
                                InputProps={{ style: { height: '2.5rem', width: '10rem' } }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex" }}>
                    <div className="inputcadastro">
                        <div className="inputText">
                            <TextField
                                id="peito"
                                label="Peito (cm)"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                placeholder="Digite a medida do peito"
                                InputProps={{ style: { height: '2.5rem', width: '10rem' } }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </div>
                        <div className="inputText">
                            <TextField
                                id="abdomen"
                                label="Abdômen (cm)"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                placeholder="Digite a medida"
                                InputProps={{ style: { height: '2.5rem', width: '10rem' } }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </div>
                    </div>
                    <div className="inputcadastro">
                        <div className="inputText">
                            <TextField
                                id="quadril"
                                label="Quadril (cm)"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                placeholder="Digite a medida"
                                InputProps={{ style: { height: '2.5rem', width: '10rem' } }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div className="inputcadastro">
                        <div className="inputText">
                            <TextField
                                id="braco_esquerdo"
                                label="Braço . E (cm)"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                placeholder="Digite a medida"
                                InputProps={{ style: { height: '2.5rem', width: '10rem' } }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </div>
                    </div>
                    <div className="inputcadastro">
                        <div className="inputText">
                            <TextField
                                id="braco_direito"
                                label="Braço . D (cm)"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                placeholder="Digite a medida"
                                InputProps={{ style: { height: '2.5rem', width: '10rem' } }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div className="inputcadastro">
                        <div className="inputText">
                            <TextField
                                id="coxa_esquerda"
                                label="Coxa . E (cm)"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                placeholder="Digite a medida"
                                InputProps={{ style: { height: '2.5rem', width: '10rem' } }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </div>
                    </div>
                    <div className="inputText">
                        <TextField
                            id="coxa_direita"
                            label="Coxa . D (cm)"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            placeholder="Digite a medida"
                            InputProps={{ style: { height: '2.5rem', width: '10rem' } }}
                            InputLabelProps={{ shrink: true }}
                        />
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div className="inputcadastro">
                        <div className="inputText">
                            <TextField
                                id="panturrilha_esquerda"
                                label="Panturrilha . E (cm)"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                placeholder="Digite a medida"
                                InputProps={{ style: { height: '2.5rem', width: '10rem' } }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </div>
                    </div>
                    <div className="inputcadastro">
                        <div className="inputText">
                            <TextField
                                id="panturrilha_direita"
                                label="Panturrilha . D (cm)"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                placeholder="Digite a medida"
                                InputProps={{ style: { height: '2.5rem', width: '10rem' } }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Divider style={{ marginTop: "30px" }} />

            <div style={{ display: "flex", justifyContent: "center", marginTop: 30, gap: 20, marginBottom: 100 }}>
                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        backgroundColor: "#2e7230",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                    onClick={handleSubmit}
                >
                    Cadastrar

                </button>

                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        backgroundColor: "#705c00",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                >
                    Atualizar

                </button>
            </div>

        </div >
    )
}
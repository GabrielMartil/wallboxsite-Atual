import { useEffect, useState } from "react";
import "./styles.css";
import { TextField, Avatar, Autocomplete, Divider } from "@mui/material";
import axios from "axios"; // Importe o axios

export function Cadastro() {
    const [cpf, setCpf] = useState('');
    const [selectedGenero, setSelectedGenero] = useState<{ label: string; id: number } | null>(null);
    const [selectedModalidade, setSelectedModalidade] = useState<{ label: string; id: number } | null>(null);
    const [selectedPlano, setSelectedPlano] = useState<{ label: string; id: number } | null>(null);

    const opcoesGenero = [
        { label: "Masculino", id: 1 },
        { label: "Feminino", id: 2 },
        { label: "Outro", id: 3 },
    ];

    const opcoesPlano = [
        { label: "Mensal", id: 1 },
        { label: "Semestral", id: 2 },
        { label: "Anual", id: 3 },
    ];

    const opcoesModalidade = [
        { label: "CrossFit", id: 1 },
        { label: "Musculação", id: 2 },
        { label: "Musculação / CrossFit", id: 3 },
    ];

    function formatCPF(cpf: string) {
        return cpf
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1-$2')
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }

    useEffect(() => {
        const cpfElement = document.getElementById('cpf') as HTMLInputElement;
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

        const cpfElement = document.getElementById("cpf") as HTMLInputElement;
        if (!cpfElement) {
            alert("Erro: Campo CPF não encontrado.");
            return;
        }

        let cpfLimpo = cpfElement.value.replace(/\D/g, '');

        if (cpfLimpo.length !== 11) {
            alert('Por favor, insira um CPF válido.');
            return;
        }
        const nomeElement = document.getElementById("nome") as HTMLInputElement;
        const dataNascimentoElement = document.getElementById("data-nascimento") as HTMLInputElement;
        const telefoneElement = document.getElementById("telefone") as HTMLInputElement;
        const emailElement = document.getElementById("email") as HTMLInputElement;

        // Validação básica dos campos
        if (!nomeElement.value || !emailElement.value || !cpfElement.value) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // Usando o estado para pegar os valores dos campos de seleção
        const formData = {
            nome: nomeElement.value,
            cpf: cpfLimpo,
            dataNascimento: dataNascimentoElement.value,
            genero: selectedGenero?.label,  // Usando o ID do gênero selecionado
            telefone: telefoneElement.value,
            email: emailElement.value,
            modalidade: selectedModalidade?.label,  // Usando o ID da modalidade selecionada
            plano: selectedPlano?.label,  // Usando o ID do plano selecionado
        };

        try {
            const response = await axios.post("https://api-wallbox.onrender.com/Cadastro", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            console.log("Resposta do servidor:", response.data);

            if (response.status === 201) { // Alterado para o código correto de criação de recurso
                alert(response.data.message || "Cadastro realizado com sucesso!");
            } else {
                alert("Erro: " + (response.data.message || "Erro desconhecido"));
            }
        } catch (error) {
            console.error("Erro ao se conectar ao servidor:", error);
            alert("Erro ao se conectar ao servidor.");
        }
    };

    return (
        <div>
            <header>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                    marginBottom: "30px"
                }}>
                    <div className="header-a">
                        <h1 className="titulo">Cadastro de Alunos</h1>
                    </div>
                </div>
            </header>

            <main>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 20, marginTop: 40 }}>
                    <h2>Dados Pessoais</h2>
                </div>
                <div className="dadospessoais">

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Avatar sx={{ width: 150, height: 150, fontSize: 40 }}>G</Avatar>
                    </div>


                    <section style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div className="inputcadastro">
                                <div className="inputText">
                                    <TextField
                                        id="nome"
                                        label="Nome"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        placeholder="Nome Completo"
                                        InputProps={{ style: { height: '2.5rem', width: '20rem' } }}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </div>

                                <div className="inputText">
                                    <TextField
                                        id="cpf"
                                        label="CPF"
                                        variant="outlined"
                                        value={cpf}
                                        onChange={(e) => setCpf(e.target.value)}
                                        inputProps={{ maxLength: 14 }}
                                        fullWidth
                                        margin="normal"
                                        placeholder="Digite o CPF"
                                        InputProps={{ style: { height: '2.5rem', width: '10rem' } }}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </div>

                                <div className="inputText">
                                    <TextField
                                        id="data-nascimento"
                                        label="Data de Nascimento"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        placeholder="00/00/0000"
                                        InputProps={{ style: { height: '2.5rem', width: '10rem' } }}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </div>
                                <div className="inputForm">
                                    <Autocomplete
                                        options={opcoesGenero}
                                        getOptionLabel={(option) => option.label}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Gênero"
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                placeholder="Gênero"
                                                InputLabelProps={{ shrink: true }}
                                            />
                                        )}
                                        onChange={(_event, value) => setSelectedGenero(value)}
                                        sx={{
                                            width: '10rem',
                                            '& .MuiOutlinedInput-root': { height: '2.5rem' }
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div className="inputText">
                                <TextField
                                    id="telefone"
                                    label="Telefone"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    placeholder="(00) 0 0000-0000"
                                    InputProps={{ style: { height: '2.5rem', width: '10rem' } }}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </div>
                            <div className="inputText">
                                <TextField
                                    id="email"
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    placeholder="Digite o Email"
                                    InputProps={{ style: { height: '2.5rem', width: '20rem' } }}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </div>
                            <div className="inputForm">
                                <Autocomplete
                                    options={opcoesModalidade}
                                    getOptionLabel={(option) => option.label}
                                    onChange={(_event, value) => {
                                        setSelectedModalidade(value);  // Agora o valor de `value` será do tipo `{ label: string; id: number } | null`
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Mobilidade"
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            placeholder="Mobilidade"
                                            InputLabelProps={{ shrink: true }}

                                        />
                                    )}
                                    sx={{
                                        width: '16rem',
                                        '& .MuiOutlinedInput-root': { height: '2.5rem' }
                                    }}
                                />
                            </div>
                            <div className="inputForm" style={{ marginLeft: "7rem" }}>
                                <Autocomplete
                                    options={opcoesPlano}
                                    getOptionLabel={(option) => option.label}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Plano"
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            placeholder="Plano"
                                            InputLabelProps={{ shrink: true }}
                                        />
                                    )}
                                    onChange={(_event, value) => setSelectedPlano(value)}
                                    sx={{
                                        width: '10rem',
                                        '& .MuiOutlinedInput-root': { height: '2.5rem' }
                                    }}
                                />
                            </div>
                        </div>
                    </section>
                </div>
                <section style={{ display: "flex", justifyContent: "center", marginTop: 20, flexDirection: "column" }} >

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 20, marginTop: 20 }}>
                        <h2>Dados do Endereço</h2>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div className="inputcadastro">
                            <div className="inputText">
                                <TextField
                                    id="cep"
                                    label="CEP"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    placeholder="Digite o CEP"
                                    InputProps={{ style: { height: '2.5rem', width: '10rem' } }}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </div>

                            <div className="inputText">
                                <TextField
                                    id="endereço"
                                    label="Endereço"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    placeholder="Digite o Endereço"
                                    InputProps={{ style: { height: '2.5rem', width: '20rem' } }}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </div>

                            <div className="inputText">
                                <TextField
                                    id="numero"
                                    label="Número"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{ style: { height: '2.5rem', width: '5rem' } }}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div className="inputText">
                            <TextField
                                id="complemento"
                                label="Complemento"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                placeholder="Digite o Complemento"
                                InputProps={{ style: { height: '2.5rem', width: '20rem' } }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </div>
                        <div className="inputText">
                            <TextField
                                id="bairro"
                                label="Bairro"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                placeholder="Digite o Bairro"
                                InputProps={{ style: { height: '2.5rem', width: '10rem' } }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </div>

                        <div className="inputText">
                            <TextField
                                id="cidade"
                                label="Cidade"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                placeholder="Digite a Cidade"
                                InputProps={{ style: { height: '2.5rem', width: '10rem' } }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </div>
                        <div className="inputText">
                            <TextField
                                id="estado"
                                label="Estado"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                InputProps={{ style: { height: '2.5rem', width: '5rem' } }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </div>
                    </div>
                </section>

                <Divider style={{ marginTop: "30px" }} />

                <div style={{ display: "flex", justifyContent: "center", marginTop: 30, gap: 20, marginBottom: 100 }}>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        style={{
                            padding: "10px 20px",
                            fontSize: "16px",
                            backgroundColor: "#2e7230",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}
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
            </main>
        </div >
    );
}

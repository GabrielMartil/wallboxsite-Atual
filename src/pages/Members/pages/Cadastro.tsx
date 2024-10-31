import "./styles.css";
import {
    TextField,
    Divider,
    Avatar,
    Autocomplete
} from "@mui/material";

export function Cadastro() {
    const opcoesGenero = [
        { label: 'Masculino', id: 1 },
        { label: 'Feminino', id: 2 },
        { label: 'Outro', id: 3 },
    ];

    const opcoesPlano = [
        { label: 'Mensal', id: 1 },
        { label: 'Semestral', id: 2 },
        { label: 'Anual', id: 3 },
    ];

    const opcoesModalidade = [
        { label: 'CrossFit', id: 1 },
        { label: 'Musculação', id: 2 },
        { label: 'Musculação / CrossFit', id: 3 },
    ];
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


                    <section style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} >
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
                                        onChange={(_event, value) => {
                                            console.log(value); // Você pode armazenar o valor selecionado aqui
                                        }}
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
                                    disablePortal
                                    options={opcoesModalidade}
                                    getOptionLabel={(option) => option.label}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Modalidade"
                                            placeholder="Modalidade"
                                            margin="normal"
                                            fullWidth
                                            variant="outlined"
                                            InputLabelProps={{ shrink: true }}
                                        />
                                    )}
                                    onChange={(_event, value) => {
                                        console.log(value);
                                    }}
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
                                    onChange={(_event, value) => {
                                        console.log(value); // Você pode armazenar o valor selecionado aqui
                                    }}
                                    sx={{
                                        width: '10rem',
                                        '& .MuiOutlinedInput-root': { height: '2.5rem' }
                                    }}
                                />
                            </div>

                        </div>
                    </section>
                </div>

                <Divider style={{ marginTop: "30px" }} />

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

                <section style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 20, marginTop: 20 }}>
                        <h1 style={{ textAlign: "center" }}>Medições do Aluno</h1>
                    </div>

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
                                    type="number"
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
                                    type="number"
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
                                    type="number"
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
                                    type="number"
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
                                    type="number"
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div className="inputcadastro">
                            <div className="inputText">
                                <TextField
                                    id="braco_bicipes_esquerdo"
                                    label="Braço . E (cm)"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    placeholder="Digite a medida"
                                    InputProps={{ style: { height: '2.5rem', width: '10rem' } }}
                                    InputLabelProps={{ shrink: true }}
                                    type="number"
                                />
                            </div>
                        </div>
                        <div className="inputcadastro">
                            <div className="inputText">
                                <TextField
                                    id="braco_bicipes_direito"
                                    label="Braço . D (cm)"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    placeholder="Digite a medida"
                                    InputProps={{ style: { height: '2.5rem', width: '10rem' } }}
                                    InputLabelProps={{ shrink: true }}
                                    type="number"
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
                                    type="number"
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
                                type="number"
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
                                    type="number"
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
                                    type="number"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <div style={{ display: "flex", justifyContent: "center", marginTop: 30, gap: 20, marginBottom: 100 }}>
                    <button
                        type="submit"
                        style={{
                            padding: "10px 20px",
                            fontSize: "16px",
                            backgroundColor: "#4CAF50",
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
                            backgroundColor: "#4CAF50",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}
                    >
                        Salvar

                    </button>
                </div>
            </main>
        </div >
    );
}

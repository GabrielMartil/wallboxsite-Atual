import { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
    Select,
    MenuItem,
    IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface Member {
    nome: any;
    id: number;
    name: string;
    telefone: string;
    email: string;
    modalidade: string;
    status: string;
    plano: string;
}

export function Members() {
    const [alunos, setAlunos] = useState<Member[]>([]);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [modalidadeFilter, setModalidadeFilter] = useState('');

    useEffect(() => {
        axios.get('https://api-wallbox.onrender.com/Members')
            .then((response) => {
                console.log("Dados recebidos:", response.data);  // Verifique os dados recebidos
                setAlunos(response.data);
            })
            .catch((error) => console.error('Erro ao buscar dados:', error));
    }, []);

    const filteredAlunos = alunos.filter((aluno) => {
        const searchTerm = search.toLowerCase();
        const alunoNome = aluno.nome ? aluno.nome.toLowerCase() : '';
        const alunoTelefone = aluno.telefone ? aluno.telefone : ''; // Corrigido para telefone
        const alunoEmail = aluno.email ? aluno.email.toLowerCase() : '';
        const alunoStatus = aluno.plano ? aluno.plano : '';
        const alunoModalidade = aluno.modalidade ? aluno.modalidade : '';

        console.log({
            alunoNome,
            alunoTelefone,  // Verifique se o telefone agora está sendo impresso
            alunoEmail,
            alunoStatus,
            alunoModalidade,
        });

        return (
            (alunoNome.includes(searchTerm) || alunoEmail.includes(searchTerm) || alunoTelefone.includes(searchTerm)) &&
            (statusFilter === '' || alunoStatus === statusFilter) &&
            (modalidadeFilter === '' || alunoModalidade === modalidadeFilter)
        );
    });
    const handleEdit = (aluno: Member) => {
        alert(`Editando aluno: ${aluno.name}`);
    };

    const handleDelete = (aluno: Member) => {
        alert(`Excluindo aluno: ${aluno.name}`);
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
                        <h1>Lista de Alunos</h1>
                    </div>
                </div>
            </header>
            <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                    marginBottom: "30px"
                }}>
                <TextField
                    label="Buscar"
                    variant="outlined"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ marginRight: 16 }}
                />
                <Select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    displayEmpty
                    style={{ marginRight: 16 }}
                >
                    <MenuItem value="">Todos os Status</MenuItem>
                    <MenuItem value="Ativo">Ativo</MenuItem>
                    <MenuItem value="Inativo">Inativo</MenuItem>
                </Select>
                <Select
                    value={modalidadeFilter}
                    onChange={(e) => setModalidadeFilter(e.target.value)}
                    displayEmpty
                >
                    <MenuItem value="">Todas as Modalidades</MenuItem>
                    <MenuItem value="Musculação">Musculação</MenuItem>
                    <MenuItem value="CrossFit">CrossFit</MenuItem>
                </Select>
            </div>
            <TableContainer component={Paper} style={{ marginTop: 16 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Telefone</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Modalidade</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Plano</TableCell>
                            <TableCell>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredAlunos.map((aluno) => (
                            <TableRow key={aluno.id}>
                                <TableCell>{aluno.nome}</TableCell>
                                <TableCell>{aluno.telefone}</TableCell>
                                <TableCell>{aluno.email}</TableCell>
                                <TableCell>{aluno.modalidade}</TableCell>
                                <TableCell>{aluno.status}</TableCell>
                                <TableCell>{aluno.plano}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => handleEdit(aluno)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleDelete(aluno)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

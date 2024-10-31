import { useState } from 'react';
import './styles.css';
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
    Checkbox,
    tableCellClasses,
    styled,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { TEMAS } from '../../assets/styles/Colors';

interface Member {
    name: string;
    numero: string;
    email: string;
    modalidade: string;
    status: string;
    plano: string;
}

function createData(name: string, numero: string, email: string, modalidade: string, status: string, plano: string): Member {
    return { name, numero, email, modalidade, status, plano };
}

const ListadeAlunos: Member[] = [
    createData('Gabriel Martins', '(85) 90000-0000', 'GabrielMartins@gmail.com', 'Musculação', 'Ativo', 'Anual'),
    createData('Jose Martins', '(85) 92222-2222', 'JoseMartins@gmail.com', 'Musculação', 'Inativo', 'Mensal'),
    createData('Ana Souza', '(85) 93333-3333', 'AnaSouza@gmail.com', 'CrossFit', 'Ativo', 'Trimestral'),
    createData('Carlos Almeida', '(85) 94444-4444', 'CarlosAlmeida@gmail.com', 'Musculação/CrossFit', 'Ativo', 'Mensal'),
    createData('Juliana Costa', '(85) 95555-5555', 'JulianaCosta@gmail.com', 'CrossFit', 'Ativo', 'Anual'),
    createData('Bruno Silva', '(85) 96666-6666', 'BrunoSilva@gmail.com', 'Musculação', 'Novo', 'Mensal'),
    createData('Fernanda Santos', '(85) 97777-7777', 'FernandaSantos@gmail.com', 'Musculação/CrossFit', 'Inativo', 'Trimestral'),
    createData('Rafael Nogueira', '(85) 98888-8888', 'RafaelNogueira@gmail.com', 'Musculação', 'Ativo', 'Anual'),
    createData('Larissa Lima', '(85) 99999-9999', 'LarissaLima@gmail.com', 'CrossFit', 'Ativo', 'Trimestral'),
    createData('Eduardo Gomes', '(85) 91111-1111', 'EduardoGomes@gmail.com', 'Musculação/CrossFit', 'Inativo', 'Mensal'),
    createData('Mariana Borges', '(85) 91212-1212', 'MarianaB@gmail.com', 'Musculação', 'Ativo', 'Trimestral'),
    createData('Rodrigo Castro', '(85) 92323-2323', 'RodrigoC@gmail.com', 'CrossFit', 'Novo', 'Mensal'),
    createData('Paula Neves', '(85) 93434-3434', 'PaulaNeves@gmail.com', 'Musculação', 'Inativo', 'Anual'),
    createData('Diego Freitas', '(85) 94545-4545', 'DiegoFreitas@gmail.com', 'CrossFit', 'Ativo', 'Trimestral'),
    createData('Fabiana Araújo', '(85) 95656-5656', 'FabianaA@gmail.com', 'Musculação', 'Ativo', 'Mensal'),
    createData('Gustavo Melo', '(85) 96767-6767', 'GustavoM@gmail.com', 'Musculação/CrossFit', 'Inativo', 'Anual'),
    createData('Aline Vieira', '(85) 97878-7878', 'AlineV@gmail.com', 'Musculação', 'Novo', 'Trimestral'),
    createData('Pedro Ramos', '(85) 98989-8989', 'PedroR@gmail.com', 'CrossFit', 'Inativo', 'Mensal'),
    createData('Beatriz Lima', '(85) 90101-0101', 'BeatrizL@gmail.com', 'Musculação', 'Ativo', 'Anual'),
    createData('Lucas Oliveira', '(85) 91212-1212', 'LucasO@gmail.com', 'Musculação/CrossFit', 'Ativo', 'Trimestral'),
    createData('Daniela Cunha', '(85) 92323-2323', 'DanielaC@gmail.com', 'Musculação', 'Inativo', 'Mensal'),
    createData('Renato Silva', '(85) 93434-3434', 'RenatoS@gmail.com', 'CrossFit', 'Ativo', 'Anual'),
    createData('Viviane Costa', '(85) 94545-4545', 'VivianeC@gmail.com', 'Musculação', 'Ativo', 'Mensal'),
    createData('Felipe Fernandes', '(85) 95656-5656', 'FelipeF@gmail.com', 'CrossFit', 'Inativo', 'Trimestral'),
    createData('Camila Rocha', '(85) 96767-6767', 'CamilaR@gmail.com', 'Musculação', 'Novo', 'Anual'),
    createData('Anderson Souza', '(85) 97878-7878', 'AndersonS@gmail.com', 'Musculação/CrossFit', 'Ativo', 'Mensal'),
    createData('Patrícia Lopes', '(85) 98989-8989', 'PatriciaL@gmail.com', 'Musculação', 'Inativo', 'Trimestral'),
    createData('Ricardo Alves', '(85) 90101-0101', 'RicardoA@gmail.com', 'CrossFit', 'Ativo', 'Anual'),
    createData('Luana Martins', '(85) 91212-1212', 'LuanaM@gmail.com', 'Musculação', 'Ativo', 'Mensal'),
    createData('Maurício Souza', '(85) 92323-2323', 'MauricioS@gmail.com', 'CrossFit', 'Inativo', 'Trimestral'),
];



const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: TEMAS.colors.yellow[300],
        color: TEMAS.colors.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd)': {
        backgroundColor: TEMAS.colors.gray[100],
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export function Members() {
    const [selected, setSelected] = useState<string[]>([]);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [modalidadeFilter, setModalidadeFilter] = useState('');

    const filteredAlunos = ListadeAlunos.filter((aluno) => {
        return (
            (aluno.name.toLowerCase().includes(search.toLowerCase()) || aluno.email.toLowerCase().includes(search.toLowerCase())) &&
            (statusFilter === '' || aluno.status === statusFilter) &&
            (modalidadeFilter === '' || aluno.modalidade === modalidadeFilter)
        );
    });

    // Funções para eventos de edição e exclusão
    const handleEdit = (aluno: Member) => {
        alert(`Editando aluno: ${aluno.name}`);
    };

    const handleDelete = (aluno: Member) => {
        alert(`Excluindo aluno: ${aluno.name}`);
    };

    const handleSelectAllClick = (event: { target: { checked: any; }; }) => {
        if (event.target.checked) {
          const newSelecteds = filteredAlunos.map((row) => row.name);
          setSelected(newSelecteds);
        } else {
          setSelected([]);
        }
      };
    
      // Função para selecionar/desmarcar uma linha individual
      const handleClick = (name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: any[] | ((prevState: string[]) => string[]) = [];
    
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1)
          );
        }
    
        setSelected(newSelected);
      };
    
      // Função auxiliar para verificar se todos os itens estão selecionados
      const isSelected = (name: string) => selected.indexOf(name) !== -1;
    return (
        <div className="container">
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '30px' }}>
                <div className="header-a">
                    <h1 className="titulo">Gerenciamento de Alunos</h1>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
                <div>
                    <TextField
                        label="Buscar por Nome ou E-mail"
                        placeholder="Buscar por Nome ou E-mail"
                        variant="outlined"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        InputProps={{ style: { height: '2.8rem', width: '20rem' } }}
                        InputLabelProps={{ shrink: true }}
                    />
                </div>

                <Select
                    displayEmpty
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    style={{ height: '2.8rem', width: '6rem' }}
                >
                    <MenuItem value="">Status</MenuItem>
                    <MenuItem value="Novo">Novo</MenuItem>
                    <MenuItem value="Ativo">Ativo</MenuItem>
                    <MenuItem value="Inativo">Inativo</MenuItem>
                </Select>
                <Select
                    displayEmpty
                    value={modalidadeFilter}
                    onChange={(e) => setModalidadeFilter(e.target.value)}
                    style={{ height: '2.8rem', width: '13rem' }}
                >
                    <MenuItem value=""> Modalidades </MenuItem>
                    <MenuItem value="Musculação"> Musculação </MenuItem>
                    <MenuItem value="CrossFit"> CrossFit </MenuItem>
                    <MenuItem value="Musculação/CrossFit"> Musculação / CrossFit  </MenuItem>
                </Select>
            </div>

            <TableContainer component={Paper}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center" >
                                <Checkbox
                                    indeterminate={selected.length > 0 && selected.length < filteredAlunos.length}
                                    checked={filteredAlunos.length > 0 && selected.length === filteredAlunos.length}
                                    onChange={handleSelectAllClick}
                                    inputProps={{
                                        'aria-label': 'select all rows',
                                    }}
                                /></StyledTableCell>
                            <StyledTableCell align="center" style={{ fontWeight: 'bold' }}>Nome</StyledTableCell>
                            <StyledTableCell align="center" style={{ fontWeight: 'bold' }}>Número</StyledTableCell>
                            <StyledTableCell align="center" style={{ fontWeight: 'bold' }}>E-mail</StyledTableCell>
                            <StyledTableCell align="center" style={{ fontWeight: 'bold' }}>Modalidade</StyledTableCell>
                            <StyledTableCell align="center" style={{ fontWeight: 'bold' }}>Status</StyledTableCell>
                            <StyledTableCell align="center" style={{ fontWeight: 'bold' }}>Plano</StyledTableCell>
                            <StyledTableCell align="center" style={{ fontWeight: 'bold' }}>Ações</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredAlunos.map((row) => (
                            <StyledTableRow key={row.name} className="tableRow" selected={isSelected(row.name)}>
                                <StyledTableCell padding="checkbox" align="center">
                                    <Checkbox
                                        checked={isSelected(row.name)}
                                        onChange={() => handleClick(row.name)}
                                        inputProps={{
                                            'aria-label': `select row ${row.name}`,
                                        }}
                                    />
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row" align="center">{row.name}</StyledTableCell>
                                <StyledTableCell align="center">{row.numero}</StyledTableCell>
                                <StyledTableCell align="center">{row.email}</StyledTableCell>
                                <StyledTableCell align="center">{row.modalidade}</StyledTableCell>
                                <StyledTableCell align="center">{row.status}</StyledTableCell>
                                <StyledTableCell align="center">{row.plano}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <IconButton onClick={() => handleEdit(row)} color="primary">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleDelete(row)} style={{ color: "red" }}>
                                        <DeleteIcon />
                                    </IconButton>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

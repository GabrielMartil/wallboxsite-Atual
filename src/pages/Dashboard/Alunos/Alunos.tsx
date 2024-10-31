import './styles.css';
import { Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import { PieChart, BarChart, useDrawingArea } from '@mui/x-charts';
import { TEMAS } from '../../../assets/styles/Colors';

interface Member {
    name: string;
    seg: number;
    ter: number;
    qua: number;
    qui: number;
    sex: number;
    sab: number;
    dom: number;
}

function createData(
    name: string,
    seg: number,
    ter: number,
    qua: number,
    qui: number,
    sex: number,
    sab: number,
    dom: number
): Member {
    return { name, seg, ter, qua, qui, sex, sab, dom };
}


const ListadeAlunos = [
    createData('Pedro Yago', 40, 10, 30, 20, 40, 0, 0),
    createData('Liana Fernandes', 10, 20, 30, 10, 20, 0, 0),
    createData('Paty', 30, 10, 30, 50, 30, 20, 0),
    createData('Maciel', 20, 30, 30, 50, 20, 20, 0),
];

const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: TEMAS.colors.gray[400],
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

const alunosStatus = [
    { nome: 'Ativos', quantidade: '50 alunos' },
    { nome: 'Inativos', quantidade: '30 alunos' },
    { nome: 'Novos', quantidade: '20 alunos' },
];
const DadosPlano = [
    { id: 'Mensal', value: 60, label: 'Mensal' },
    { id: 'Semestral', value: 30, label: 'Semestral' },
    { id: 'Anual', value: 10, label: 'Anual' },
];

const DadosFrequenciaSemanal = [
    { dia: 'Seg', valor: 100 },
    { dia: 'Ter', valor: 70 },
    { dia: 'Qua', valor: 120 },
    { dia: 'Qui', valor: 130 },
    { dia: 'Sex', valor: 100 },
    { dia: 'Sab', valor: 80 },
    { dia: 'Dom', valor: 40 },
];

const DadosFrequenciaMensal = [
    { mes: 'Jan', valor: 120 },
    { mes: 'Fev', valor: 150 },
    { mes: 'Mar', valor: 180 },
    { mes: 'Abr', valor: 90 },
    { mes: 'Mai', valor: 200 },
    { mes: 'Jun', valor: 130 },
    { mes: 'Jul', valor: 170 },
    { mes: 'Ago', valor: 80 },
    { mes: 'Set', valor: 220 },
    { mes: 'Out', valor: 140 },
    { mes: 'Nov', valor: 160 },
    { mes: 'Dez', valor: 110 },
];

const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 18,
}));

function PieCenterLabel({ children }: any) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    );
}

const diasSemana = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

export function Alunos() {
    return (
        <div>
            <header>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "20px" }}>
                    <div className="header-a">
                        <h1 className="titulo"> Membros </h1>
                    </div>
                </div>
            </header>
            <div style={{ display: "flex", gap: 20, justifyContent: "center", alignItems: "center" }}>
                <div>
                    <div style={{ display: "flex", justifyContent: "flex-start", marginTop: 30}}>
                        <TableContainer component={Paper} style={{height: 379, borderRadius: 10}}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center" style={{ fontWeight: 'bold' }}>Nome</StyledTableCell>
                                        {diasSemana.map((dia) => (
                                            <StyledTableCell key={dia} align="center" style={{ fontWeight: 'bold' }}>
                                                {dia}
                                            </StyledTableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {ListadeAlunos.map((row) => (
                                        <StyledTableRow
                                            key={row.name}
                                            className="tableRow"
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <StyledTableCell component="th" scope="row" align="center">
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">{row.seg}</StyledTableCell>
                                            <StyledTableCell align="center">{row.ter}</StyledTableCell>
                                            <StyledTableCell align="center">{row.qua}</StyledTableCell>
                                            <StyledTableCell align="center">{row.qui}</StyledTableCell>
                                            <StyledTableCell align="center">{row.sex}</StyledTableCell>
                                            <StyledTableCell align="center">{row.sab}</StyledTableCell>
                                            <StyledTableCell align="center">{row.dom}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>

                            </Table>
                        </TableContainer>
                    </div>

                    <div style={{ display: "flex", justifyContent: "flex-start", marginTop: 30 }}>
                        <div style={{ display: "flex", justifyContent: "center", gap: 50 }}>
                            <div>
                                <Paper elevation={5} style={{ padding: '20px', borderRadius: 10 }}>
                                    <h2 style={{ textAlign: 'center', marginBottom: 10 }}>Total de Alunos por Status</h2>
                                    <PieChart
                                        series={[{ data: alunosStatus.map(({ nome, quantidade }) => ({ label: nome, value: parseInt(quantidade) })), innerRadius: 70 }]}
                                        height={250}
                                        width={400}
                                    >
                                        <PieCenterLabel>Alunos</PieCenterLabel>
                                    </PieChart>
                                </Paper>
                            </div>
                            <div>
                                <Paper elevation={5} style={{ padding: '20px', borderRadius: 10 }}>
                                    <h2 style={{ textAlign: 'center', marginBottom: 10 }}> Medição de Planos </h2>
                                    <PieChart
                                        series={[{ data: DadosPlano, innerRadius: 70 }]}
                                        height={250}
                                        width={400}
                                    >
                                        <PieCenterLabel>Alunos</PieCenterLabel>
                                    </PieChart>
                                </Paper>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start" }}>
                    <div style={{ marginTop: 30 }}>
                        <Paper elevation={3} style={{ padding: '15px', borderRadius: 10 }}>
                            <h2 style={{ textAlign: 'center' }}>Frequência Semanal</h2>
                            <BarChart
                                xAxis={[{ scaleType: 'band', data: DadosFrequenciaSemanal.map(item => item.dia) }]}
                                series={[{ data: DadosFrequenciaSemanal.map(item => item.valor) }]}
                                width={600}
                                height={300}
                            />
                        </Paper>
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <Paper elevation={3} style={{ padding: '15px', borderRadius: 10 }}>
                            <h2 style={{ textAlign: 'center' }}>Frequência Mensal</h2>
                            <BarChart
                                xAxis={[{ scaleType: 'band', data: DadosFrequenciaMensal.map(item => item.mes) }]}
                                series={[{ data: DadosFrequenciaMensal.map(item => item.valor) }]}
                                width={600}
                                height={300}
                            />
                        </Paper>
                    </div>
                </div>
            </div>

        </div >
    );
}

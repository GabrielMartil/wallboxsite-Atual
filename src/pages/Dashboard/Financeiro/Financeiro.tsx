<<<<<<< HEAD
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { BarChart, PieChart } from '@mui/x-charts';

const dataReceitas = [
    { categoria: 'Mensalidades', valor: 5000 },
    { categoria: 'Vendas de Produtos', valor: 1500 },
    { categoria: 'Consultorias', valor: 700 },
];

const dataDespesas = [
    { categoria: 'Funcionários', valor: 3000 },
    { categoria: 'Aluguel', valor: 1000 },
    { categoria: 'Equipamentos', valor: 400 },
    { categoria: 'Marketing', valor: 200 },
];

export default function Financeiro() {
    return (
        <div>
            <header>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "20px" }}>
                    <div className="header-a">
                        <h1 className="titulo"> Financeiro </h1>
                    </div>
                </div>
            </header>

            <TableContainer component={Paper} style={{ marginTop: 20 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Categoria</TableCell>
                            <TableCell align="right">Valor (R$)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataReceitas.map((item) => (
                            <TableRow key={item.categoria}>
                                <TableCell>{item.categoria}</TableCell>
                                <TableCell align="right">{item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <div style={{ display: "flex", justifyContent: "flex-start", marginTop: 30 }}>
            <div style={{ display: "flex", justifyContent: "center", gap: 50 }}>
                <div>
                    <Paper elevation={5} style={{ padding: '20px', borderRadius: 10 }}>
                        <h2 style={{ textAlign: 'center', marginBottom: 10 }}>Total de Alunos por Status</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <PieChart
                                series={[{ data: dataReceitas.map(({ valor }) => ({ value: valor })) }]}
                                height={250}
                                width={250}
                            />
                            <div style={{ marginTop: 10, textAlign: 'center' }}>
                                {dataReceitas.map(({ categoria, valor }, index) => (
                                    <div key={index} style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
                                        <span style={{ fontWeight: 'bold' }}>{categoria}:</span> {valor}%
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Paper>
                </div>

                <div>
                    <Paper elevation={5} style={{ padding: '20px', borderRadius: 10 }}>
                        <h2 style={{ textAlign: 'center', marginBottom: 10 }}>Medição de Planos</h2>
                        <BarChart
                            xAxis={[{ scaleType: 'band', data: dataDespesas.map((item) => item.categoria) }]}
                            series={[{ data: dataDespesas.map((item) => item.valor) }]}
                            height={300}
                            width={500}
                        />
                    </Paper>
                </div>
            </div>
        </div>
        </div>
    );
}
=======
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { BarChart, PieChart } from '@mui/x-charts';

const dataReceitas = [
    { categoria: 'Mensalidades', valor: 5000 },
    { categoria: 'Vendas de Produtos', valor: 1500 },
    { categoria: 'Consultorias', valor: 700 },
];

const dataDespesas = [
    { categoria: 'Funcionários', valor: 3000 },
    { categoria: 'Aluguel', valor: 1000 },
    { categoria: 'Equipamentos', valor: 400 },
    { categoria: 'Marketing', valor: 200 },
];

export default function Financeiro() {
    return (
        <div>
            <header>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "20px" }}>
                    <div className="header-a">
                        <h1 className="titulo"> Financeiro </h1>
                    </div>
                </div>
            </header>

            <TableContainer component={Paper} style={{ marginTop: 20 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Categoria</TableCell>
                            <TableCell align="right">Valor (R$)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataReceitas.map((item) => (
                            <TableRow key={item.categoria}>
                                <TableCell>{item.categoria}</TableCell>
                                <TableCell align="right">{item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <div style={{ display: "flex", justifyContent: "flex-start", marginTop: 30 }}>
            <div style={{ display: "flex", justifyContent: "center", gap: 50 }}>
                <div>
                    <Paper elevation={5} style={{ padding: '20px', borderRadius: 10 }}>
                        <h2 style={{ textAlign: 'center', marginBottom: 10 }}>Total de Alunos por Status</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <PieChart
                                series={[{ data: dataReceitas.map(({ valor }) => ({ value: valor })) }]}
                                height={250}
                                width={250}
                            />
                            <div style={{ marginTop: 10, textAlign: 'center' }}>
                                {dataReceitas.map(({ categoria, valor }, index) => (
                                    <div key={index} style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
                                        <span style={{ fontWeight: 'bold' }}>{categoria}:</span> {valor}%
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Paper>
                </div>

                <div>
                    <Paper elevation={5} style={{ padding: '20px', borderRadius: 10 }}>
                        <h2 style={{ textAlign: 'center', marginBottom: 10 }}>Medição de Planos</h2>
                        <BarChart
                            xAxis={[{ scaleType: 'band', data: dataDespesas.map((item) => item.categoria) }]}
                            series={[{ data: dataDespesas.map((item) => item.valor) }]}
                            height={300}
                            width={500}
                        />
                    </Paper>
                </div>
            </div>
        </div>
        </div>
    );
}
>>>>>>> 47ae401f056f6ce3f42fe33bd76791f6a4f021c1

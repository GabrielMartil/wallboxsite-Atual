import { Box, Card, CardContent, Typography } from "@mui/material";
import { Scrollbars } from 'react-custom-scrollbars-2';

const equipamentos = [
    { nome: 'Kettlebell', descricao: 'Peso livre para treinos funcionais', quantidade: 10 },
    { nome: 'Barra Olímpica', descricao: 'Ideal para levantamento de peso', quantidade: 5 },
    { nome: 'Corda Naval', descricao: 'Utilizada para treino de força e resistência', quantidade: 7 },
    { nome: 'Caixa de Pliometria', descricao: 'Usada em saltos e agachamentos', quantidade: 8 },
    { nome: 'Anilhas', descricao: 'Pesos de variados tamanhos para a barra', quantidade: 20 },
    { nome: 'Caixa de Pliometria', descricao: 'Usada em saltos e agachamentos', quantidade: 8 },
    { nome: 'Anilhas', descricao: 'Pesos de variados tamanhos para a barra', quantidade: 20 },
    { nome: 'Caixa de Pliometria', descricao: 'Usada em saltos e agachamentos', quantidade: 8 },
    { nome: 'Anilhas', descricao: 'Pesos de variados tamanhos para a barra', quantidade: 20 },
    { nome: 'Anilhas', descricao: 'Pesos de variados tamanhos para a barra', quantidade: 20 },
    { nome: 'Caixa de Pliometria', descricao: 'Usada em saltos e agachamentos', quantidade: 8 },
    { nome: 'Anilhas', descricao: 'Pesos de variados tamanhos para a barra', quantidade: 20 },
  ];

export function Equipamentos() {
    return (
        <div>
            <header>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "30px" }}>
                    <div className="header-a">
                        <h1 className="titulo"> Equipamentos </h1>
                    </div>
                </div>
            </header>

            <main style={{overflow: 'unset' }} >
                    <Typography variant="h5" align="center" gutterBottom>
                    </Typography>
                    <Scrollbars style={{ height: '89vh' }}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            {equipamentos.map((equipamento, index) => (
                                <Card key={index} sx={{ boxShadow: 2 }}>
                                    <CardContent>
                                        <Typography variant="h6" component="div">
                                            {equipamento.nome}
                                        </Typography>
                                        <Typography color="textSecondary">
                                            {equipamento.descricao}
                                        </Typography>
                                        <Typography variant="body2">
                                            Quantidade: {equipamento.quantidade}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>
                    </Scrollbars>
            </main>
        </div>
    )
}
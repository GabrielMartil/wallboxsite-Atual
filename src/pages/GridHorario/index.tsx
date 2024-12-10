import React, { useState } from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import './styles.css'
import { Liana } from './tabsCategories/liana';
import { Paty } from './tabsCategories/paty';
import { Pedro } from './tabsCategories/pedro';
import { Maciel } from './tabsCategories/maciel';

const counteudos = [
    <Paty />,
    <Liana />,
    <Pedro />,
    <Maciel />,
]


export function GridHorario() {
    const [abaAtiva, setAbaAtiva] = useState(0)
    return (
        <div>
            <header>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "30px" }}>
                <div className="header-a">
                    <h1 className="titulo">Grade de Horarios</h1>
                </div>
                </div>
            </header>

            <main>
                <React.Fragment>
                    <ListGroup horizontal>
                        <ListGroup.Item
                            className={`abas-category ${abaAtiva === 0 ? 'active' : ''}`}
                            onClick={() => setAbaAtiva(0)}
                        >
                            Paty
                        </ListGroup.Item>
                        <ListGroup.Item
                            className={`abas-category ${abaAtiva === 1 ? 'active' : ''}`}
                            onClick={() => setAbaAtiva(1)}
                        >
                            Liana
                        </ListGroup.Item>
                        <ListGroup.Item
                            className={`abas-category ${abaAtiva === 2 ? 'active' : ''}`}
                            onClick={() => setAbaAtiva(2)}
                        >
                            Pedro
                        </ListGroup.Item>
                        <ListGroup.Item
                            className={`abas-category ${abaAtiva === 3 ? 'active' : ''}`}
                            onClick={() => setAbaAtiva(3)}
                        >
                            Maciel
                        </ListGroup.Item>
                    </ListGroup>

                    <Card>
                        {counteudos[abaAtiva]}
                    </Card>
                </React.Fragment>
            </main>
        </div>
    )
}
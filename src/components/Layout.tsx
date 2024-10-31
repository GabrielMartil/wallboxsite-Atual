import './styles/Layout.css';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ButtonGroup, ListGroup } from 'react-bootstrap';
import logo2 from '../assets/img/imglogo2.png';
import { TEMAS } from '../assets/styles/Colors';

export function Layout() {
  const [showMembers, setShowMembers] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const navigate = useNavigate(); // Hook para navegação

  // Função para alternar a exibição do dropdown
  const toggleMembers = () => {
    setShowMembers(!showMembers);
  };

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  const backgroundColor = () => {
    switch (location.pathname) {
      case '/Alunos':
        return TEMAS.colors.gray[300];
      case '/Financeiro':
        return TEMAS.colors.gray[300];
      default:
        return '#dfdfdf'; // Cor padrão
    }
  };

  return (
    <div>
      <div className="layoutContainer">
        <div className="navigationSidebar">
          <div>
            <img src={logo2} alt="Logo 2" />
          </div>
          <div>
            <div className='divbuttonlist'>
              <ButtonGroup vertical >
                <button className="button" onClick={toggleDashboard}>
                Dashboard
                </button>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  {showDashboard && (
                    <ListGroup variant="flush">
                      <ListGroup.Item
                        action
                        onClick={() => navigate('/Alunos')}
                        className="buttonlist"
                      >
                        Alunos
                      </ListGroup.Item>
                      <ListGroup.Item
                        action
                        onClick={() => navigate('/Financeiro')}
                        className="buttonlist"
                      >
                        Financeiro
                      </ListGroup.Item>
                    </ListGroup>
                  )}
                </div>
              </ButtonGroup>
            </div>

            <button className="button" onClick={() => navigate('/')}>
              Wods
            </button>

            <div className='divbuttonlist'>
              <ButtonGroup vertical >
                <button className="button" onClick={toggleMembers}>
                  Alunos
                </button>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  {showMembers && (
                    <ListGroup variant="flush">
                      <ListGroup.Item
                        action
                        onClick={() => navigate('/Members')}
                        className="buttonlist"
                      >
                        Gerenciar Alunos
                      </ListGroup.Item>
                      <ListGroup.Item
                        action
                        onClick={() => navigate('/Cadastro')}
                        className="buttonlist"
                      >
                        Cadastrar Aluno
                      </ListGroup.Item>
                    </ListGroup>
                  )}
                </div>
              </ButtonGroup>
            </div>
            <button className="button" onClick={() => navigate('/gradehoraria')}>
              Grade Horaria
            </button>
            <button className="button" onClick={() => navigate('/Equipamentos')}>
              Equipamentos
            </button>
          </div>
        </div>
        <div className="areadeConteudo" style={{ backgroundColor: backgroundColor() }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

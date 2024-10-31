import React from 'react';
import { createRoot } from 'react-dom/client';
import { RoutesPages } from './components/RoutesPages';

const container = document.getElementById('root'); // Obtém o elemento com id 'root'
if (container) {
  const root = createRoot(container); // Cria o root uma vez

  // Renderiza a aplicação
  root.render(
    <React.StrictMode>
      <RoutesPages />
    </React.StrictMode>
  );
}

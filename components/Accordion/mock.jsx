import React from 'react';
import styled from 'styled-components';

const Square = styled.div`
  background: black;
  height: 32px;
  width: 32px;
  display: inline-block;
  margin-right: 8px;
`;

export default {
  items: [
    {
      title: 'Institucional',
      content: (
        <div>
          Blog <br />
          Contatos
          <br />
          Certificação
          <br />
          Imprensa
          <br />
          Mapa do site
        </div>
      ),
    },
    {
      title: 'Para candidato',
      content: (
        <div>
          Blog <br />
          Contatos
          <br />
          Certificação
          <br />
          Imprensa
          <br />
          Mapa do site
        </div>
      ),
      opened: true,
    },
    {
      title: 'Para Empresa',
      content: (
        <div>
          Blog <br />
          Contatos
          <br />
          Certificação
          <br />
          Imprensa
          <br />
          Mapa do site
        </div>
      ),
    },
    {
      title: 'Educação',
      content: (
        <div>
          Blog <br />
          Contatos
          <br />
          Certificação
          <br />
          Imprensa
          <br />
          Mapa do site
        </div>
      ),
    },
    {
      title: 'Redes Sociais',
      inlineContent: (
        <>
          <Square />
          <Square />
          <Square />
        </>
      ),
    },
  ],
};

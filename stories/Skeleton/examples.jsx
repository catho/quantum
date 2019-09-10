import React from 'react';
import { Skeleton, Card, Tag, Button } from '../../components';

export default [
  {
    code: '<Skeleton />',
    component: <Skeleton />,
  },
  {
    code: '<Skeleton />',
    component: <Skeleton.Button />,
  },
  {
    code: '',
    component: (
      <>
        <Card>
          <Card.Header>
            <Card.HeaderText>
              <Card.Title small>Administrador</Card.Title>
              <Card.Description small>
                <Tag text="Hortolândia – SP" /> <Tag text="R$ 1.200" />
              </Card.Description>
            </Card.HeaderText>
            <Card.Thumbnail rounded src="#" alt="" />
          </Card.Header>
          <Card.Content>
            Irá atuar com Atendimento e recepção de clientes para reuniões e
            eventos agendados na empresa. Experiência em atendimento e recepção
            de clientes{' '}
            <a href="#" style={{ fontWeight: '700' }}>
              continuar lendo…
            </a>
          </Card.Content>
          <Card.Footer>
            <Button size="small">Enviar currículo</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            <Card.HeaderText>
              <Card.Title small>Administrador</Card.Title>
              <Card.Description small>
                <Tag text="Hortolândia – SP" /> <Tag text="R$ 1.200" />
              </Card.Description>
            </Card.HeaderText>
            <Card.Thumbnail rounded src="#" alt="" />
          </Card.Header>
          <Card.Content>
            Irá atuar com Atendimento e recepção de clientes para reuniões e
            eventos agendados na empresa. Experiência em atendimento e recepção
            de clientes{' '}
            <a href="#" style={{ fontWeight: '700' }}>
              continuar lendo…
            </a>
          </Card.Content>
          <Card.Footer>
            <Button size="small">Enviar currículo</Button>
          </Card.Footer>
        </Card>
      </>
    ),
  },
];

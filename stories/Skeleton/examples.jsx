/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Skeleton, Card, Tag, Button } from '../../components';
import { Title } from '../../components/GlobalStyle';

export default [
  {
    code: '<Skeleton />',
    component: <Skeleton />,
  },
  {
    code: '<Skeleton.Text />',
    component: <Skeleton.Text />,
  },
  {
    code: '<Skeleton.Circle height="56px" width="56px" />',
    component: <Skeleton.Circle height="56px" width="56px" />,
  },
  {
    code: '<Skeleton.Button width="100px" />',
    component: <Skeleton.Button width="100px" />,
  },
  {
    code: '<Skeleton.Tag width="100px" />',
    component: <Skeleton.Tag width="100px" />,
  },
  {
    code: `
      <Card>
        <Card.Header>
          <Card.HeaderText>
            <Card.Title small><Skeleton.Text width="180px" /></Card.Title>
            <Card.Description small>
              <Skeleton.Tag width="117px" />
              <Skeleton.Tag width="75px" />
            </Card.Description>
          </Card.HeaderText>
          <Skeleton.Circle height="72px" width="72px" />
        </Card.Header>
        <Card.Content>
          <Skeleton.Text />
          <Skeleton.Text width="60%" />
        </Card.Content>
        <Card.Footer>
          <Skeleton.Button size="small" width="116px" />
        </Card.Footer>
      </Card>
    `,
    component: (
      <>
        <Title as="h3">Here we have a customized card:</Title>
        <br />
        <Card>
          <Card.Header>
            <Card.HeaderText>
              <Card.Title small>
                <Skeleton.Text width="180px" />
              </Card.Title>
              <Card.Description small>
                <Skeleton.Tag width="117px" />
                <Skeleton.Tag width="75px" />
              </Card.Description>
            </Card.HeaderText>
            <Skeleton.Circle height="72px" width="72px" />
          </Card.Header>
          <Card.Content>
            <Skeleton.Text />
            <Skeleton.Text width="60%" />
          </Card.Content>
          <Card.Footer>
            <Skeleton.Button size="small" width="116px" />
          </Card.Footer>
        </Card>
        <br />
        <Title as="h3">Here we have the skeleton of the customized card:</Title>
        <br />
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

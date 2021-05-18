import React from 'react';
import Card from '../../../components/Card';
import Tag from '../../../components/Tag';
import Button from '../../../components/Button';

const JobAdCard = () => (
  <>
    <Card>
      <Card.Header>
        <Card.HeaderText>
          <Card.Title small>Administrador</Card.Title>
          <Card.Description small>
            <Tag text="Hortolândia – SP" skin="primary" />{' '}
            <Tag skin="primary" text="R$ 1.200" />
          </Card.Description>
        </Card.HeaderText>
        <Card.Thumbnail
          rounded
          src="https://assets.catho.com.br/quantum/card/thumb-72x72.png"
          alt="Avatar"
        />
      </Card.Header>
      <Card.Content>
        Irá atuar com Atendimento e recepção de clientes para reuniões e eventos
        agendados na empresa. Experiência em atendimento e recepção de clientes{' '}
        {/* eslint-disable-next-line */}
        <a href="#" style={{ fontWeight: '700' }}>
          {' '}
          continuar lendo…
        </a>
      </Card.Content>
      <Card.Footer>
        <Button size="small">Enviar currículo</Button>
      </Card.Footer>
    </Card>
  </>
);

JobAdCard.code = `import {
  Colors,
  Card,
  Tag,
  Button,
} from '@catho/quantum';

const JobAd = () => (
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
        Irá atuar com Atendimento e recepção de clientes para reuniões e eventos
        agendados na empresa. Experiência em atendimento e recepção de clientes{' '}
        <a href="#" style={{ fontWeight: '700' }}>
          continuar lendo…
        </a>
      </Card.Content>
      <Card.Footer>
        <Button size="small">Enviar currículo</Button>
      </Card.Footer>
    </Card>
  </>
)`;

export default JobAdCard;

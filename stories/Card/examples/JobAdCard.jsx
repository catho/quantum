import React from 'react';
import Card from '../../../components/Card';
import Tag from '../../../components/Tag';
import Button from '../../../components/Button';
import Colors from '../../../components/Colors';

const JobAdCard = () => (
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
        <a href="#" style={{ color: Colors.BLUE['500'], fontWeight: '700' }}>
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
        <a href="#" style={{ color: Colors.BLUE['500'], fontWeight: '700' }}>
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

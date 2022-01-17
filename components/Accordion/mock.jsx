/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const institucionalItem = {
  title: 'Institucional',
  content: (
    <ul>
      <li>
        <a href="#">Blog</a>
      </li>
      <li>
        <a href="#">Contatos</a>
      </li>
      <li>
        <a href="#">Certificação</a>
      </li>
      <li>
        <a href="#">Imprensa</a>
      </li>
      <li>
        <a href="#">Mapa do site</a>
      </li>
    </ul>
  ),
};

const candidateItemOpened = {
  title: 'Para candidato',
  content: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <br />
      Ut orci metus, auctor et viverra nec, consectetur vel diam.
      <br />
      Pellentesque non dui id ex fringilla posuere. Donec at hendrerit leo.
      <br />
      Aenean sit amet velit est.Aliquam erat volutpat.
      <br />
      In eu luctus ipsum. Etiam nibh neque, posuere sit amet euismod sit amet,
      <br />
      fringilla non nisi. Proin in pharetra tellus.
    </p>
  ),
  opened: true,
};

const companiesItem = {
  title: 'Para Empresa',
  content: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <br />
      Ut orci metus, auctor et viverra nec, consectetur vel diam.
      <br />
      Pellentesque non dui id ex fringilla posuere. Donec at hendrerit leo.
      <br />
      Aenean sit amet velit est.Aliquam erat volutpat.
      <br />
      In eu luctus ipsum. Etiam nibh neque, posuere sit amet euismod sit amet,
      <br />
      fringilla non nisi. Proin in pharetra tellus.
    </p>
  ),
};

const educationItem = {
  title: 'Educação',
  content: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <br />
      Ut orci metus, auctor et viverra nec, consectetur vel diam.
      <br />
      Pellentesque non dui id ex fringilla posuere. Donec at hendrerit leo.
      <br />
      Aenean sit amet velit est.Aliquam erat volutpat.
      <br />
      In eu luctus ipsum. Etiam nibh neque, posuere sit amet euismod sit amet,
      <br />
      fringilla non nisi. Proin in pharetra tellus.
    </p>
  ),
  onClick: () => {
    /* istanbul ignore next */
    console.log('Educação event triggered');
  },
};

const mock = {
  items: [
    { ...institucionalItem },
    { ...candidateItemOpened },
    { ...companiesItem },
    { ...educationItem },
  ],
};

const mockWithFirstItemOpened = {
  items: [
    { ...candidateItemOpened },
    { ...institucionalItem },
    { ...companiesItem },
    { ...educationItem },
  ],
};

const mockWithLastItemOpened = {
  items: [
    { ...institucionalItem },
    { ...companiesItem },
    { ...educationItem },
    { ...candidateItemOpened },
  ],
};

const mockWithAllItemsClosed = {
  items: [{ ...institucionalItem }, { ...companiesItem }, { ...educationItem }],
};

const mockCode = `
  items: [
    {
      title: 'Institucional',
      content: (
        <ul>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contatos</a>
          </li>
          ...
        </ul>
      ),
    },
    {
      title: 'Para candidato',
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Ut orci metus, auctor et viverra nec, consectetur vel diam.
          ...
        </p>
      ),
      opened: true,
    },
    {
      title: 'Para Empresa',
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Ut orci metus, auctor et viverra nec, consectetur vel diam.
          <br />
          Pellentesque non dui id ex fringilla posuere. Donec at hendrerit leo.
          ...
        </p>
      ),
    },
    {
      title: 'Educação',
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Ut orci metus, auctor et viverra nec, consectetur vel diam.
          ...
        </p>
      ),
    },
  ];
`;

export {
  mock as default,
  mockCode,
  mockWithFirstItemOpened,
  mockWithLastItemOpened,
  mockWithAllItemsClosed,
};

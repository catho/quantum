import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { colors, spacing } from '../shared/theme';
import Accordion from './Accordion';
import mock from './mock';

const closeMock = m => {
  const newMock = m;
  newMock.items = m.items.map(item => ({ ...item, opened: false }));
  return newMock;
};

describe('Accordion component', () => {
  it('Should match the snapshot', () => {
    const { container } = render(<Accordion {...closeMock(mock)} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should open and close items and change area-hidden property', () => {
    render(<Accordion {...closeMock(mock)} />);

    const firstElement = screen.queryAllByRole('listitem')[0];
    const firstElemenButton = screen.getByRole('button', {
      name: /Institucional/i,
    });
    const firstElementContent = firstElemenButton.nextSibling;

    expect(firstElement).toHaveStyle({
      'border-left': '4px solid transparent',
      margin: '1px 0',
    });
    expect(firstElementContent.getAttribute('aria-hidden')).toBe('true');

    fireEvent.click(firstElemenButton);

    expect(firstElemenButton.parentNode).toHaveStyle({
      'border-left': `4px solid ${colors.primary[700]}`,
      margin: `${spacing.medium}px 0px`,
    });
    expect(firstElementContent.getAttribute('aria-hidden')).toBe('false');
  });

  it('Should open more than one item', () => {
    render(<Accordion {...closeMock(mock)} />);

    const buttonInstitucional = screen.getByRole('button', {
      name: /Institucional/i,
    });
    const buttonParaCandidato = screen.getByRole('button', {
      name: /Para candidato/i,
    });

    expect(buttonInstitucional.nextSibling.getAttribute('aria-hidden')).toBe(
      'true',
    );
    expect(buttonParaCandidato.nextSibling.getAttribute('aria-hidden')).toBe(
      'true',
    );

    fireEvent.click(buttonInstitucional);
    fireEvent.click(buttonParaCandidato);

    expect(buttonInstitucional.nextSibling.getAttribute('aria-hidden')).toBe(
      'false',
    );
    expect(buttonParaCandidato.nextSibling.getAttribute('aria-hidden')).toBe(
      'false',
    );
  });

  it('Should close another items when `keepOnlyOneOpen` is true ', () => {
    render(<Accordion keepOnlyOneOpen {...closeMock(mock)} />);

    const buttonInstitucional = screen.getByRole('button', {
      name: /Institucional/i,
    });
    const buttonParaCandidato = screen.getByRole('button', {
      name: /Para candidato/i,
    });

    fireEvent.click(buttonInstitucional);

    expect(buttonInstitucional.nextSibling.getAttribute('aria-hidden')).toBe(
      'false',
    );
    expect(buttonParaCandidato.nextSibling.getAttribute('aria-hidden')).toBe(
      'true',
    );

    fireEvent.click(buttonParaCandidato);

    expect(buttonInstitucional.nextSibling.getAttribute('aria-hidden')).toBe(
      'true',
    );
    expect(buttonParaCandidato.nextSibling.getAttribute('aria-hidden')).toBe(
      'false',
    );
  });

  it('Should call onClick function', () => {
    const onClickMock = jest.fn();
    const onCloseMock = closeMock(mock);
    onCloseMock.items[0].onClick = onClickMock;
    render(<Accordion {...onCloseMock} />);
    const buttonInstitucional = screen.getByRole('button', {
      name: /Institucional/i,
    });
    fireEvent.click(buttonInstitucional);

    expect(onClickMock).toBeCalled();
  });
});

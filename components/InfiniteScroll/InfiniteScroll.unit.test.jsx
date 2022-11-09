/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import 'intersection-observer';
import 'regenerator-runtime';

import InfiniteScroll from './InfiniteScroll';

const someArray = Array.from(Array(30)).map((_, index) => ({
  key: index,
  label: index,
}));

const SomeList = () => (
  <ul>
    {someArray.map(({ key, label }) => (
      <li key={key}>{label}</li>
    ))}
  </ul>
);

const InfiniteScrollWithNewItems = () => {
  const [items, setItems] = useState([
    'gato',
    'cachorro',
    'galinha',
    'vaca',
    'cavalo',
  ]);

  const handleNewItems = () => {
    setItems(state => [...state, 'sapo', 'macaco', 'onça']);
  };

  return (
    <InfiniteScroll onScrollEnd={handleNewItems}>
      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </InfiniteScroll>
  );
};

describe('<InfiniteScroll />', () => {
  beforeAll(() => {
    jest
      .spyOn(InfiniteScroll, 'handleScrollPosition')
      .mockImplementation(() => jest.fn());
  });
  it('should match snapshots', () => {
    expect(
      render(
        <InfiniteScroll>
          <SomeList />
        </InfiniteScroll>,
      ).container.firstChild,
    ).toMatchSnapshot();

    expect(
      render(
        <InfiniteScroll reverse>
          <SomeList />
        </InfiniteScroll>,
      ).container.firstChild,
    ).toMatchSnapshot();
  });

  it('should call mock function when scroll is in the end', async () => {
    const onScrollEndMock = jest.fn();
    render(
      <InfiniteScroll onScrollEnd={onScrollEndMock}>
        <SomeList />
      </InfiniteScroll>,
    );

    fireEvent.scroll(window);

    await waitFor(() => {
      expect(onScrollEndMock).toHaveBeenCalled();
    });
  });

  it('should load new items when scroll is in the end', async () => {
    render(<InfiniteScrollWithNewItems />);

    let items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(5);

    fireEvent.scroll(window);

    await waitFor(() => {
      items = screen.getAllByRole('listitem');
      expect(items).toHaveLength(8);
    });
  });
});

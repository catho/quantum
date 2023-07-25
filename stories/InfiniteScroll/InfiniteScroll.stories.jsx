// Generated with scripts/create-componnent.js
import { useState } from 'react';
import InfiniteScroll from '../../components/InfiniteScroll';

export default {
  title: 'InfiniteScroll',
  component: InfiniteScroll,
};

const itemsMock = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
];

const fakePromisse = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

const Template = (args) => {
  const { reverse, loading, ...rest } = args;
  const [items, setItems] = useState(
    reverse ? itemsMock.slice(0, 10).reverse() : itemsMock.slice(0, 10),
  );
  const [loadingList, setLoadingList] = useState(false);

  const pushItems = async () => {
    if (items.length < 20) {
      setLoadingList(true);

      if (loading) {
        await fakePromisse();
      }

      setItems(reverse ? [...itemsMock].reverse() : [...itemsMock]);
      setLoadingList(false);
    }
  };

  return (
    <div style={{ height: 180 }}>
      <InfiniteScroll
        reverse={reverse}
        loading={loadingList}
        {...rest}
        onScrollEnd={pushItems}
      >
        <ul>
          {items.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
};

export const Default = Template.bind({});

export const Reverse = Template.bind({});
Reverse.args = {
  reverse: true,
};

export const WithLoaderIndicator = Template.bind({});
WithLoaderIndicator.args = {
  loading: true,
};

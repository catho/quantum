import '../../test-utils/mocks/Carousel/watchMedia.mock';

import { render, screen } from '@testing-library/react';

import Carousel from './Carousel';

const content = [
  {
    imagePath: 'https://assets.catho.com.br/logo/svg/blue.svg',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '1 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://assets.catho.com.br/logo/svg/blue.svg',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '2 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://assets.catho.com.br/logo/svg/blue.svg',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '3 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://assets.catho.com.br/logo/svg/blue.svg',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '4 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://assets.catho.com.br/logo/svg/blue.svg',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '5 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://assets.catho.com.br/logo/svg/blue.svg',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '6 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://assets.catho.com.br/logo/svg/blue.svg',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '7 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://assets.catho.com.br/logo/svg/blue.svg',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '8 Lorem ipsum dolor avec celestium of soterum',
  },
];

describe('<Carousel />', () => {
  it('should match the snapshot', () => {
    expect(render(<Carousel cards={content} />).asFragment()).toMatchSnapshot();
    expect(
      render(<Carousel cards={content} cardSize="small" />).asFragment(),
    ).toMatchSnapshot();
    expect(
      render(<Carousel cards={content} cardSize="large" />).asFragment(),
    ).toMatchSnapshot();
    expect(
      render(
        <Carousel cards={content} cardSize="large" arrowColor="primary" />,
      ).asFragment(),
    ).toMatchSnapshot();
  });

  it('should not have dots when the card size is small', () => {
    render(<Carousel cards={content} cardSize="small" />);

    expect(screen.queryAllByRole('button')).toHaveLength(0);
  });

  it('should hide dots when dotsPagination is false', () => {
    render(<Carousel cards={content} dotsPagination={false} />);

    expect(screen.queryAllByRole('button')).toHaveLength(0);
  });

  it('should hide dots when dotsPagination is false and card size is large', () => {
    render(
      <Carousel cards={content} cardSize="large" dotsPagination={false} />,
    );

    expect(screen.queryAllByRole('button')).toHaveLength(0);
  });

  it('should show dots', () => {
    render(<Carousel cards={content} />);

    expect(screen.getAllByRole('button')).toHaveLength(8);
  });

  it('should show dots when card size is large', () => {
    render(<Carousel cards={content} cardSize="large" />);

    expect(screen.getAllByRole('button')).toHaveLength(8);
  });
});

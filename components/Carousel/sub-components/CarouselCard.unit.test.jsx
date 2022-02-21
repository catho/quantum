import { render, screen } from '@testing-library/react';

import CarouselCard from './CarouselCard';

const CARD_TITLE = 'Card title';
const CARD_DESCRIPTION = 'Lorem ipsum dolor avec';

const content = {
  imagePath: 'https://assets.catho.com.br/logo/svg/blue.svg',
  imageDescription: 'a11y image description',
  title: CARD_TITLE,
  description: CARD_DESCRIPTION,
};

describe('<CarouselCard />', () => {
  it('should match the snapshots', () => {
    expect(
      render(<CarouselCard card={content} cardSize="small" />).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(<CarouselCard card={content} cardSize="medium" />).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(<CarouselCard card={content} cardSize="large" />).asFragment(),
    ).toMatchSnapshot();
  });

  it('small card shouldnt have a title and description', () => {
    render(<CarouselCard card={content} cardSize="small" />);

    expect(screen.queryByText(CARD_TITLE)).not.toBeInTheDocument();
    expect(screen.queryByText(CARD_DESCRIPTION)).not.toBeInTheDocument();
  });

  it('medium cards should have title and description', () => {
    render(<CarouselCard card={content} cardSize="medium" />);

    expect(screen.queryByText(CARD_TITLE)).toBeInTheDocument();
    expect(screen.queryByText(CARD_DESCRIPTION)).toBeInTheDocument();
  });

  it('large cards should have title and description', () => {
    render(<CarouselCard card={content} cardSize="large" />);

    expect(screen.queryByText(CARD_TITLE)).toBeInTheDocument();
    expect(screen.queryByText(CARD_DESCRIPTION)).toBeInTheDocument();
  });
});

import { Grid } from '@mui/material';

import {
  HorizontalExample,
  MobileDesktopExample,
  HideExample,
  NoGuttersExample,
  OffsetExample,
  ContainerExample,
} from './examples';

export default {
  title: 'Grid',
  component: Grid,
};

export const Horizontal = () => <HorizontalExample />;

export const MobileDesktop = () => <MobileDesktopExample />;

export const Hide = () => <HideExample />;

export const NoGutters = () => <NoGuttersExample />;

export const Offset = () => <OffsetExample />;

export const Container = () => <ContainerExample />;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import LoginBox from './LoginBox';
import data from '../data';

describe('LoginBox component', () => {
  it('Should match the snapshot', () => {
    const component = (
      <ThemeProvider theme={data.theme}>
        <ThemeProvider theme={data.menu.desktop.theme}>
          <LoginBox
            handleLoginOpen={() => {}}
            loginOpened={false}
            theme={data.theme}
          />
        </ThemeProvider>
      </ThemeProvider>
    );

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import shadow from './shadow';
import { colors } from './theme';
import hexToRgba from './hexToRgba';

describe('Shadow helper', () => {
  it('should get the correct elevation style', () => {
    // expect(hexToRgba('#f1c245')).toBe('rgba(241,194,69,1)');

    
    const opacities = [0.2, 0.14, 0.12];
    const { neutral:  colorNeutral }  = colors;
    const neutralRGBA = hexToRgba(colorNeutral[700], 0.2);

    opacities.map( (opacity) =>  console.log(hexToRgba(colorNeutral[700], opacity)))

    
    console.log(neutralRGBA);

    // expect(shadow(0)).toBe('box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);')

    // box-shadow: 0px 0px 0px 0px RGBA();
    // 0px 0px 0px 0px RGBA()
    // 0px 0px 0px 0px
  });
});

// .mdc-elevation--z0 {
//   -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
//           box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
// }

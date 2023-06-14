type shadowWithThemeType = (styledParams: object, elevation: string, color?: string) => string;
type shadowType = (elevation?: number, color?: string) => (styledParams: object) => shadowWithThemeType;

declare const shadowWithTheme: (styledParams: object) => shadowWithThemeType;
declare const shadow: shadowType

export { shadowWithTheme };
export default shadow;
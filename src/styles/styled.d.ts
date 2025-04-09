import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      darkGray: string;
      gray: string;
      lightGray: string;
      inputBackground: string;
      orange: string;
      white: string;
      red: string;
    };
  }
}
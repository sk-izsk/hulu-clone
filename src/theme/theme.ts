export interface CustomTheme {
  colors: {
    primaryColor: string;
    secondaryColor: string;
    thirdColor: string;
  };
  fontProperties: {
    textFontSize: number;
    headerFontSize: number;
    fontFamily: string;
  };
  spacing: (value: number) => number;
}

const theme: CustomTheme = {
  colors: {
    primaryColor: `linear-gradient(90deg,#051421,#042727)`,
    secondaryColor: '#d7d5d5',
    thirdColor: '##ffffff',
  },
  fontProperties: {
    textFontSize: 16,
    headerFontSize: 36,
    fontFamily: 'Open Sans,Montserrat, Fira Sans, Lato, Roboto',
  },
  spacing: (value: number) => 8 * value,
};

export { theme };

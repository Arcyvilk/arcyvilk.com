export type Theme = {
  primaryBg: string;
  secondaryBg: string;
  primaryText: string;
  secondaryText: string;
};

export const theme: { light: Theme; dark: Theme } = {
  light: {
    primaryBg: '#9FA2B2',
    secondaryBg: '#dbcdc2',
    primaryText: '#16262E',
    secondaryText: '#2E4756',
  },
  dark: {
    primaryBg: '#16262E',
    secondaryBg: '#2E4756',
    primaryText: '#9FA2B2',
    secondaryText: '#dbcdc2',
  },
};

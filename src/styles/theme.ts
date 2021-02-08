import consts from 'helpers/sass/exportConsts.module.scss';

export const theme = {
  white: consts['white-color'],
  black: consts['black-color'],
  primary: consts['primary-color'],
  secondary: consts['secondary-color'],
  terciary: consts['terciary-color']
};

export type Theme = typeof theme;

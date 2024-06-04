import { PaletteMode, PaletteOptions } from '@mui/material';

const primary = {
  primary100: '#f5b2a7',
  primary500: '#eb654f',
  primary700: '#bc513f',
  primary900: '#a54737',
} as const;

const defaultColors = {
  secondary100: '#e9aabb',
  secondary500: '#D35476',

  neutral100: '#ffffff',
  neutral200: '#e2ebf2',
  neutral300: '#bbcbd9',
  neutral500: '#97a7ba',

  info500: '#E5F1FC',
  info900: '#2B3D50',

  success500: '#69ab46',

  warning500: '#ed8c1c',

  error100: '#fef4f4',
  error500: '#d43b38',
} as const;

export const colors = {
  ...defaultColors,
  ...primary,
} as const;

const basePalette: PaletteOptions = {
  common: {
    black: '#000',
    white: '#fff',
  },
};

const lightPalette = (): PaletteOptions => ({
  ...basePalette,
  mode: 'light',
  primary: {
    light: colors.primary100,
    main: colors.primary500,
    dark: colors.primary700,
  },
  secondary: {
    light: colors.secondary500,
    main: colors.secondary500,
    dark: colors.secondary500,
  },
  error: {
    100: colors.error100,
    500: colors.error500,
  },
  warning: {
    500: colors.warning500,
  },
  info: {
    500: colors.secondary500,
  },
  success: {
    500: colors.success500,
  },
  text: {
    primary: colors.primary700,
    secondary: colors.primary500,
    disabled: colors.neutral500,
  },
});

const darkPalette = (): PaletteOptions => ({
  ...basePalette,
  mode: 'dark',
  primary: {
    light: colors.primary100,
    main: colors.primary500,
    dark: colors.primary700,
  },
  secondary: {
    light: colors.secondary500,
    main: colors.secondary500,
    dark: colors.secondary500,
  },
  error: {
    100: colors.error100,
    500: colors.error500,
  },
  warning: {
    500: colors.warning500,
  },
  info: {
    500: colors.secondary500,
  },
  success: {
    500: colors.success500,
  },
  text: {
    primary: colors.primary100,
    secondary: colors.primary500,
    disabled: colors.neutral500,
  },
});

export const paletteFactory = (mode: PaletteMode) =>
  mode === 'dark' ? darkPalette() : lightPalette();

/**
 * Color Pallet semantic names
 *
 * Pallet tone is one of:
 * - pure
 * - dark
 * - light
 * - pale
 */

import { DynamicKeys } from 'types'

type DynamicColorKeys = {
  [key: string]: DynamicKeys
}

const grayscale: DynamicKeys = {
  black: '#151617',
  darker: '#2C2C3A',
  dark: '#72747b',
  gray: '#DADDDF',
  light: '#EAEDF0',
  lighter: '#F4F6F9',
  white: '#ffffff'
}

const primary: DynamicKeys = {
  pale: '#e5f5ff',
  lighter: '#66C3FF',
  light: '#7BCAFF',
  pure: '#008FBE',
  dark: '#005F7F',
  darker: '#00263E'
}

const dark: DynamicKeys = {
  pure: grayscale.darker,
  dark: grayscale.black,
  light: grayscale.dark
}

const success: DynamicKeys = {
  pale: '#e5f3ef',
  lighter: '#80FFDA',
  light: '#08FFB8',
  pure: '#07EDAB',
  dark: '#00C972',
  darker: '#048560'
}

const info: DynamicKeys = {
  pale: '#f2e5ff',
  lighter: '#B366FF',
  light: '#9933FF',
  pure: '#8000FF',
  dark: '#6700CC',
  darker: '#4D0099'
}

const variant: DynamicKeys = {
  pale: '#fff1e5',
  lighter: '#FFAE66',
  light: '#FF9333',
  pure: '#FF7800',
  dark: '#CC6000',
  darker: '#994800'
}

const warning: DynamicKeys = {
  pale: '#fff9e5',
  lighter: '#FFDE66',
  light: '#FFD333',
  pure: '#FFB703',
  dark: '#CCA000',
  darker: '#997800'
}

const danger: DynamicKeys = {
  pale: '#ffe5ed',
  lighter: '#FF6695',
  light: '#FF3371',
  pure: '#FF004E',
  dark: '#CC0040',
  darker: '#99002F'
}

const neutral: DynamicKeys = {
  pure: grayscale.light,
  dark: grayscale.gray,
  light: grayscale.white
}

const inverse: DynamicKeys = {
  pure: grayscale.white,
  dark: grayscale.light
}

const text: DynamicKeys = {
  normal: primary.darker,
  weak: grayscale.dark,
  inverse: grayscale.white,
  primary: primary.pure,
  'primary-light': primary.light,
  'primary-dark': primary.dark,
  success: success.dark,
  warning: warning.dark,
  danger: danger.dark
}

const color: DynamicColorKeys = {
  primary,
  success,
  info,
  variant,
  warning,
  danger,
  neutral,
  dark,
  inverse,
  grayscale,
  text
}

export default Object.freeze(color)

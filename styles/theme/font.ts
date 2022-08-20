const family = {
  heading: 'PlusJakartaSans, sans-serif',
  text: 'Poppins, sans-serif'
}

const weight = {
  normal: '400',
  medium: '500',
  bold: '800'
}

const size = {
  h1: '5.125rem', // 82px
  h2: '3.625rem', // 58px
  h3: '2.5rem', // 40px
  h4: '2rem', // 32px
  h5: '1.375rem', // 22px
  h6: '1.187rem', // 18px
  root: '0.9375rem', // 15px
  small: '0.8125rem', // 13px
  xsmall: '0.75rem', // 12px
  xxsmall: '0.6875rem' // 11px
}

const lineHeight = {
  lg: '1.7',
  md: '1.5',
  sm: '1.3',
  xs: '1.1'
}

const font = {
  family,
  weight,
  size,
  lineHeight
}

export default Object.freeze(font)

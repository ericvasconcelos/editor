// cel h 450px(sm)
// cel v 600px(md)
// tab h 768px(lg)
// tab v 992px(xl)
// des 1344px(hd)

export type MediaProps = {
  [key in string]: number
}

const media: MediaProps = {
  xs: 0,
  sm: 28.125,
  md: 37.5,
  lg: 48,
  xl: 62,
  hd: 84
}

export default media

const red = '#FF0000'
const persianRose = '#F91E96'
const forestGreen = '#24C92B'
const japaneseLaurel = '#099F0F'

const black26 = '#00000026'
const black29 = '#00000029'
const blackB3 = '#000000B3'
const white = '#ffffff'

export const colors = Object.freeze({
  primary: blackB3,
  background: white,
  header: {
    left: red,
    right: persianRose,
  },
  navbar: {
    selected: red,
    shadow: black29,
  },
  products: {
    border: black26,
    button: {
      left: forestGreen,
      right: japaneseLaurel,
      rover: japaneseLaurel,
    },
  },
  footer: {
    left: red,
    right: persianRose,
  },
})

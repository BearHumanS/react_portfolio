import { css } from '@emotion/react'

export const colorTheme = css`
  :root {
    --red: #f44336;
    --blue: #459ee5;
    --green1: #4caf50;
    --green2: #1098ad;
    --green3: #07b39b;
    --green4: #6fba82;
    --white: #fff;
    --black: #000;
    --grey: #eee;
    --grey2: #a6b5c1;
    --yellow: #f79533;
    --pink1: #f37055;
    --pink2: #ef4e7b;
    --puple: #a166ab;
    --puple2: #5073b8;
  }
`

export const colors = {
  red: 'var(--red)',
  blue: 'var(--blue)',
  green1: 'var(--green1)',
  green2: 'var(--green2)',
  green3: 'var(--green3)',
  green4: 'var(--green4)',
  white: 'var(--white)',
  black: 'var(--black)',
  grey: 'var(--grey)',
  grey2: 'var(--grey2)',
  yellow: 'var(--yellow)',
  pink1: 'var(--pink1)',
  pink2: 'var(--pink2)',
  puple: 'var(--puple)',
  puple2: 'var(--puple2)',
}

export type Colors = keyof typeof colors

import { css } from '@emotion/react'

export const typographyTable = {
  t0: css`
    font-size: 74px;
    line-height: 1.35;
  `,
  t1: css`
    font-size: 32px;
    line-height: 1.35;
  `,
  t2: css`
    font-size: 28px;
    line-height: 1.34;
  `,
  t3: css`
    font-size: 24px;
    line-height: 1.4;
  `,
  t4: css`
    font-size: 20px;
    line-height: 1.45;
  `,
  t5: css`
    font-size: 16px;
    line-height: 1.5;
  `,
  t6: css`
    font-size: 14px;
    line-height: 1.5;
  `,
  t7: css`
    font-size: 12px;
    line-height: 1.5;
  `,
}
export type Typography = keyof typeof typographyTable

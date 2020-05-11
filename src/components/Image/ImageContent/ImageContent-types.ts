import { ImgHTMLAttributes } from 'react'

export interface ImageContentProps
  extends Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    'placeholder' | 'children'
  > {
  src: string
}

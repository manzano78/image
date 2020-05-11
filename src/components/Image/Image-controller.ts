import { ImageProps } from './Image-types'

export function useController(props: ImageProps) {
  const { errorFallback, placeholder = null, ...imageContentProps } = props

  return { imageContentProps, errorFallback, placeholder }
}

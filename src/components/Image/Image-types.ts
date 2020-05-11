import { ReactNode } from 'react'
import { ImageContentProps } from './ImageContent'

export interface ImageProps extends ImageContentProps {
  errorFallback?: ReactNode | ((error: any, retry: () => void) => ReactNode)
  placeholder?: NonNullable<ReactNode> | null
}

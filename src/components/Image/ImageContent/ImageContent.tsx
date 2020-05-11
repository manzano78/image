import React from 'react'
import { ImageContentProps } from './ImageContent-types'
import { useController } from './ImageContent-controller'

export function ImageContent(props: ImageContentProps) {
  const { imageProps } = useController(props)

  return <img alt='' {...imageProps} />
}

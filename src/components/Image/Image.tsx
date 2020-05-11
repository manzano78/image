import React, { Suspense } from 'react'
import { ImageProps } from './Image-types'
import { useController } from './Image-controller'
import { ErrorBoundary } from '@manzano/error-boundary'
import { ImageContent } from './ImageContent'

export function Image(props: ImageProps) {
  const { placeholder, errorFallback, imageContentProps } = useController(props)

  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={placeholder}>
        <ImageContent {...imageContentProps} />
      </Suspense>
    </ErrorBoundary>
  )
}

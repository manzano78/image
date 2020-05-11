import { ImageContentProps } from './ImageContent-types'
import useSWR from 'swr'

export function useController(props: ImageContentProps) {
  useSWR(props.src, fetchImage, { suspense: true })

  return { imageProps: props }
}

function fetchImage(src: string) {
  return new Promise<string>((resolve, reject) => {
    const image = new Image()

    image.onload = () => {
      resolve(src)
    }

    image.onerror = (event, source, lineNumber, columnNumber, error) => {
      reject({ event, source, lineNumber, columnNumber, error })
    }

    image.src = src
  })
}

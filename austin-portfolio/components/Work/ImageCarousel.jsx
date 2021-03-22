import React from 'react';
import {WorkSelectedContext} from "./WorkSelectedContext";
import {
  Img,
  Flex,
} from '@chakra-ui/react'

import {
  ChevronLeftIcon,
  ChevronRightIcon
} from '@chakra-ui/icons'

const ImageCarousel = () => {
  const {workSelected, setWork} = React.useContext(WorkSelectedContext)
  const imagesLength = workSelected.images.length
  const rawImagesArr = workSelected.images
  const [images, setImages] = React.useState(workSelected.images.slice(0, 3))
  const [startImageIndex, setStartImageIndex] = React.useState(0)

  const handleRightChevronClick = () => {
    setStartImageIndex(i => {
      if (i + 1 > imagesLength - 1) {
        return 0
      }
      return i + 1
    })

    const middleIndex = startImageIndex + 1 > imagesLength - 1 ? 0 : startImageIndex + 1
    const endIndex = middleIndex + 1 > imagesLength - 1 ? 0 : middleIndex + 1
    setImages([
      rawImagesArr[startImageIndex],
      rawImagesArr[middleIndex],
      rawImagesArr[endIndex]
    ])
  }

  const handleLeftChevronClick = () => {
    setStartImageIndex(i => {
      if (i - 1 < 0) {
        return imagesLength - 1
      }
      return i - 1
    })

    const middleIndex = startImageIndex - 1 < 0 ? imagesLength - 1 : startImageIndex - 1
    const endIndex = middleIndex - 1 < 0 ? imagesLength - 1 : middleIndex - 1
    setImages([
      rawImagesArr[startImageIndex],
      rawImagesArr[middleIndex],
      rawImagesArr[endIndex]
    ])
  }

  return (
    <Flex direction={'row'} align={'center'}>
      <ChevronLeftIcon
        boxSize={'150px'}
        color={'blue.900'}
        onClick={() => {
          handleLeftChevronClick()
        }}
      />
      {
        images.map((image, index) => (
          <ImageOverlay
            src={image}
            arrangement={index}
            active={index === 1}
          />
        ))
      }
      <ChevronRightIcon
        boxSize={'150px'}
        color={'blue.900'}
        onClick={() => {
          handleRightChevronClick()
        }}
      />
    </Flex>
  )
}

const ImageOverlay = ({ src, active, arrangement, ...props }) => {
  const translateX = arrangement === 0 ? 'translateX(30%)' : 'translateX(-30%)'
  return (
    <React.Fragment>
      {active
        ? (
          <Img
            zIndex={1}
            boxShadow="dark-lg"
            src={src}
            boxSize={"500px"}
            transition={"0.2s ease-in-out"}
          />
        )
        : (
          <React.Fragment>
            <Img
              src={src}
              zIndex={-1}
              transform={translateX}
              boxShadow="dark-lg"
              boxSize={"300px"}
              opacity={0.5}
              transition={"0.2s ease-in-out"}
            />
          </React.Fragment>
        )
      }
    </React.Fragment>
  )
}

export default ImageCarousel
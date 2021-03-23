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
  const [indexes, setIndexes] = React.useState([0, 1, 2])
  const [startImageIndex, setStartImageIndex] = React.useState(0)
  const [arrowClicked, setArrowClicked] = React.useState('right')

  const handleRightChevronClick = () => {
    setStartImageIndex(i => {
      if (i + 1 > imagesLength - 1) {
        return 0
      }
      return i + 1
    })
    setArrowClicked('right')
  }

  const handleLeftChevronClick = () => {
    setStartImageIndex(i => {
      if (i - 1 < 0) {
        return imagesLength - 1
      }
      return i - 1
    })
    setArrowClicked('left')
  }

  React.useEffect(() => {
    if (arrowClicked === 'right') {
      const middleIndex = startImageIndex + 1 > imagesLength - 1 ? 0 : startImageIndex + 1
      const endIndex = middleIndex + 1 > imagesLength - 1 ? 0 : middleIndex + 1
      setIndexes([
        startImageIndex,
        middleIndex,
        endIndex
      ])
    } else {
      const middleIndex = startImageIndex - 1 < 0 ? imagesLength - 1 : startImageIndex - 1
      const endIndex = middleIndex - 1 < 0 ? imagesLength - 1 : middleIndex - 1
      setIndexes([
        startImageIndex,
        middleIndex,
        endIndex
      ])
    }
  }, [startImageIndex, arrowClicked])

  React.useEffect( () => {
    console.log(indexes)
  }, [indexes])

  return (
    <Flex direction={'row'} align={'center'}>
      <ChevronLeftIcon
        boxSize={'150px'}
        color={'blue.900'}
        onClick={() => {
          handleLeftChevronClick()
        }}
        zIndex={100}
        mr={20}
      />
      {
        indexes.map((index) => (
          <ImageOverlay
            src={rawImagesArr[index]}
            key={`${index}`}
            active={index === indexes[1]}
            hide={indexes.findIndex(i => i === index) < 0}
          />
        ))
      }
      <ChevronRightIcon
        boxSize={'150px'}
        color={'blue.900'}
        onClick={() => {
          handleRightChevronClick()
        }}
        zIndex={100}
        ml={20}
      />
    </Flex>
  )
}

const ImageOverlay = ({ src, active, leftImage, rightImage, hide, ...props }) => {
  let translateX = ''
  //
  // if (leftImage) {
  //   translateX = 'translateX(30%)'
  // } else if (rightImage) {
  //   translateX = 'translateX(-30%)'
  // }

  return (
    <React.Fragment>
        <Img
          src={src}
          zIndex={active ? 1 : -1}
          transform={active ? 'scale(1.5)': 'scale(1.0)'}
          boxShadow={active ? "dark-lg" : 'lg' }
          opacity={active ? 1 : 0.5}
          boxSize={"250px"}
          objectFit={'cover'}
          transition={"0.3s ease-in-out"}
        />
    </React.Fragment>
  )
}

export default ImageCarousel
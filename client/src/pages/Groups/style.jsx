import styled from 'styled-components'

const innerHeight = window.innerHeight;

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 220px;
  position: relative;
  & .swiper-container {
    width: 100%;
    height: 100%;
  }
  & .swiper-slide {
    width: 50%;
  }
`

export const ListWrapper = styled.div`
  width: 100%;
  margin-top: 48px;
  height: calc(${innerHeight}px - 220px - 56px - 48px);
`

export const EmptyCard = styled.h1`
  width: 100%;
  height: 112px;
`
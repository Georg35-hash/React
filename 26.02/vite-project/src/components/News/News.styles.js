import styled from "@emotion/styled"
import { Swiper } from "swiper/react"

export const Image = styled.img`
  max-width: 1540px;
  height: 630px;
  width: 100%;

  @media (max-width: 768px) {
      height: 200px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
     height: 200px;
    max-width: 100%;
  }
`;


const StyledSwiper = styled(Swiper)`
  .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }
  .swiper-pagination-bullet {
    background-color: gray;
  }
  .swiper-pagination-bullet-active {
    background-color: white;
  }
`

export default StyledSwiper

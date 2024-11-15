import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { theme } from 'src/theme'
import { BREAKPOINTS } from 'src/constants/BREAKPOINTS'
const { mobile, tablet, desktop, desktopL, desktop4k } = BREAKPOINTS
export const Hero = () => (
  <HeroContainer>
    <AnimatedTitle>
      <div className="textTop">
        <div>
          <span>Zacznij</span> <span>dzień</span>
        </div>
      </div>
      <div className="textBottom">
        <div>od KIWI...</div>
      </div>
    </AnimatedTitle>
  </HeroContainer>
)

const showTopText = keyframes`
  0% {
    transform: translate3d(0, 100%, 0);
  }
  60% {
    transform: translate3d(0, 50%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`

const showBottomText = keyframes`
  0% {
    transform: translate3d(0, -100%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`

const HeroContainer = styled.div`
  position: relative;
  top: 10%;
`

const AnimatedTitle = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  height: 200px;
  position: absolute;
  top: 5%;
  width: ${mobile};
  width: 100%;
  line-height: 37px;

  @media screen and (min-width: ${tablet}) {
    max-width: ${tablet};
  }

  @media screen and (min-width: ${desktop}) {
    max-width: ${desktop};
  }

  @media screen and (min-width: ${desktopL}) {
    max-width: ${desktopL};
  }

  @media screen and (min-width: ${desktop4k}) {
    max-width: ${desktop4k};
  }

  > div {
    left: 50%;
    transform: translate(-50%);
    display: flex;
    justify-content: center;
    height: 50%;
    overflow: hidden;
    position: absolute;
    width: 100%;

    &.textTop {
      width: 40%;
    }

    &.textTop div {
      animation: ${showTopText} 1s;
      animation-delay: 0.5s;
      animation-fill-mode: forwards;
      bottom: 0;
      transform: translate(0, 100%);
    }

    &.textBottom {
      left: 50%;
      text-align: center;
      bottom: 0;
      color: ${theme.accentColor};
    }

    &.textBottom div {
      animation: ${showBottomText} 0.5s;
      animation-delay: 1.75s;
      animation-fill-mode: forwards;
      top: 0;
      transform: translate(0, -100%);
    }

    div {
      font-size: 30px;
      margin-top: 7px;
      position: absolute;

      span {
        font-size: 25px;
        line-height: 30px;
        display: block;
        text-align: center;
        // color: #767676;
        color: white;
      }
    }
  }
`

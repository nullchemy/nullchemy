import { useEffect, useState } from 'react'

interface UseSliderProps {
  selector: string
  wrapper: string
  scroll: string
  scrollIndecator: string
  speed?: number
  prevControl?: string
  nextControl?: string
}

export const useSlider = ({
  selector,
  wrapper,
  scroll,
  scrollIndecator,
  speed = 2,
  prevControl,
  nextControl,
}: UseSliderProps): void => {
  const [slideIndex, setSlideIndex] = useState(0)
  useEffect(() => {
    let elem = document.querySelector(`.${selector}`) as HTMLElement
    let scrollbar = document.querySelector(`.${scroll}`) as HTMLElement
    if (!elem || !scrollbar) return // Add null/undefined checks
    let startPoint = (elem && elem.scrollLeft) || 0

    let originalScrollBarWidth = elem.scrollWidth
    let originalClientBarWidth = elem.clientWidth
    startPoint =
      (startPoint * 100) / (originalScrollBarWidth - originalClientBarWidth)

    let indicator = document.querySelector(`.${scrollIndecator}`) as HTMLElement

    if (!indicator) return // Add null/undefined check

    let indicatorWidth = indicator.offsetWidth
    let customScrollBarWidth = scrollbar.offsetWidth - indicatorWidth

    indicator.style.left = `${(customScrollBarWidth * startPoint) / 100}px`

    scrollbar.style.left = `${startPoint}`

    let flag = false
    let reqId: number | undefined
    let x: number | undefined
    let mouseX: number | undefined
    let centerBreak = 100

    const mouseover = (e: MouseEvent) => {
      x = e.pageX
      mouseX = e.clientX

      if (
        e.target instanceof HTMLElement &&
        e.target.className.includes(wrapper)
      ) {
        flag = false
      } else if (!flag) {
        flag = true
        reqId = requestAnimationFrame(scrollElement)
      }
    }

    const mouseenter = (e: MouseEvent) => {
      reqId = requestAnimationFrame(scrollElement)
      flag = true
      x = e.pageX
      mouseX = e.clientX
    }

    const scrollElement = () => {
      let centerWidth = elem.offsetWidth / 2
      let xOffset = x! - elem.getBoundingClientRect().left
      let clientWidthDT = elem.clientWidth / 2

      if (flag) {
        if (
          clientWidthDT - centerBreak <= mouseX! &&
          mouseX! <= clientWidthDT + centerBreak
        ) {
          flag = false
        } else if (xOffset < centerWidth) {
          let scroll = elem.scrollLeft - speed
          let percentageOriginal =
            (scroll * 100) / (originalScrollBarWidth - originalClientBarWidth)
          let newScrollLeft = (customScrollBarWidth * percentageOriginal) / 100
          elem.scroll
            ? elem.scroll({
                left: scroll,
                behavior: 'auto',
              })
            : (elem.scrollLeft = scroll)

          indicator.style.left = `${newScrollLeft}px`

          //  elem.scrollLeft -= 5
          reqId = requestAnimationFrame(scrollElement)
        } else if (xOffset > centerWidth) {
          let scroll = elem.scrollLeft + speed
          let percentageOriginal =
            (scroll * 100) / (originalScrollBarWidth - originalClientBarWidth)
          //let perceOne = (originalClientBarWidth * 100) / originalScrollBarWidth

          let newScrollLeft = (customScrollBarWidth * percentageOriginal) / 100

          elem.scroll
            ? elem.scroll({
                left: scroll,
                behavior: 'auto',
              })
            : (elem.scrollLeft = scroll)

          indicator.style.left = `${newScrollLeft}px`

          // elem.scrollLeft += 5
          reqId = requestAnimationFrame(scrollElement)
        }
      } else {
      }
    }

    const mouseleave = () => {
      flag = false
      cancelAnimationFrame(reqId!)
      x = undefined
      mouseX = undefined
    }

    // Function to move the slider by one slide
    const moveBySlide = (direction: 'next' | 'prev') => {
      let slides = elem.getElementsByClassName(wrapper)
      if (slides.length === 0) return

      let scrollWidth = elem.scrollWidth + 50
      let clientWidth = elem.clientWidth
      let slideWidth = slides[0].clientWidth
      let maxSlideIndex = Math.floor(scrollWidth / slideWidth) - 1

      let newSlideIndex
      if (direction === 'next') {
        newSlideIndex = Math.min(slideIndex + 1, maxSlideIndex)
      } else {
        newSlideIndex = Math.max(slideIndex - 1, 0)
      }

      setSlideIndex(newSlideIndex)

      let newScrollLeft = newSlideIndex * slideWidth
      let percentageOriginal =
        (newScrollLeft * 100) / (scrollWidth - clientWidth)
      let newIndicatorLeft = (customScrollBarWidth * percentageOriginal) / 100
      console.log(newScrollLeft)

      elem.scrollLeft = newScrollLeft
      indicator.style.left = `${newIndicatorLeft}px`
    }

    // Add event listeners to the controls
    const handleNextSlide = () => {
      moveBySlide('next')
    }

    const handlePrevSlide = () => {
      moveBySlide('prev')
    }

    if (prevControl) {
      const prevButton = document.querySelector(prevControl)
      if (prevButton) {
        prevButton.addEventListener('click', handlePrevSlide)
      }
    }

    if (nextControl) {
      const nextButton = document.querySelector(nextControl)
      if (nextButton) {
        nextButton.addEventListener('click', handleNextSlide)
      }
    }

    elem.addEventListener('mousemove', mouseover)
    elem.addEventListener('mouseenter', mouseenter)
    elem.addEventListener('mouseleave', mouseleave)

    return () => {
      // Remove event listeners
      if (prevControl) {
        const prevButton = document.querySelector(prevControl)
        if (prevButton) {
          prevButton.removeEventListener('click', handlePrevSlide)
        }
      }

      if (nextControl) {
        const nextButton = document.querySelector(nextControl)
        if (nextButton) {
          nextButton.removeEventListener('click', handleNextSlide)
        }
      }

      elem.removeEventListener('mousemove', mouseover)
      elem.removeEventListener('mouseenter', mouseenter)
      elem.removeEventListener('mouseleave', mouseleave)
    }
  }, [
    nextControl,
    prevControl,
    scroll,
    scrollIndecator,
    selector,
    slideIndex,
    speed,
    wrapper,
  ])
}

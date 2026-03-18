import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './index.css'
import carImage from './assets/car.png'

gsap.registerPlugin(ScrollTrigger)

const LETTERS = ['W', 'E', 'L', 'C', 'O', 'M', 'E', ' ', 'I', 'T', 'Z', 'F', 'I', 'Z', 'Z']

function App() {
  const carRef = useRef(null)
  const trailRef = useRef(null)
  const lettersRef = useRef([])
  const valueTextRef = useRef(null)

  useEffect(() => {
    const car = carRef.current
    const trail = trailRef.current
    const valueAdd = valueTextRef.current
    const letters = LETTERS.map((_, i) => lettersRef.current[i]).filter(Boolean)

    const valueRect = valueAdd.getBoundingClientRect()
    const letterOffsets = letters.map((letter) => letter.offsetLeft)

    const roadWidth = window.innerWidth
    const carWidth = 150
    const endX = roadWidth - carWidth

    gsap.to(car, {
      scrollTrigger: {
        trigger: '.section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: '.track',
      },
      x: endX,
      ease: 'none',
      onUpdate: function () {
        const carX = gsap.getProperty(car, 'x') + carWidth / 2
        letters.forEach((letter, i) => {
          const letterX = valueRect.left + letterOffsets[i]
          if (carX >= letterX) {
            letter.style.opacity = 1
          } else {
            letter.style.opacity = 0
          }
        })
        gsap.set(trail, { width: carX })
      },
    })

    gsap.to('#box1', {
      scrollTrigger: {
        trigger: '.section',
        start: 'top+=400 top',
        end: 'top+=600 top',
        scrub: true,
      },
      opacity: 1,
    })

    gsap.to('#box2', {
      scrollTrigger: {
        trigger: '.section',
        start: 'top+=600 top',
        end: 'top+=800 top',
        scrub: true,
      },
      opacity: 1,
    })

    gsap.to('#box3', {
      scrollTrigger: {
        trigger: '.section',
        start: 'top+=800 top',
        end: 'top+=1000 top',
        scrub: true,
      },
      opacity: 1,
    })

    gsap.to('#box4', {
      scrollTrigger: {
        trigger: '.section',
        start: 'top+=1000 top',
        end: 'top+=1200 top',
        scrub: true,
      },
      opacity: 1,
    })
  }, [])

  return (
    <>
      <div className="section">
        <div className="track">
          <div className="road" id="road">
            <img
              src={carImage}
              alt="car"
              className="car"
              id="car"
              ref={carRef}
            />
            <div className="trail" id="trail" ref={trailRef}></div>
            <div className="value-add" id="valueText" style={{ top: '30%' }} ref={valueTextRef}>
              {LETTERS.map((letter, index) => (
                <span
                  key={index}
                  className="value-letter"
                  ref={(el) => (lettersRef.current[index] = el)}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </div>
          </div>

          <div className="text-box" id="box1" style={{ top: '5%', right: '30%' }}>
            <span className="num-box">58%</span> Increase in pick up point use
          </div>

          <div className="text-box" id="box2" style={{ bottom: '5%', right: '35%' }}>
            <span className="num-box">23%</span> Decreased in customer phone calls
          </div>

          <div className="text-box" id="box3" style={{ top: '5%', right: '10%' }}>
            <span className="num-box">27%</span> Increase in pick up point use
          </div>

          <div className="text-box" id="box4" style={{ bottom: '5%', right: '12.5%' }}>
            <span className="num-box">40%</span> Decreased in customer phone calls
          </div>
        </div>
      </div>
    </>
  )
}

export default App

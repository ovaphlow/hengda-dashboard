import React from 'react'

import { ResponsiveBump } from '@nivo/bump'

export function DashBoard(props) {

  const [total, setTotal] = React.useState(0)

  const [number, setNumber] = React.useState(0)

  React.useEffect(() => {
    if (props.id) {
      let percent = parseInt((props.number / props.total) * 100, 10)
      const loop = inx => {
        if (inx > percent) {
          return
        } else {
          const circleBar = document.getElementById(`${props.id}-circle-bar`)
          const color = css(circleBar, 'background-color')
          const left_circle = document.getElementById(`${props.id}-circle-bar-left`)
          const right_circle = document.getElementById(`${props.id}-circle-bar-right`)
          if (inx <= 50) {
            css3(right_circle, 'transform',
              'rotate(' + (inx * 3.6) + 'deg)')
          } else {
            css(right_circle, 'background-color', color)
            css3(right_circle, 'transform', 'rotate(0deg)')
            css3(left_circle, 'transform',
              'rotate(' + ((inx - 50) * 3.6) + 'deg)')
          }
          inx += 1
          setTimeout(() => loop(inx), 5)
        }
      }
      setTotal(i => props.total)
      if (!isNaN(percent))
        loop(0)
    }
  }, [props])


  React.useEffect(() => {
    if (props.number) {
      if (number < props.number) {
        let i = number + 1
        setTimeout(() => setNumber(i), 5)
      }
    }
  }, [number, props.number])


  const css = (element, property, value) => {
    if (value) {
      let index = property.indexOf('-')
      if (index !== -1) {
        const char = property.charAt(index + 1).toUpperCase()
        property.replace(/(-*){1}/, char)
      }
      element.style[property] = value
    } else {
      return window.getComputedStyle(element).getPropertyValue(property)
    }
  }

  const css3 = (element, property, value) => {
    if (value) {
      property = capitalize(property.toLowerCase())
      element.style['webkit' + property] = value
      element.style['Moz' + property] = value
      element.style['ms' + property] = value
      element.style['O' + property] = value
      element.style[property.toLowerCase()] = value
    } else {
      return window.getComputedStyle(element).getPropertyValue(
        ('webkit' + property) || ('Moz' + property) || ('ms' + property) || ('O' + property) || property)
    }
    function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }
  }

  return (
    <div
      id={`${props.id}-circle-bar`}
      className={`circle-bar ${props.barColor} mx-auto mt-1`}
      style={{ fontSize: props.size }}>
      <div
        id={`${props.id}-circle-bar-left`}
        className="circle-bar-left">
      </div>
      <div
        id={`${props.id}-circle-bar-right`}
        className="circle-bar-right"></div>
      <div className="mask shadow">
        <span>
          {number}/{total}
        </span>
      </div>
    </div>
  )
}

export function TestBump({data}) {
  return (
    <ResponsiveBump
        data={data}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        colors={{ scheme: 'spectral' }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={10}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '车次',
            legendPosition: 'middle',
            legendOffset: -40
        }}
    />
  )
}
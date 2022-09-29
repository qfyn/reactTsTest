import React, { useState, useEffect } from "react"

const MouseTracker: React.FC = () => {
  const [positions, setPositions] = useState({x: 0, y: 0})

  // 如果useEffect返回的是函数，react将会在执行清除操作的时候调用该函数
  useEffect( () => {
    console.log('add effact', positions.x)
    const updateMouse = (e: MouseEvent) => {
      console.log('inner')
      setPositions({x: e.clientX, y: e.clientY})
    }
    document.addEventListener('click', updateMouse)

    return () => {
      console.log('remove effact', positions.x)
      document.removeEventListener('click', updateMouse)
    }
  }, []) // []表示只会执行一次
  console.log('before render', positions.x)

  return (
    <p>X: {positions.x}, Y: {positions.y}</p>
  )
}

export default MouseTracker